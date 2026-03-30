import { Box, Button, Typography } from '@mui/material'
import DebtCard from '../components/DebtCard'
import { useNavigate } from 'react-router-dom'

import type { Organization } from '../types/types'

type Props = {
    organizations: Organization[]
}

function DebtList({ organizations }: Props) {

    const navigate = useNavigate();

    const addDebt = () => {
        navigate('/debt/add');
    }

    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, pb: 4}}>
                {organizations.map(o => (
                    <Box key={o.id}>
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Typography variant='h4'> {o.name} </Typography>
                            <Button onClick={addDebt}>Add</Button>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            {o.debts.map(d => (
                                <DebtCard 
                                    key={d.id}
                                    debt={d}
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
        
    )
}

export default DebtList