import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
    const authHeader = req.header.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const secret = process.env.JWT_SECRET || '';

        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            return next();
        })
    } else {
        res.sendStatus(401);
    }
}