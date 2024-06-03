import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, TextField, Button, Typography, Box, Grid, IconButton } from '@mui/material';
import { submitContactForm } from '../../services/contactService';

export default function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    function toggleFormVisibility() {
        if (showForm) {
            handleSubmit();
        } else {
            setShowForm(true);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    async function handleSubmit() {
        return await submitContactForm(formData).then(() => {
            setFormData({
                firstName: '',
                lastName: '',
                contactNumber: '',
                email: '',
                message: ''
            });
            setShowForm(false);
        })
        .catch(err => console.error(err));
    }

    return (
        <Container id="contact" className="contact-style" maxWidth="md">
            <Box textAlign="center" marginTop={10}>
                <Typography variant="h2" component="h1" gutterBottom >
                    Contact
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error,
                    corrupti sapiente voluptatem provident doloribus rerum voluptatibus, ad
                    quia quidem unde et id tempora aspernatur! Totam commodi obcaecati atque
                    suscipit.
                </Typography>

                <Box mt={8} mb={7}>
                    {showForm && (
                        <form id='contactForm'>
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Contact Number"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                margin="normal"
                                multiline
                                rows={4}
                            />
                        </form>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleFormVisibility}
                        className="write-messege-button-style"
                        sx={{ mt: 2 }}
                    >
                        {showForm ? "Submit" : "Write Message"}
                    </Button>
                </Box>

                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <IconButton color="primary" component="a" href="https://github.com" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color="primary" component="a" href="https://linkedin.com" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </IconButton>
                    </Grid>
                </Grid>

                <Typography variant="h6" align="center" mt={3}>
                    Newton
                </Typography>
            </Box>
        </Container>
    );
}
