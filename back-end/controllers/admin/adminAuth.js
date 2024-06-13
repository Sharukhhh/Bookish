import dotenv from 'dotenv';
dotenv.config();
import { generateToken } from '../../utils/utills.js';

const payload = {
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword : process.env.ADMIN_PASSWORD,
}

/*
path: '/api/admin/login'
method: POST
*/
export const adminLogin = async (req, res, next) => {
    try {
        const{ email , password} = req.body;

        if(payload.adminEmail === email && payload.adminPassword === password) {

            const token = await generateToken(payload);
            return res.status(200).json({message: 'Welcome Admin!' , token , payload});

        } else {
            return res.status(404).json({error: 'Invalid credentials'});
        }
    } catch (error) {
        return res.statusCode(500).json({error: 'Server Error'});
    }
}