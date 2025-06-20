import axios from 'axios';

const API_URL = 'http://localhost:5000/api/inventory';

export const fetchItems = () => axios.get(API_URL);
export const addItem = (item) => axios.post(API_URL, item);
