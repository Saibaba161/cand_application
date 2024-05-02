import React, { useEffect, useState } from 'react';
import GroupedSelect from '../components/searchlists';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

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
          "offset": 0
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
    <div className='job-details-container'>
    
        <h1>Connected to the API</h1>

        <div className='search-and-select'>
            <GroupedSelect />
        </div>

        <Grid container spacing={2}>

        {data.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                <Card sx={{ minWidth: 200, marginBottom: '10px'}}>
                    <CardContent style={{ height: showMore[index] ? 'auto': '100px', overflow: 'hidden'}}>
                        <Typography variant="h5" component="div">
                            {job.jdLink}
                        </Typography>
                        <Typography color="text.secondary" sx={{ marginTop: '10px' }}>
                                    {job.jobDetailsFromCompany}
                        </Typography>        
                    </CardContent>
                    <Button onClick={() => handleShowMore(index)} size="small">
                        {showMore[index] ? 'Show less' : 'Show More'}
                    </Button>
                </Card>
            </Grid>
        ))}
    </Grid>
</div>

  );
};

export default UseFetchingData;
