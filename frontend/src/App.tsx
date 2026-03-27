import { Box, Button, Card, Container, Typography } from '@mui/material'
import './App.css'

function App() {

    return (
        <Container>
            <Box sx={{display: 'flex'}}>
                <Typography variant='h3'>Organization</Typography>
                <Button>Add</Button>
            </Box>
            <Box>
                <Card>Name Amt_Left Date Status</Card>
                <Card>Name Amt_Left Date Status</Card>
                <Card>Name Amt_Left Date Status</Card>
            </Box>
        </Container>
    )
}

export default App
