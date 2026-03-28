import client from "./client";

const path = "organizations";

export const getOrganizations = async () => {
    const url = `${path}`;
    const response = await client.get(url);
    return response.data;
}