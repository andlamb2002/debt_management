import { useState, useEffect } from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material'
import DebtCard from '../components/DebtCard'
import { useNavigate } from 'react-router-dom'

import type { Organization } from '../types/types'
import { getOrganizations } from '../api/organizations'

const options = ["all", "active", "paid"];

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

    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const navigate = useNavigate();

    const addDebt = (id: number) => {
        navigate(`/debt/add/${id}`);
    }

    if (organizations.length === 0) {
        return (
            <Typography variant="h6">
                Loading
            </Typography>
        );
    }

    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, pb: 4}}>
                <Select
                    defaultValue={options[0]}
                    sx={{width: 200}}
                >
                    {options.map(o => (
                        <MenuItem 
                            key={o} 
                            value={o}
                            onClick={() => setSelectedOption(o)}
                        >
                            {o}
                        </MenuItem>
                    ))}
                </Select>
                {organizations.map(o => (
                    <Box key={o.id}>
                        <Box sx={{display: 'flex', gap: 2, pb: 2}}>
                            <Typography variant='h4'> {o.name} </Typography>
                            <Button onClick={() => addDebt(o.id)}>Add</Button>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            {o.debts.filter(d => {
                                if(selectedOption === "all") return true;
                                return selectedOption === d.status;
                            }).map(d => (
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