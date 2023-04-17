import QRCode from 'react-qr-code';
import DownloadQRCode from 'qrcode';
import { useState } from 'react';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [downQrCode, setDownQrCode] = useState('');

  function handleDownloadQRCode(link_url) {
    DownloadQRCode.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, (err, url) => {
      setDownQrCode(url);
    });
  }

  function handleQRCode(e) {
    setLink(e.target.value);
    handleDownloadQRCode(e.target.value);
  }
  return (
    <div className="container">
      <QRCode
        value={link}
      />
      <input
        className="input"
        placeholder="Digite seu link"
        value={link}
        onChange={(e) => handleQRCode(e)}
       />

       <a href={downQrCode} download={`qrcode.png`}>Baixar QrCode</a>
    </div>
  );
}

export default App;
