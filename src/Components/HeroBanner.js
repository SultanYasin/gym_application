import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/Hero_img.webp';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '200px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
  
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
  
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="19px" mt="25px">
      Sweat, Smile <br /> And Repeat
    </Typography>

    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    
    <Stack>
      <a href="#exercises"
       style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center',
       background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none',
       color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '150px' }}>
      Exercise
    </Typography>{/* hide the Exercise word in mobile device  ->  display: { lg: 'block', xs: 'none' }*/}
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  
  </Box>
);

export default HeroBanner;

/* import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
       mt:{lg:"212px", xs: "70px"}, 
       ml:{sm: "50px"}
       }} position="relative" p="20px" >
        <Typography color='#ff2625' fontWeight="600" fontSize="26px">Fitness Club</Typography>
        
        <Typography fontWeight={700} mb={5} sx={{fontSize: {lg: '44px' , xs:"40px"}}} >swet, smile and repet</Typography>
        
        <Typography fontSize='22px' lineHeight="35px"  >Check out the most effective exercieses</Typography>

        <Button variant='contained' href='#exercieses' >Check out</Button>
    
       <img src={HeroBannerImage} alt='banner_img' className='hero-banner-img' />
       
    </Box>
  )
}

export default HeroBanner */
