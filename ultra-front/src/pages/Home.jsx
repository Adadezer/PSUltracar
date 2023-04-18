import QRCode from 'react-qr-code';
import { useContext } from 'react';
import { Grid, TextField, Stack, Button } from '@mui/material';
import '../App.css';
import UltracarContext from '../context/UltracarContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { link, setLink } = useContext(UltracarContext);
  const navigate = useNavigate();
  const Consult = () => navigate('/client');

  function handleQRCode(e) {
    setLink(`${e.target.value}`);
  }
  return (
    <Grid
      container
      justifyContent='center'
      alignSelf='center'
    >
      <Grid item >
        <div className='container-item'>
          <TextField
            className='input'
            helperText='digite o nome do cliente'
            label='cliente'
            variant='outlined'
            value={ `${link}` }
            onChange={(e) => handleQRCode(e)}
          />
          <Stack spacing={2} direction='row'>
            <Button variant='outlined' onClick={Consult}>Consultar</Button>
          </Stack>
          <Grid item>
            <p>Ou acesse o QrCode</p>
            <QRCode value={`http://localhost:3000/client`}/>
          </Grid>
        </div>
      </Grid>  
    </Grid>
  );
}

export default Home;
