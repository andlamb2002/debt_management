import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { getDebt } from "../api/debts";
import { addPayment } from "../api/payments";
import { Box, Button, TextField, Typography } from "@mui/material"
import PaymentCard from "../components/PaymentCard";
import type { Debt, Payment } from "../types/types";

type DebtInfo = Debt & {
    total_paid: number,
    remaining_balance: number,
    payments: Payment[]
}

function DebtDetails() {

    const { id } = useParams()

    const [debt, setDebt] = useState<DebtInfo | null>(null);

    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState<string>("");

    const [refreshKey, setRefreshKey] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchDebt = async () => {
            try {
                const data = await getDebt(Number(id));
                setDebt(data);
            } catch {
                console.log("Error fetching debt.");
            }
        }
        fetchDebt();
    }, [id, refreshKey])
    
    const handleSubmit = async () => {
        try {
            const payment = {
                amount: amount,
                date_paid: date,
                debt_id: Number(id),
            }
            await addPayment(payment);
            setRefreshKey(prev => prev + 1);
        } catch {
            console.log("Error adding payment.");
        }
    }

    if (!debt) {
        return (
            <Typography variant="h6">
                Loading
            </Typography>
        );
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <Button
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
            <Box>
                <Typography variant="h6">{debt.name}</Typography>
                <Typography variant="h6">{debt.issue_date}</Typography>
                <Typography variant="h6">{debt.status}</Typography>
                <Typography variant="h6">{debt.principal_amt}</Typography>
                <Typography variant="h6">{debt.total_paid}</Typography>
                <Typography variant="h6">{debt.remaining_balance}</Typography>
            </Box>
            <Box>
                <Typography variant="h5">Payments</Typography>
                {debt.payments.map(p => (
                    <PaymentCard
                        key={p.id}
                        payment={p}
                    />
                ))}
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
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
        </Box>
    )
}

export default DebtDetails