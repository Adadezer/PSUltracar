import { useState } from 'react';
import UltracarContext from './UltracarContext';

export default function UltracarProvider({ children }) {
  const [link, setLink] = useState('');

  const myContext = {
    link,
    setLink,
  };

  return (
    <UltracarContext.Provider value={ myContext }>
      {children}
    </UltracarContext.Provider>
  );
}