import arc, { HttpHandler } from '@architect/functions';
import { CORS } from '@architect/shared/constants';

export const handler = arc.http.async(async function(req) {
    const session = await arc.http.session.read(req);
    if(session) {
        return {
            status: 200,
            json: session,
            headers: {
                ...CORS
            }
        } as any
    } else {
        return {
            status: 200,
            json: {},
            headers: {
                ...CORS
            }
        }
    }
} as HttpHandler);