import LockOpenIcon from '@mui/icons-material/LockOpen';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { TextField, Typography, InputAdornment , Box , Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginUser } from '../config/firebase/firebasemethod';
function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//     let textfield=[{
//         name: "UserName or Email",
//         icon:  <MarkunreadIcon />
//     },
// {
//     name: "Password",
//     icon: <LockOpenIcon />
// }
// ]
let obj = {
    email,
    password
}
    let login = () => {
        LoginUser(obj)
            .then((success) => {
                console.log(success)
                navigate("/Home")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(
        <>
            <Typography sx={{ marginLeft: "10%", marginTop: "2%", }} variant="h3">LogIn</Typography>
            <br />
            <br />

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
                label="Password"
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
                    onClick={() => login()}
                >
                    Login
                </Button>
            </Box>
        </>
    )
}
export default Login