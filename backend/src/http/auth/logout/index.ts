import arc, { HttpHandler } from '@architect/functions';
import { CORS } from '@architect/shared/constants';

export const handler = arc.http.async(async function(req) {
        const session = await arc.http.session.read(req);
        if(session && session.logged_in) {
            const cookie = await arc.http.session.write({logged_in: false});
            return {
                status: 200,
                headers : {
                    "set-cookie": cookie,
                    ...CORS
                }
            }
        } else {
            return {
                status: 401,
                json: {
                    message: "You are not logged in.",
                },
            }
        }
} as HttpHandler);