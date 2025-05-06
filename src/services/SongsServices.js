import axios from 'axios';

// services/songsServices.js

 const baseUrl = import.meta.env.VITE_API_BASE_URL;; // Adjust the base URL as needed

const SongService = {
    // Get all songs
    async getAllSongs() {
        try {
            const response = await axios.get(`${baseUrl}/songs`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to fetch songs');
        }
    },

    // Search songs
    async searchSongs(query) {
        try {
            const response = await axios.get(`${baseUrl}/songs/search`, {
                params: { q: query },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to search songs');
        }
    },

    // Get song by ID
    async getSongById(id) {
        try {
            const response = await axios.get(`${baseUrl}/songs/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to fetch song');
        }
    },

    // Add a new song
    async addSong(songData) {
        try {
            const response = await axios.post(`${baseUrl}/songs`, songData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to add song');
        }
    },

    // Update a song
    async updateSong(id, songData) {
        try {
            const response = await axios.put(`${baseUrl}/songs/${id}`, songData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to update song');
        }
    },

    // Delete a song
    async deleteSong(id) {
        try {
            await axios.delete(`${baseUrl}/songs/${id}`);
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to delete song');
        }
    },
};

export default SongService;