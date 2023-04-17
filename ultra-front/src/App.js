import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Client from './pages/Client';
import UltracarProvider from './context/UltracarProvider';

function App() {
  return (
    <UltracarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/client"} element={<Client />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </UltracarProvider>
  );
}

export default App;
