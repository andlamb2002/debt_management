import { Box, Typography } from "@mui/material"

function Payment() {
    return (
        <Box sx={{display: "flex", gap: 2}}>
            <Typography variant="h6">Payment Amt</Typography>
            <Typography variant="h6">Date</Typography>
        </Box>
    )
}

export default Payment