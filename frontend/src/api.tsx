import axios from "axios";

// Create an instance of axios for API requests
const api = axios.create({
    baseURL: "http://localhost:5200/api", // Update with your server URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Helper function to add JWT token to headers
const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

// Fetch all sections
export const fetchSections = async (token) => {
    setAuthToken(token);
    const response = await api.get("/sections");
    return response.data;
};

// Update a section
export const updateSection = async (id, updatedData, token) => {
    setAuthToken(token);
    const response = await api.put(`/sections/${id}`, updatedData);
    return response.data;
};

// Add a new section
export const addSection = async (newSection, token) => {
    setAuthToken(token);
    const response = await api.post("/sections", newSection);
    return response.data;
};

// Delete a section
export const deleteSection = async (id, token) => {
    setAuthToken(token);
    const response = await api.delete(`/sections/${id}`);
    return response.data;
};

export default api;