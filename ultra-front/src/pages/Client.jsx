import { Grid, TextField } from '@mui/material';
import '../App.css';
import { useContext, useState } from 'react';
import UltracarContext from '../context/UltracarContext';

function Client() {
  const [funcionario, setFuncionario] = useState('');
  const { link } = useContext(UltracarContext);
  console.log('link aqui: ',link);

  function handleFuncionario(e) {
    setFuncionario(e.target.value);
  }
  return (
    <Grid
    container
    component="form"
    spacing={1}
    p={1}
    m={1}
    >
      
      <TextField
        className='input'
        helperText="digite quem será o responsável pelo serviço"
        label="funcionário"
        variant="outlined"
        value={ `${funcionario}` }
        onChange={(e) => handleFuncionario(e)}
        />
        <div>{link}</div>
    </Grid>
    
  );
}

export default Client;
