import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

type ScanResultProps = {
    title: string;
    description: string;
    type: "before" | "advice" | "after";
};

export default function ScanResult(props: ScanResultProps)  {
    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    height: '10%',
                    width: '100%',
                }}
            />

            <Box
                sx={{
                    height: '70%',
                }}
            >
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                        textAlign: 'center',
                    }}
                    gutterBottom
                >
                    {props.title}
                </Typography>
                <Typography
                    variant="h2"
                    component="div"
                    sx={{
                        textAlign: 'center',
                    }}
                    gutterBottom
                >
                    {props.type === "before"
                        ? "mise en garde"
                        : props.type === "advice"
                        ? "victime ou temoin"
                        : "après l'agression"}
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                        textAlign: 'center',
                        padding: 5,
                    }}
                    gutterBottom
                >
                    {props.description}
                </Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: 'secondary.dark',
                    height: '20%',
                    width: '100%',
                }}
            />
        </Paper>
    );
};


