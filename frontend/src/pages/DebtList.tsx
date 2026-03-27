import { Box, Button, Typography } from '@mui/material'
import DebtCard from '../components/DebtCard'
import { useNavigate } from 'react-router-dom'

function DebtList() {

    const navigate = useNavigate();

    const addDebt = () => {
        navigate('/debt/add');
    }

    return (
        <>
            <Box sx={{display: 'flex', gap: 2, pb: 4}}>
                <Typography variant='h3'>Organization</Typography>
                <Button onClick={addDebt}>Add</Button>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <DebtCard />
                <DebtCard />
                <DebtCard />
            </Box>
        </>
        
    )
}

export default DebtList