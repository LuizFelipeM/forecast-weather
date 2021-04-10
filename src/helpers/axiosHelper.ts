import axios from "axios";
import { IForecast } from "../IForecast";

const baseUrl = `${process.env.REACT_APP_API_URL}forecast`

export const getCityForecast = async (woeid?: string): Promise<IForecast> => (await axios.get<IForecast>(`${baseUrl}${woeid ? `?woeid=${woeid}` : ''}`)).data