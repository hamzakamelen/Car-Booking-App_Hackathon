import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Cards = () => {
    let navigate = useNavigate()
    const carData = [
        {
            id: 1,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Honda Civic",
            model: "2021",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: true,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: false

        },
        {
            id: 2,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Honda Civic",
            model: "2021",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: true,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        },
        {
            id: 3,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Elantra",
            model: "2022",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: false,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        }, {
            id: 4,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Elantra",
            model: "2022",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: false,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        }, {
            id: 5,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Elantra",
            model: "2022",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: false,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        },
        {
            id: 6,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Honda City",
            model: "2020",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: false,
                Bluetooth: true,
                USBPort: true,
            },
            reviews: {
                userName: "Noman",
                rating: "4",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        }, {
            id: 7,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Elantra",
            model: "2022",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: false,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        }, {
            id: 8,
            img: "https://cdn.wallpapersafari.com/19/63/HYnDUL.jpg",
            title: "Elantra",
            model: "2022",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet, commodi unde atque laboriosam in a itaque deserunt?Accusantium!",
            features: {
                AC: true,
                GPS: true,
                Bluetooth: false,
                USBPort: true,
            },
            reviews: {
                userName: "Danish Siddiqui",
                rating: "5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quoddolorum perferendis tenetur tempore officia eveniet ullam neque sed fugit ad, amet,"
            },
            available: true

        },
    ]
    const CardDet = (e) =>{
        navigate('/CardDetail',{
            state:e
        })
    }

    return (
      <Box borderRadius={2} marginTop={2} marginLeft={3} className="cards">
            {carData && Array.isArray(carData) && carData.length > 0 ? carData.map((x,i)=>{
        return(
            <>
        <Box>
    <Box>
              <img key={i} src={x.img} />
    </Box>
    <Box className="card-body">
                <Typography variant="h4">{x.title}</Typography>
                <Typography marginLeft={0.4} variant="subtitle2">{x.desc}</Typography>
                <Button className='btn' onClick={() => CardDet(x)} variant='contained'>Book Now</Button>
    </Box>
        </Box>

        </>
            )
       }):null}
  </Box>
  
    )
}

export default Cards