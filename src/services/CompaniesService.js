import { API_BASE_URL } from '../../config';

export const fetchCompanies = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/companies/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching games:', error);
        throw error;
    }
};