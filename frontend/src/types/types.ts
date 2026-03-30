export type Debt = {
    id: number,
    name: string,
    principal_amt: number,
    status: "active" | "paid",
    issue_date: string
}

export type Organization = {
    id: number,
    name: string,
    debts: Debt[],
}