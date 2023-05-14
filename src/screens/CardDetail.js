import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';

const CardDetail = () => {
    let navigate = useNavigate()
    let Booking = (x)=>{
        navigate('/BookForm', {
            state: x
        })
    }
    let location = useLocation()
    let CardDet = location.state;
    console.log(CardDet)
    return (
        <>
            <Box className="CardDetails">
                <Box className="CardDetailsIMG">
                    <img src={CardDet.img} />
                </Box>
                <Box className="CardDetailbody">
                    <Typography marginBottom={2} variant="h2" >{CardDet.title} </Typography>
                    <Typography marginBottom={2} variant="h4">Model:   {CardDet.model}</Typography>
                    <Typography marginBottom={2} variant="h5">AC:  {CardDet.features.AC ? "Available" : "Disabled"}</Typography>
                    <Typography marginBottom={2} variant="h5">Bluetooth:  {CardDet.features.Bluetooth ? "Available" : "Disabled"}</Typography>
                    <Typography marginBottom={2} variant="h5">GPS:  {CardDet.features.GPS ? "Available" : "Disabled"}</Typography>
                    <Typography marginBottom={2} variant="h5">USBPORT:  {CardDet.features.USBPORT ? "Available" : "Disabled"}</Typography>
                    <Typography marginBottom={3} className='description' >{CardDet.desc}</Typography>
                    <Typography marginBottom={1} variant='h5' >  Status:
                      <span style={{ color: CardDet.available ? "greenyellow" : "red" }}>
                            {CardDet.available ? `Available` : "Not Available"}
                        </span></Typography>
                    <Box>{CardDet.available ?
                        <Button className='btndetail' onClick={() => Booking(CardDet)}
                         variant='contained'>Book Now</Button>
                        : <Button className='btndetaild'onClick={()=>{
                            alert("This Car is Not Available")
                            navigate('/Home')
                        }} variant='contained'>Please Try Later</Button>                }  </Box>
                </Box>
    </Box>
        </>
    )
}

export default CardDetail