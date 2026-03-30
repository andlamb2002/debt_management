import { Container } from '@mui/material'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import DebtList from './pages/DebtList'
import DebtDetails from './pages/DebtDetails'
import AddDebt from './pages/AddDebt'
import { useEffect, useState } from 'react'
import { getOrganizations } from './api/organizations'

type Debt = {
    id: number,
    name: string,
    principal_amt: number,
    status: "active" | "paid",
    issue_date: string
}

type Organization = {
    id: number,
    name: string,
    debts: Debt[],
}

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
            <ul>
                {organizations.map(o => (
                    <>
                        <li key={o.id}> {o.name} </li><ul>
                            {o.debts.map(d => (
                                <li key={d.id}>{d.name}</li>
                            ))}
                        </ul>
                    </>
                ))}
            </ul>
            <Routes>
                <Route path="/" element={<DebtList></DebtList>}></Route>
                <Route path="/debt/:id" element={<DebtDetails></DebtDetails>}></Route>
                <Route path="/debt/add" element={<AddDebt></AddDebt>}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </Container>
    )
}

export default App
