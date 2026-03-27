import { Card, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function DebtCard() {

    const navigate = useNavigate();

    const debtDetails = () => {
        navigate('/debt/1')
    }

    return (
        <Card 
            sx={{display: "flex", p: 2, gap: 2, cursor: "pointer"}}
            onClick={debtDetails}
        >
            <Typography variant='h6'> Name </Typography>
            <Typography variant='h6'> Amt_Left </Typography>
            <Typography variant='h6'> Date </Typography>
            <Typography variant='h6'> Status </Typography>
        </Card>
    )
}

export default DebtCard