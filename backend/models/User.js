import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    otp: { type: String, required: false },
    otpExpiration: { type: Date, required: false },
    verifyOtp: { type: String },
    verifyOtpExpiredAt: { type: Date },
    isAccountVerified: { type: Boolean, default: false },
    resetOtp:{ type: String, default:'' },
    resetOtpExpiredAt:{type: Number, default:0},
});

const User = mongoose.model('User', userSchema);
export default User;
