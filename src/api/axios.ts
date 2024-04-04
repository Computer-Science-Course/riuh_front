import axios from 'axios';
import { API_URL } from '../common/constants';

export default axios.create({
    baseURL: API_URL,
});

export const axiosPrivate = axios.create({
    baseURL: API_URL,
});