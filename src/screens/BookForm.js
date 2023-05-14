import React from 'react'
import HzForm from '../components/HzForm'
import { useLocation } from 'react-router-dom'
import {Box,Typography} from '@mui/material'
const BookForm = () => {
  let location = useLocation()
  let BookingCar = location.state
  return (
    <>
                <Box className="BookDetails">
        <Box className="BookDetailsIMG">
          <img src={BookingCar.img} />
                </Box>
                <Box className="CardDetailbody">
          <Typography marginBottom={2} variant="h4" >{BookingCar.title} </Typography>
          <Typography marginBottom={2} variant="h5">Model:   {BookingCar.model}</Typography>
          <Typography marginBottom={3} className='description' >{BookingCar.desc}</Typography>
          <Typography variant='h4'>Features</Typography>
          <Typography marginBottom={1} marginTop={2} variant="h6">AC:  {BookingCar.features.AC ? "Available" : "Disabled"}</Typography>
          <Typography marginBottom={1} variant="h6">Bluetooth:  {BookingCar.features.Bluetooth ? "Available" : "Disabled"}</Typography>
          <Typography marginBottom={1} variant="h6">GPS:  {BookingCar.features.GPS ? "Available" : "Disabled"}</Typography>
          <Typography marginBottom={1} variant="h6">USBPORT:  {BookingCar.features.USBPORT ? "Available" : "Disabled"}</Typography>
                </Box>
    </Box>

    {/* <Hz-  ------- */}
    </>
  )
}

export default BookForm