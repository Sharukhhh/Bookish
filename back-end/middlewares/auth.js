import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const payload = {
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword : process.env.ADMIN_PASSWORD,
}

export const verifyOrigin = async (req, res, next) => {
    try {
        
        const authHeader = req.headers['authorization'];

        const token = authHeader && authHeader.split(' ')[1];

        if(!token) {
            return res.json({error: 'Invlid'});
        }
        
    } catch (error) {
        console.log(error);
    }
}