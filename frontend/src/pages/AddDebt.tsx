import { Box, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";

function AddDebt() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <TextField
                label="Name"
            />
            <TextField
                label="Amt"
                type="number"
            />
            <TextField
                type="date"
            />
            <Button onClick={handleSubmit}>Add</Button>
        </Box>
    )
}

export default AddDebt