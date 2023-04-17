import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ScreenService() {
  const navigate = useNavigate();
  const DebitsContasPagar = () => {
    navigate('/client');
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={DebitsContasPagar}>Consultar</Button>
    </Stack>
  );
}