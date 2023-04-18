import { useState } from 'react';
import UltracarContext from './UltracarContext';

export default function UltracarProvider({ children }) {
  const [link, setLink] = useState('');
  const [isFieldInvalid, setIsFieldInvalid] = useState(true);
  const [isCollaboratorInvalid, setIsCollaboratorInvalid] = useState(true);

  const myContext = {
    link,
    setLink,
    isFieldInvalid,
    setIsFieldInvalid,
    isCollaboratorInvalid,
    setIsCollaboratorInvalid,
  };

  return (
    <UltracarContext.Provider value={ myContext }>
      {children}
    </UltracarContext.Provider>
  );
}