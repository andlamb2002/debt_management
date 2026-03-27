import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import Payment from "../components/Payment";

function DebtDetails() {

    const { id } = useParams()
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate("/");
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <Box>
                <Typography variant="h6">Name {id}</Typography>
                <Typography variant="h6">Date</Typography>
                <Typography variant="h6">Status</Typography>
                <Typography variant="h6">Amt</Typography>
                <Typography variant="h6">Paid</Typography>
                <Typography variant="h6">Amt Left</Typography>
            </Box>
            <Box>
                <Typography variant="h4">Payments</Typography>
                <Payment/>
                <Payment/>
                <Payment/>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <TextField
                    label="Amt"
                    type="number"
                />
                <TextField
                    type="date"
                />
                <Button onClick={handleSubmit}>Add</Button>
            </Box>
        </Box>
    )
}

export default DebtDetails