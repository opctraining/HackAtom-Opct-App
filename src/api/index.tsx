import axios from "axios"

const baseURL = "http//3.39.232.8"

export async function getMyWorkoutResult() {
    const res = await axios.get(baseURL + "");
    if (res) {
        return res.data
    }
}

export async function getMyWalletAddress(address: string) {
    const res = await axios.get(baseURL + "search/product/");
    if (res) {
        return res.data
    }
}