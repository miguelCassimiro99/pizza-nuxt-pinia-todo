import axios, { AxiosInstance } from "axios"

const clientHttp: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export default clientHttp