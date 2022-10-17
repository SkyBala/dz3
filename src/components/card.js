import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Card = (props) => {
    const { item } = props;

    return (
        <Box
            sx={{
                width: '300px',
                height: '450px',
                backgroundColor: 'purple',
                color: 'white',
                border: '1px solid',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                '& a': {textDecoration: 'none'},
                '& button': { height: '50px'},
                '& img': { width: '100%', height: '80%', borderRadius: '8px' },
            }}>
            <img src={item?.user_images?.[0]} alt=""></img>
            <Typography sx={{ textAlign: 'center', fontSize: '32px' }}>
                {item?.user}
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>{item?.stand}</Typography>
            <Button variant='contained'>More info</Button>
        </Box>
    );
};

export default Card;