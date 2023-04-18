import { Grid, TextField, MenuItem } from '@mui/material';
import '../App.css';
import { useContext, useState } from 'react';
import UltracarContext from '../context/UltracarContext';
import DateTime from '../components/DateTime';
import NavBar from '../components/NavBar';
import schemaValidations from '../helpers/schemaValidations';

function Client() {
  const { link, isFieldInvalid, setIsFieldInvalid  } = useContext(UltracarContext);
  const [collaborator, setCollaborator] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [mechanicalServices] = useState([
    { name: 'Troca de óleo', part: '1l de Óleo',  price: '35,00' },
    { name: 'Troca de vela', part: 'Kit de velas', price: '95,00' },
    { name: 'Troca da Correia Dentada', part: 'Correia Dentada', price: '100,00'}
  ]);

  function handleCollaborator(e) {
    setCollaborator(e.target.value);

    const schemaValidate = schemaValidations.name().validate(e.target.value);

    if (schemaValidate.error) {
      setIsFieldInvalid(true);
    } else {
      setIsFieldInvalid(false);
    }
  }

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const selectedServiceData = mechanicalServices.find((service) => service.name === selectedService);

  return (
    <>
      <NavBar />
      <Grid
        container
        component='form'
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item className='info'm={2} p={1}>
          <label>Cliente:</label>
          <h2>{`${link}`}</h2>
        </Grid>
        <Grid item className='info'm={2} p={1}>
          <label>Carro:</label>
          <h2>Corolla</h2>
        </Grid>
      </Grid>

      <Grid
        container
        component='form'
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item >
          <TextField
            helperText='digite quem será o responsável pelo serviço'
            label='colaborador'
            value={ `${collaborator}` }
            onChange={(e) => handleCollaborator(e)}
            error={isFieldInvalid}
            variant='outlined'
          />
        </Grid>
      </Grid>
      
      <Grid
        container
        component='form'
        direction='column'
        justifyContent='center'
        alignItems='center'
        className='service'
      >
        <h4>Serviço:</h4>
        <Grid item>
          <TextField
            select
            helperText='selecione um serviço'
            value={selectedService}
            onChange={handleServiceSelect}
            label='Serviço'
            variant='outlined'
          >
            {mechanicalServices.map((service) => (
              <MenuItem key={service.name} value={service.name}>
                {service.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label='Peça'
            value={selectedServiceData ? selectedServiceData.part : ''}
            disabled={!selectedServiceData}
          />
          <TextField
            label='Preço'
            value={selectedServiceData ? selectedServiceData.price : ''}
            disabled={!selectedServiceData}
          />
        </Grid>
      </Grid>
        
      <Grid
        container
        component='form'
        justifyContent='center'
        className='dateTime'
      >
        <Grid item>
          <h4>Início do serviço:</h4>
          <DateTime />

          <h4>término do serviço:</h4>
          <DateTime />
        </Grid>
      </Grid>
    </>
  );
}

export default Client;
