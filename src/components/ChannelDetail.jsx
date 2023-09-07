import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './index'
import { fetchFromAPI } from '../constants/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {

    // FETCHING CHANNEL DATA

    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

    //FETCHING VIDEOS DATA

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <ChannelCard channelDetail={channelDetail} />
      </Box>

      <Box display="flex" p="2" overflow='hidden'>
        <Box sx={{ mr: { sm: '10px' }, ml: '20px' }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail