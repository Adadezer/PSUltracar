import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import schemaValidations from '../helpers/schemaValidations';

function DateTimeInput({ schemaName }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date().toLocaleTimeString());
  const [isDataInvalid, setIsDataInvalid ] = useState(true);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);

    const schemaValidate = schemaValidations[schemaName]().validate(event.target.value);

    if (schemaValidate.error) {
      setIsDataInvalid(true);
    } else {
      setIsDataInvalid(false);
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <Grid container>
      <Grid item>
        <TextField
          id="date"
          label="Data"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          error={isDataInvalid}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="time"
          label="Hora"
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </Grid>
    </Grid>
  );
}

export default DateTimeInput;