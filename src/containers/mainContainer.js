import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { req } from '../redux/action';
import Card from '../components/card';
import { Box, Button, TextField, Typography } from '@mui/material';
import InfoCard from '../components/infoCard';
import { Link } from 'react-router-dom';

const MainComponent = () => {
    const [data, setData] = useState([]);
    // const [person, setPerson] = useState([]);
    const dispatch = useDispatch();
    // const [info, setInfo] = useState(false);
    const state = useSelector((state) => state.data);
    // const [search, setSearch] = useState('')

    const reqExp = / /g;

    const [filter, setFilter] = useState('Diamond is Unbreakable');
    console.log(state?.[filter]);

    // const handleRequest = () => {};

    useEffect(() => {
        dispatch(req(''));
    }, [data]);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    onChange={(e) => {
                        dispatch(
                            req(
                                e.target.value
                                    ? `?user=${e.target.value.replace(reqExp, '+')}`
                                    : ''
                            )
                        );
                    }}
                    label="search"></TextField>
                <Button variant="contained">search!</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    marginBottom: '20px',
                    '& button': { width: '200px', height: '70px' },
                    '& li': { listStyleType: 'none' },
                }}>
                {state ? (
                    Object?.keys(state).map((item) => (
                        <Button
                            variant="contained"
                            onClick={() => {
                                setFilter(item);
                            }}>
                            {item}
                        </Button>
                    ))
                ) : (
                    <></>
                )}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {state?.[filter] ? (
                    state?.[filter].map((item, i) => (
                        <Link to={'/user=' + item?.user} state={{ item: item }}>
                            <Card item={item}  />{' '}
                        </Link>
                    ))
                ) : (
                    <></>
                )}
            </Box>
        </>
    );
};

export default MainComponent;