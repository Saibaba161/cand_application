import React, { useEffect, useState } from 'react';
import GroupedSelect from '../components/searchlists';

const UseFetchingData = () => {

    const [data, setData] = useState([]);

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

  return (
    <div className='job-details-container'>
    
    <h1>Connected to the API</h1>

    <div className='search-and-select'>
        <GroupedSelect />
    </div>

    {data.map(job => (
        <div className='job-details'>
        <h2>job.jdLink</h2>
        <p>{job.jobDetailsFromCompany}</p>
        </div>
    ))}
    </div>
  );
};

export default UseFetchingData;
