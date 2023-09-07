import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Videos } from './'
import { fetchFromAPI } from '../constants/fetchFromAPI';


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {

    //FETCHING DATA USING API

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))

  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results For {searchTerm}
        {/* <span style={{ color: '#F31503' }}> Videos</span> */}
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed