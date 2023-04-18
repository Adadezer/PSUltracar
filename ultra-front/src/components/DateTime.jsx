import { Grid, TextField } from '@mui/material';
import { useState } from 'react';

function DateTimeInput() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date().toLocaleTimeString());

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <TextField
          id="date"
          label="Data"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={1}>
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