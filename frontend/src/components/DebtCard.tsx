import { Card, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import type { Debt } from '../types/types'

type Props = {
    debt: Debt
}

function DebtCard({ debt }: Props) {

    const navigate = useNavigate();

    const debtDetails = () => {
        navigate('/debt/1')
    }

    return (
        <Card 
            sx={{display: "flex", p: 2, gap: 2, cursor: "pointer"}}
            onClick={debtDetails}
        >
            <Typography variant='h6'> {debt.name} </Typography>
            <Typography variant='h6'> {debt.principal_amt} </Typography>
            <Typography variant='h6'> {debt.issue_date} </Typography>
            <Typography variant='h6'> {debt.status} </Typography>
        </Card>
    )
}

export default DebtCard