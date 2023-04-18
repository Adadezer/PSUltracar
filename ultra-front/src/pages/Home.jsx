import QRCode from 'react-qr-code';
import { useContext } from 'react';
import { Grid, TextField, Stack, Button } from '@mui/material';
import '../App.css';
import UltracarContext from '../context/UltracarContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import schemaValidations from '../helpers/schemaValidations';

function Home() {
  const { link, setLink, isFieldInvalid, setIsFieldInvalid } = useContext(UltracarContext);
  const navigate = useNavigate();
  const Consult = () => navigate('/client');
  
  function handleQRCode(e) {
    setLink(`${e.target.value}`);
    
    const schemaValidate = schemaValidations.name().validate(e.target.value);

    if (schemaValidate.error) {
      setIsFieldInvalid(true);
    } else {
      setIsFieldInvalid(false);
    }
  }
  return (
    <>
      <Navbar />
      <Grid
        container
        component='form'
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item p={4} >
            <TextField
              helperText='digite o nome do cliente'
              label='cliente'
              variant='outlined'
              value={ `${link}` }
              onChange={(e) => handleQRCode(e)}
              error={isFieldInvalid}
            />
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Button variant='outlined' onClick={Consult}>Consultar</Button>
            </Stack>
            <Grid item>
              <p>Ou acesse o QrCode</p>
              <QRCode value={`http://localhost:3000/client`}/>
            </Grid>
        </Grid>  
      </Grid>
    </>
  );
}

export default Home;
