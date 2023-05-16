import React from 'react'
import HzForm from '../components/HzForm'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useLocation, useNavigate } from 'react-router-dom'
import {Box,Button,InputAdornment,TextField,Typography} from '@mui/material'
const BookForm = () => {

  let navigate = useNavigate()
  let location = useLocation()
  let BookingCar = location.state
  let BookingConfirm = ()=>{
    confirm("Confirm your Booking?")
    navigate('/Mybooking')
  }
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
    <Typography sx={{ marginLeft: "10%", marginTop: "2%",marginBottom:"20px" }} variant="h3">Booking Form</Typography>
    <TextField
              label="Starting Location"
              sx={{ marginLeft: "10%", width: "40%", marginTop: "13px", marginBottom:"20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            /><br />
            <TextField
              label="Ending Location"
              sx={{ marginLeft: "10%", width: "40%", marginTop: "13px",marginBottom:"20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            /><br />
            {/* <TextField
              label="Cost"
              sx={{ marginLeft: "10%", width: "40%", marginTop: "13px",marginBottom:"20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            /><br /> */}
            <TextField
              label="Date"
              sx={{ marginLeft: "10%", width: "40%", marginTop: "13px",marginBottom:"20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <HistoryToggleOffIcon />
                  </InputAdornment>
                ),
              }}
            /><br />
               {/* <TextField
              label="Ending Date"
              sx={{ marginLeft: "10%", width: "40%", marginTop: "13px",marginBottom:"20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <HistoryToggleOffIcon />
                  </InputAdornment>
                ),
              }}
            /> */}
            <Box>
        <Button
          sx={{
            marginTop: "2%",
            marginBottom: "2%",
            width: "15%",
            fontSize: "19px",
            fontWeight: "bold",
            marginLeft: "20%",
          }}
          variant="contained"
          size="medium"
          onClick={()=>BookingConfirm()}
        >
        Confirm
        </Button>
      </Box>
    



    </>
  )
}

export default BookForm