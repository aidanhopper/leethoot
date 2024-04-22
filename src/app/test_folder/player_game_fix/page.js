import Link from 'next/link';
import { Grid, Box, Button, Paper, Typography } from '@mui/material';

export default function Game() {
    let sample_question = "what is the average case time complexity of the \"quick sort\" sorting algorithim?";
    const background_style = {
        backgroundImage: `url('/media/leethoot_background.gif')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative',
        margin: '0', 
        padding: '0', 
    };
    const button_grid_container_style = {
        position: 'absolute',
        bottom: 0 , 
        width: '99%',
        paddingBottom: '1%',
        paddingLeft: '2%',
    };
    const button_A_style = {
        height: '100%',
        color: 'white',
        backgroundColor: 'rgba(255, 0, 0, .95)',
    };
    const button_B_style = {
        height: '100%',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 255, .8)',
    };
    const button_C_style = {
        height: '100%',
        color: 'white',
        backgroundColor: 'rgba(255, 165, 0, .95)',
    };
    const button_D_style = {
        height: '100%',
        color: 'white',
        backgroundColor: 'rgba(128, 0, 128, .95)',
    };
    const typography_container_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh', // Adjust the height as needed
    };
    const typpography_style = {
        fontSize: '300%',
        maxWidth: '90%',
        alignItems: 'center',
        color: 'white',
        margin: 'auto'
    };

    return (
        <Box style={background_style}>
            <Box style = {typography_container_style}>
                <Typography variant = 'h4' style={typpography_style}> 
                    {sample_question}
                </Typography>
            </Box>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={2} style={button_grid_container_style}>
                    <Grid item xs={6}>
                        <Button variant="contained" color = "error" fullWidth style={button_A_style} sx={{ fontSize: '700%' }}>A</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color = "primary" fullWidth style={button_B_style} sx={{ fontSize: '700%' }}>B</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color = "warning" fullWidth style={button_C_style} sx={{ fontSize: '700%' }}>C</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color = "secondary" fullWidth style={button_D_style} sx={{ fontSize: '700%' }}>D</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}