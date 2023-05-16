import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Button, FormControl, FormControlLabel,
  FormLabel, InputAdornment, InputLabel,
  MenuItem, Radio, RadioGroup, Select, TextField, Typography , Box
} from "@mui/material";
import { Signupuser } from '../config/firebase/firebasemethod';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    // let textfield = [{
    //   name: "First Name",
    //   icon: <PermContactCalendarIcon />
    // }, {
    //     name: "Last Name",
    //   icon: <PermContactCalendarIcon />
    //   },
    //   {
    //     name: "Email",
    //     icon: <MarkunreadIcon />
    //   },
    //   {
    //     name: "Phone No.",
    //     icon: <PhoneIcon />
    //   },
    // {
    //   name: "Password",
    //   icon: <LockOpenIcon />
    // },
    //   {
    //     name: "Confirm Password",
    //     icon: <LockOpenIcon />
    //   }
    // ]
  let dropdownitem = [{
    name: "Type",
    value: ["Transporter", "User"]

  }]


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("")
  const obj={
    email,
    password
  }
  const signUp = ()=>{

    Signupuser(obj)
    .then((success) => {
      // Signed in 
      console.log(success)
      navigate("/login")
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  return (
    <>
      <Typography sx={{ marginLeft: "10%", marginTop: "2%", }} variant="h3">Sign Up</Typography>
      <br />
      <br />
      <TextField
        label="User Name"
        onChange={(e) => setUserName(e.target.value)}
        sx={{ marginLeft: "10%", width: "40%", marginTop: "13px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PermContactCalendarIcon />
            </InputAdornment>
          ),
        }}
      />< br />
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginLeft: "10%", width: "40%", marginTop: "13px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MarkunreadIcon />
            </InputAdornment>
          ),
        }}
      />< br />
      <TextField
        label="Contact"
        sx={{ marginLeft: "10%", width: "40%", marginTop: "13px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />< br />
      <TextField
        label="Password"
        sx={{ marginLeft: "10%", width: "40%", marginTop: "13px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
      />< br />
      <TextField
        label="Confirm Password"
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginLeft: "10%", width: "40%", marginTop: "13px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
      />

      {dropdownitem && Array.isArray(dropdownitem) && dropdownitem.length > 0 ? dropdownitem.map((x, i) => {
        return (<>
          <br />
          <FormControl key={i} sx={{ marginLeft: "10%", width: "40%", marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">
              {x.name}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={x.name}
            >
              {x.value.map((a, b) => {
                return (
                  <MenuItem key={b} value={a}>
                    {a}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </>
        )
      }) : null}


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
          onClick={()=>signUp()}
        >
          SignUp
        </Button>
      </Box>
    </>
  )

  }




  


export default Signup