import { API_BASE_URL } from '../../config';

export const fetchGames = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/games/`);
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

export const fetchGameById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/games/${id}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching game with ID ${id}:`, error);
        throw error;
    }
};