import { Container } from '@mui/material'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import DebtList from './pages/DebtList'
import DebtDetails from './pages/DebtDetails'
import AddDebt from './pages/AddDebt'
import { useEffect, useState } from 'react'
import { getOrganizations } from './api/organizations'

import type { Organization } from './types/types'

function App() {

    const [organizations, setOrganizations] = useState<Organization[]>([]);

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const data = await getOrganizations();
                setOrganizations(data);
            } catch {
                console.log("Error");
            }
        }
        fetchOrganizations();
    }, [])

    return (
        <Container>
            <Routes>
                <Route path="/" element={<DebtList organizations={organizations}/>}></Route>
                <Route path="/debt/:id" element={<DebtDetails />}></Route>
                <Route path="/debt/add" element={<AddDebt />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </Container>
    )
}

export default App
