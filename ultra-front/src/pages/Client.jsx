import { Grid, TextField, MenuItem } from '@mui/material';
import '../App.css';
import { useContext, useState } from 'react';
import UltracarContext from '../context/UltracarContext';
import DateTime from '../components/DateTime';

function Client() {
  const { link } = useContext(UltracarContext);
  const [fields, setFields] = useState({
    funcionario: '',
    servico: '',
  });
  const [selectedService, setSelectedService] = useState('');
  const [mechanicalServices] = useState([
    { name: 'Troca de óleo', part: '1l de Óleo',  price: '35,00' },
    { name: 'Troca vela', part: 'Kit de velas', price: '95,00' },
    { name: 'Troca Correia Dentada', part: 'Correia Dentada', price: '100,00'}
  ]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFields({...fields, [name]: value});
  }

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const selectedServiceData = mechanicalServices.find((service) => service.name === selectedService);

  return (
    <>
      <Grid
        container
        component='form'
        spacing={1}
        p={1}
        m={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <h2>{`Cliente: ${link}`}</h2>
        </Grid>
        <Grid item>
          <h2>Carro: Corolla</h2>
        </Grid>
        
        <Grid item>
          <TextField
            className='input'
            helperText='digite quem será o responsável pelo serviço'
            label='funcionário'
            name='funcionario'
            value={ `${fields.funcionario}` }
            onChange={(e) => handleChange(e)}
            variant='outlined'
          />
        </Grid>
      </Grid>
      
      <Grid container component='form' spacing={1} p={1} m={1}>
        <Grid item xs={2}>
          <TextField
            select
            value={selectedService}
            onChange={handleServiceSelect}
            label='Serviço'
            variant='outlined'
          >
            <MenuItem value="">Selecione um serviço</MenuItem>
            {mechanicalServices.map((service) => (
              <MenuItem key={service.name} value={service.name}>
                {service.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Peça"
            value={selectedServiceData ? selectedServiceData.part : ''}
            disabled={!selectedServiceData}
          />
          <TextField
            label="Preço"
            value={selectedServiceData ? selectedServiceData.price : ''}
            disabled={!selectedServiceData}
          />
        </Grid>
        <Grid item>
          <div>Data e hora do início do serviço</div>
          <DateTime />

          <div>Data e hora do término do serviço</div>
          <DateTime />
        </Grid>
      </Grid>
    </>
  );
}

export default Client;
