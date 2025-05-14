import User from "../models/User.js";

export const getUserData = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, UserData:{name:user.name, email:user.email, isAccountVerified:user.isAccountVerified} });

        }
    catch (error) {
        console.error("Error fetching user data:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}