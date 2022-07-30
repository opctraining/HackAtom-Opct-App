import axios from "axios"

const baseURL = "http//3.39.232.8/"

export async function getMyWorkoutResult() {
    try {
        const res = await axios.get(baseURL + "");
        if (res) {
            return res.data
        }
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            console.log(e.response.data)
        }
    }
}

export async function getMyWalletAddress(address: string) {
    try {
        const res = await axios.get(baseURL + "");
        if (res) {
            return res.data
        }
    }
    catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            console.log(e.response.data)
        }
    }
}