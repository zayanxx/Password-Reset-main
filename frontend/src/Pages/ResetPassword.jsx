import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      setMessage('Email is required');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/send-reset-otp', { email });
      setMessage(response.data.message);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      setMessage('OTP and new password are required');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/reset-password', {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);
      setStep(1);
      setEmail('');
      setOtp('');
      setNewPassword('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error resetting password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <h2>Reset Password</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      {step === 1 ? (
        <>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={handleSendOtp} disabled={loading}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </>
      ) : (
        <>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={handleResetPassword} disabled={loading}>
            {loading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
