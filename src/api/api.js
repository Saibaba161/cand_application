import React, { useEffect, useState } from 'react';
import GroupedSelect from '../components/searchlists';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

const UseFetchingData = () => {

    const [data, setData] = useState([]);
    const [showMore, setShowMore] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": 10,
          "offset": 1
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();

        if(result && result.jdList) {
            setData(result.jdList);
            setShowMore(new Array(result.jdList.length).fill(false));
        }
        
        } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  const handleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  }

  return (
    <div className='job-details-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
    
        <h1>Search Jobs</h1>

        <div className='search-and-select' style={{marginBottom: '20px'}}>
            <GroupedSelect />
        </div>

        <Grid container spacing={1} display='flex' marginLeft='100px'>

        {data.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                <Card sx={{ maxWidth: 350, borderRadius: '15px', marginBottom: '10px', border: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.1)'}}>
                    <CardContent style={{ height: showMore[index] ? 'auto': '400px',maxHeight: '500px', overflow: 'hidden'}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: 'black', fontFamily: 'poppins'}}>
                            {job.jdLink}
                        </Typography>
                        <Typography color="text.secondary" sx={{ marginTop: '10px', fontFamily: 'Poppins' }}>
                                    {job.jobDetailsFromCompany}
                        </Typography>        
                    </CardContent>
                    <Button onClick={() => handleShowMore(index)} size="small" sx={{  }}>
                        {showMore[index] ? 'Show less' : 'Show More'}
                    </Button>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button size='large' sx={{color: 'black', backgroundColor: '#83f167' }}>⚡Easy Apply</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>
</div>

  );
};

export default UseFetchingData;
