import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    console.log('middleware hit');
    
    // Get the auth token from the request header
    const authHeader = req.headers.authorization;
    
    // Check if the auth token exists
    if (authHeader) {
        // Extract the token (assuming the format is 'Bearer <token>')
        const token = authHeader.split(' ')[1];
        
        // Get the secret key from env variables
        const secret = process.env.JWT_SECRET || '';
        
        // Verify the token
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);  // Forbidden if token is invalid
            }
            req.user = user;  // Attach the user to the request object
            next();  // Call the next middleware function if valid
        });
    } else {
        res.sendStatus(401);  // Unauthorized if no token is provided
    }
};
