import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies?.token;

        // If no token, deny access
        if (!token) {
            return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user ID to request
        req.user = { id: decoded.id };

        next(); // Move to the next middleware or route
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return res.status(401).json({ success: false, message: 'Invalid or expired token. Please log in again.' });
    }
};

export default authMiddleware;
