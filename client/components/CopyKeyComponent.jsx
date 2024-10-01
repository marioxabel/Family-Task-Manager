import React from 'react';
import { Button } from 'react-bootstrap';

const CopyKeyComponent = ({ keyNumber }) => {
    // Función para copiar la key al portapapeles
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
        <div className="my-3">
            <h5>Copy your key number</h5>
            <Button variant="outline-primary" onClick={copyToClipboard}>
                {keyNumber}  {/* Aquí mostramos la key */}
            </Button>
        </div>
    );
};

export default CopyKeyComponent;
