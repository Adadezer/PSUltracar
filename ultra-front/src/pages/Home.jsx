import QRCode from 'react-qr-code';
import { useContext } from 'react';
import { Grid, TextField } from '@mui/material';
import '../App.css';
import UltracarContext from '../context/UltracarContext';
import ScreenService from '../components/ScreenService';

function Home() {
  const { link, setLink } = useContext(UltracarContext);

  function handleQRCode(e) {
    setLink(`${e.target.value}`);
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignSelf="center"
    >
      <Grid item >
        <div className="container-item">
          <TextField
            className='input'
            helperText="digite o nome do cliente"
            label="cliente"
            variant="outlined"
            value={ `${link}` }
            onChange={(e) => handleQRCode(e)}
          />
          <ScreenService />
          <div>
            <p>Ou acesse o QrCode</p>
            <QRCode value={`http://localhost:3000/client`}/>
          </div>
        </div>
      </Grid>  
    </Grid>
  );
}

export default Home;
