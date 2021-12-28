import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

export default function Student() {
    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Student Name" variant="outlined" />
                <TextField id="filled-basic" label="Student Address" variant="filled" />
            </Box>
        </Container>
    );
}
