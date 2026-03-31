import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material'
import DebtCard from '../components/DebtCard'
import { useNavigate } from 'react-router-dom'

import type { Organization } from '../types/types'
import { getOrganizations } from '../api/organizations'

function DebtList() {

    const [organizations, setOrganizations] = useState<Organization[]>([]);
    
        useEffect(() => {
            const fetchOrganizations = async () => {
                try {
                    const data = await getOrganizations();
                    setOrganizations(data);
                } catch {
                    console.log("Error fetching organizations.");
                }
            }
            fetchOrganizations();
        }, [])

    const navigate = useNavigate();

    const addDebt = (id: number) => {
        navigate(`/debt/add/${id}`);
    }

    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, pb: 4}}>
                {organizations.map(o => (
                    <Box key={o.id}>
                        <Box sx={{display: 'flex', gap: 2, pb: 2}}>
                            <Typography variant='h4'> {o.name} </Typography>
                            <Button onClick={() => addDebt(o.id)}>Add</Button>
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