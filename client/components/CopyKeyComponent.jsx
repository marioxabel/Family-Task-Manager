import React from 'react';
import { Button } from 'react-bootstrap';

const CopyKeyComponent = ({ keyNumber }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(keyNumber)
      .then(() => {
        alert('Key copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy key: ', err);
      });
  };

  return (
    <div className="copy-key-container text-end">  {/* Cambié text-center a text-end */}
      <h6>Copy your key number</h6>
      <Button 
        className="copy-key-button" 
        onClick={copyToClipboard}
        style={{ fontSize: '0.75rem', padding: '5px 10px', borderRadius: '8px' }}
      >
        {keyNumber}
      </Button>
    </div>
  );
};

export default CopyKeyComponent;
