import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';



export default function GroupedSelect() {
  return (
    <div className='list_search'>
      <FormControl sx={{ m: 1, minWidth: 120, fontFamily:'Poppins' }}>
        <InputLabel htmlFor="grouped-select">Roles</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          
          <ListSubheader>ENGINEERING</ListSubheader>
          <MenuItem value={1}>Backend</MenuItem>
          <MenuItem value={2}>Frontend</MenuItem>
          <MenuItem value={3}>Fullstack</MenuItem>
          <MenuItem value={4}>IOS</MenuItem>
          <MenuItem value={5}>Flutter</MenuItem>
          <MenuItem value={6}>React Native</MenuItem>
          <MenuItem value={7}>Android</MenuItem>
          <MenuItem value={8}>Tech Lead</MenuItem>
          <MenuItem value={9}>Devops</MenuItem>
          <MenuItem value={10}>Data Engineer</MenuItem>
          <MenuItem value={11}>Data Science</MenuItem>
          <MenuItem value={12}>Computer-vision</MenuItem>
          <MenuItem value={13}>Nlp</MenuItem>
          <MenuItem value={14}>Deep Learning</MenuItem>
          <MenuItem value={15}>Test/QA</MenuItem>
          <MenuItem value={16}>Web3</MenuItem>
          <MenuItem value={17}>Sre</MenuItem>
          <MenuItem value={18}>Data Infrastructure</MenuItem>
          <ListSubheader>DESIGN</ListSubheader>
          <MenuItem value={1}>Designer</MenuItem>
          <MenuItem value={2}>Design Manager</MenuItem>
          <MenuItem value={3}>Graphic Designer</MenuItem>
          <MenuItem value={4}>Product Designer</MenuItem>
          <ListSubheader>PRODUCT</ListSubheader>
          <MenuItem value={1}>Product Manager</MenuItem>
          <ListSubheader>OPERATIONS</ListSubheader>
          <MenuItem value={1}>Operations Manager</MenuItem>
          <MenuItem value={2}>Founder's Office/Chief of Staff</MenuItem>
          <ListSubheader>SALES</ListSubheader>
          <MenuItem value={1}>Sales Development Representative</MenuItem>
          <MenuItem value={2}>Account Executive</MenuItem>
          <MenuItem value={3}>Account Manager</MenuItem>
          <ListSubheader>MARKETING</ListSubheader>
          <MenuItem value={1}>Digital Marketing Manager</MenuItem>
          <MenuItem value={2}>Growth Hacker</MenuItem>
          <MenuItem value={3}>Marketing</MenuItem>
          <MenuItem value={4}>Product Marketing Manager</MenuItem>
          <ListSubheader>OTHER ENGINEERING</ListSubheader>
          <MenuItem value={1}>Hardware</MenuItem>
          <MenuItem value={2}>Mechanical</MenuItem>
          <MenuItem value={3}>Systems</MenuItem>
          <ListSubheader>BUSINESS ANALYST</ListSubheader>
          <MenuItem value={1}>Business Analyst</MenuItem>
          <ListSubheader>DATA ANALYST</ListSubheader>
          <MenuItem value={1}>Data Analyst</MenuItem>
          <ListSubheader>PROJECT MANAGER</ListSubheader>
          <MenuItem value={1}>Project Manager</MenuItem>
          <ListSubheader>MANAGEMENT</ListSubheader>
          <MenuItem value={1}>Management</MenuItem>
          <ListSubheader>LEGAL</ListSubheader>
          <MenuItem value={1}>Legal</MenuItem>
          <ListSubheader>HR</ListSubheader>
          <MenuItem value={1}>HR</MenuItem>
          <ListSubheader>FINANCE</ListSubheader>
          <MenuItem value={1}>Finance</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 200, fontFamily: 'Poppins'}}>
        <InputLabel htmlFor="grouped-select">No. of Employees</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          
          
          <MenuItem value={1}>1-10</MenuItem>
          <MenuItem value={2}>11-20</MenuItem>
          <MenuItem value={3}>21-50</MenuItem>
          <MenuItem value={4}>51-100</MenuItem>
          <MenuItem value={5}>101-200</MenuItem>
          <MenuItem value={6}>201-500</MenuItem>
          <MenuItem value={7}>500+</MenuItem>
          
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180, fontFamily: 'Poppins' }}>
        <InputLabel htmlFor="grouped-select">Experience</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120, fontFamily: 'Poppins' }}>
        <InputLabel htmlFor="grouped-select">Remote</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          
          <MenuItem value={1}>Remote</MenuItem>
          <MenuItem value={2}>Hybrid</MenuItem>
          <MenuItem value={3}>In-Office</MenuItem>
          
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250, fontFamily: 'Poppins' }}>
        <InputLabel htmlFor="grouped-select">Minimum Base Pay Salary</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          
          <MenuItem value={1}>0L</MenuItem>
          <MenuItem value={2}>10L</MenuItem>
          <MenuItem value={3}>20L</MenuItem>
          <MenuItem value={4}>30L</MenuItem>
          <MenuItem value={5}>40L</MenuItem>
          <MenuItem value={6}>50L</MenuItem>
          <MenuItem value={7}>60L</MenuItem>
          <MenuItem value={8}>70L</MenuItem>
          
        </Select>
        </FormControl>
        
        <Stack spacing={2} sx={{ width: 300, marginLeft: '10px', fontFamily: 'Poppins' }}>

          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={[]}
            
  
            renderInput={(params) => (
            <TextField
                {...params}
                label="Search input"
                InputProps={{
                ...params.InputProps,
                type: 'search',
                }}
            />
            )}
          />
        </Stack>
    </div>
  );
}


