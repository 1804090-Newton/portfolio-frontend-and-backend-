import React, { useState } from 'react';
import { Container, Typography, CircularProgress, Button, Box, Divider } from '@mui/material';
import useFetch from '../Customhook/useFetch';
import RefreshIcon from '@mui/icons-material/Refresh';

const Quotes = () => {
    const { data: quotes, loading } = useFetch('https://type.fit/api/quotes');
    const [quote, setQuote] = useState({
        text: "Life is beautiful",
        author: "sourav vai",
    });

    const random = () => {
        if (quotes.length > 0) {
            const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(selectedQuote);
        }
    };

    return (
        <Container id='Quote' sx={{ textAlign: 'center', padding: '2rem' }}>
            <Typography variant="h4" gutterBottom marginTop={10}>
                Quotes:
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                        {quote.text}
                    </Typography>
                    <Divider sx={{ marginBottom: '1rem' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="subtitle1">
                            {quote.author.split(',')[0]}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={random} startIcon={<RefreshIcon />}>
                            Generate
                        </Button>
                    </Box>
                </>
            )}
        </Container>
    );
};

export default Quotes;
