import client from "./client";

const path = "payments";

export const addPayment = async (data: { amount: number, date_paid: string, debt_id: number }) => {
    const url = `${path}`;
    const response = await client.post(url, { payment: data });
    return response.data;
}