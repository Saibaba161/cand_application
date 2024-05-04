import React, { useEffect, useState } from 'react';
import GroupedSelect from '../components/searchlists';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

const UseFetchingData = () => {

    const [data, setData] = useState([]);
    const [showMore, setShowMore] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedValues, setSelectedValues] = useState({
      role: '',
      employees: '',
      experience: '',
      remote: '',
      salary: '',
    });
    const [searchQuery, setSearchQuery] = useState('');

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

  const handleSelectChange = (event, field) => {
    const value = event.target.value
    setSelectedValues(prevState => ({
      ...prevState,
      [field]: value
    }));
    filterData(selectedValues, searchQuery, field, value);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    filterData(selectedValues, query);
  }

  const filterData = (selectedValues, query) => {
    const filtered = data.filter(job => {
      let match = true
      for (const key in selectedValues) {
        if(selectedValues[key] !== '' && job[key] !== selectedValues[key]) {
          match = false
          break
        }
      }
      if (query && job.companyName.toLowerCase().indexOf(query.toLowerCase()) === -1) {
        match = false
      }
      return match
    })
    setFilteredData(filtered)
  }

  return (
    <div className='job-details-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%'}}>
    
        <h1>Search Jobs</h1>

        <div className='search-and-select' style={{marginBottom: '20px'}}>
            <GroupedSelect 
                handleSelectChange={handleSelectChange}
                handleSearchChange={handleSearchChange}
            />
        </div>

        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%'}} >
        <Grid container spacing={0} justifyContent='center' marginLeft= '10vh'>

        {(filteredData.length > 0 ? filteredData : data ).map((job, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={job.jdUid} style={{ margin: 'auto', marginBottom: '20px' }}>
                <Card sx={{ 
                  maxWidth: 350,
                  borderRadius: '15px',
                  margin: '4px', 
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.025)'
                  },
                  maxHeight: '80vh'
                }}>
                    <CardContent style={{ height: showMore[index] ? 'auto': '450px',maxHeight: '600px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: 'black', fontFamily: 'poppins'}}>
                            {job.jdLink}
                        </Typography>
                        <Typography color="text.secondary" sx={{ marginTop: '10px', fontFamily: 'Poppins' }}>
                            {job.jobDetailsFromCompany}
                        </Typography>
                    <Button onClick={() => handleShowMore(index)} size="medium">
                            {showMore[index] ? 'Show less' : 'View Job'}
                    </Button>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size='large' sx={{color: 'black', backgroundColor: '#83f167', flexDirection: 'column'}}>⚡Easy Apply</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>
    </div>
</div>

  );
};

export default UseFetchingData;
