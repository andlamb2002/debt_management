import client from "./client";

const path = "debts";

export const addDebt = async (data: { name: string; principal_amt: number; issue_date: string; organization_id: number }) => {
    const url = `${path}`;
    const response = await client.post(url, { debt: data });
    return response.data;
}

export const getDebt = async (id: number) => {
    const url = `${path}`;
    const response = await client.get(`${url}/${id}`);
    return response.data;
}