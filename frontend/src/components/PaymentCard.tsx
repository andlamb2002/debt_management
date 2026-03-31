import { Box, Button, Typography } from "@mui/material"

import type { Payment } from "../types/types"

type Props = {
    payment: Payment,
    handleDeletePayment: (id: number) => void
}

function PaymentCard({ payment, handleDeletePayment }: Props) {

    return (
        <Box sx={{display: "flex", gap: 2}}>
            <Typography variant="h6">{Number(payment.amount).toFixed(2)}</Typography>
            <Typography variant="h6">{payment.date_paid}</Typography>
            <Button
                onClick={() => handleDeletePayment(payment.id)}
            >Delete</Button>
        </Box>
    )
}

export default PaymentCard