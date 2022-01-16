import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';


export default function LoginForm(){
    return(
        <Container maxWidth="sm">
            <br/> 
            <br/> 
            <TextField id="outlined-basic" label="AccountHash" type="text" variant="outlined" size="medium" fullWidth required/>
            <br />
            <br />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" size="medium" fullWidth required/>
            <br/>
            <br/>
            <Button type="submit" variant="contained" color='primary' fullWidth>Sign In</Button>
            <br />
            <br />
            <Button type="submit" variant="outlined" color="secondary" fullWidth>Sign Up Now</Button>
        </Container>
    );
}