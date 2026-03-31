import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Button, TextField } from "@mui/material"
import { addDebt } from "../api/debts";

function AddDebt() {

    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState<string>("");

    const { id } = useParams()
    const navigate = useNavigate();

    const handleAddDebt = async () => {
        try {
            const debt = {
                name: name,
                principal_amt: amount,
                issue_date: date,
                organization_id: Number(id)
            }
            addDebt(debt);
        } catch {
            console.log("Error adding debt.");
        }
    }

    const handleSubmit = () => {
        handleAddDebt();
        navigate("/");
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <TextField
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                label="Amt"
                type="number"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
            />
            <TextField
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <Button onClick={handleSubmit}>Add</Button>
        </Box>
    )
}

export default AddDebt