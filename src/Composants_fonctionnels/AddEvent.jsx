import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddEvent = ({ onEventAdded }) => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {


        if (onEventAdded) {
            await onEventAdded(data);
        }
        reset();
        navigate("/events");
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 900 }}>
            <Typography variant="h5" mb={3}>
                Add a new Event
            </Typography>

            <Stack spacing={2}>
                <TextField fullWidth label="Name" {...register('name', { required: true })} />
                <TextField fullWidth multiline minRows={3} label="Description" {...register('description', { required: true })} />
                <TextField fullWidth type="number" label="Price" defaultValue={0} {...register('price', { required: true })} />
                <TextField fullWidth type="number" label="Tickets" defaultValue={0} {...register('nbTickets', { required: true })} />

                <Button variant="outlined" component="label">
                    Browse...
                    <input
                        type="file"
                        hidden
                        {...register('img')}
                        onChange={(e) => {
                            const fileName = e.target.files[0]?.name;
                            console.log("Nom du fichier choisi :", fileName);
                        }}
                    />        </Button>

                <Stack direction="row" spacing={1}>
                    <Button type="submit" variant="contained">Add</Button>
                    <Button variant="outlined" onClick={() => navigate("/events")}>Cancel</Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default AddEvent;
