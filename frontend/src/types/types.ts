export type Payment = {
    id: number,
    amount: number,
    date_paid: string,
    debt_id: number
}

export type Debt = {
    id: number,
    name: string,
    principal_amt: number,
    status: "active" | "paid",
    issue_date: string,
    organization_id: number
}

export type Organization = {
    id: number,
    name: string,
    debts: Debt[],
}