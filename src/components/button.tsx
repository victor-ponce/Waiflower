import React, { MouseEvent, FC } from 'react';
import Button from '@mui/material/Button';

const MyButton: FC = () => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        alert('Hola Mundo');
    }

    return (
        <Button variant="outlined" color="primary" onClick={handleClick}>
            Push me
        </Button>
    );
}

export default MyButton;
