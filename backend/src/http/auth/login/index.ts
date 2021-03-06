import arc, { HttpHandler } from '@architect/functions';
import bcrypt from 'bcryptjs';
import {CORS} from '@architect/shared/constants';

export const handler = arc.http.async(async function(req) {
        const { username, password } = req.body;
        try {
            const isPasswordCorrect = await bcrypt.compare(password, process.env.ADMIN_PASSWORD!);
            const isAdminUsername = username === process.env.ADMIN_USERNAME;
            const isAuthorized = isPasswordCorrect && isAdminUsername;
            if(isAuthorized) {
                const cookie = await arc.http.session.write({logged_in: true, username: process.env.ADMIN_USERNAME});
                return {
                    status: 200,
                    headers : {
                        "set-cookie": cookie,
                        ...CORS
                    },
                    json: {logged_in: true, username: process.env.ADMIN_USERNAME}
                } as any
            } else {
                return {
                    status: 401,
                    json: {message: "Username or password incorrect"},
                   headers: {
                        // ...CORS
                   }
                } as any
            }
        } catch (e) {
            console.log(e);
            return {
                status: 500,
                headers: {
                    // ...CORS
                }
            } as any
        }
} as HttpHandler);