// composables/useAuth.js
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';
import axios from 'axios';

export const useAuth = () => {
    const router = useRouter();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiBase;

    const login = async (credentials) => {
        try {
            const { data } = await axios.post(`${apiUrl}/login`, credentials);
            localStorage.setItem('authToken', data.token); // Save token locally
            router.push('/dashboard'); // Redirect after login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        router.push('/login');
    };

    const getAuthToken = () => localStorage.getItem('authToken');

    return { login, logout, getAuthToken };
};