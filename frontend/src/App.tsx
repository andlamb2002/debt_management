import { Container } from '@mui/material'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import DebtList from './pages/DebtList'
import DebtDetails from './pages/DebtDetails'
import AddDebt from './pages/AddDebt'

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<DebtList />}></Route>
                <Route path="/debt/:id" element={<DebtDetails />}></Route>
                <Route path="/debt/add" element={<AddDebt />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </Container>
    )
}

export default App
