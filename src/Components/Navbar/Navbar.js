import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets//images/Gym_Logo.webp'


const Navbar = () => {
  return (
    <Stack className = 'NavStack' direction='row' justifyContent='space-around'
         sx={{gap: {sm:"122px", xs:"480px"}, mt:{ sm: '32px', xs:'20px' }, justifyContent:"none"}} px = "20px" >
        
        <Link to="/">
            <img  src= {Logo} alt='logo' className='logo_img'
                style={{ borderRadius: "50%" , width:"60px", height :"60px" , margin:"0 20px"}}
            />
        </Link>
        
        <Stack direction='row' gap='50px' fontSize = '24px' alignItems = "flex-end" >
            <Link style={{textDecoration : "none", color : "#3a1212", borderBottom:"3px solid #FF2625"}}>Home</Link>
            <a href='#exercises' style={{textDecoration : "none", color : "#3a1212"}} >exercieses</a>
        </Stack>
    
    </Stack>
  )
}

export default Navbar
//0102447260