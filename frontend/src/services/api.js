import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Auth
export const loginUser = (formData) => API.post("/login", formData);
export const registerUser = (userData) => API.post('/register', userData);
export const logoutUser = () => API.post('/logout');
export const isAuthenticated = () => API.post('/is-auth');

// OTP Verification
export const sendVerifyOtp = () => API.post('/send-verify-otp');
export const verifyOtp = (otp) => API.post('/verifyOtp', { otp });

// Password Reset
export const sendResetOtp = (email) => API.post('/send-reset-otp', { email });
export const resetPassword = (data) => API.post('/reset-password', data);

// User
export const getUser = () => API.get('/user');
export const getUserData = () => API.get('/user/data');
  

export default API;