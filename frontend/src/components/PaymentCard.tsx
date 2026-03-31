import { Box, Typography } from "@mui/material"

import type { Payment } from "../types/types"

type Props = {
    payment: Payment,
}

function PaymentCard({ payment }: Props) {
    return (
        <Box sx={{display: "flex", gap: 2}}>
            <Typography variant="h6">{payment.amount}</Typography>
            <Typography variant="h6">{payment.date_paid}</Typography>
        </Box>
    )
}

export default PaymentCard