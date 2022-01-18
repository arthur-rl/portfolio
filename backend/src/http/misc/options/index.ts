import arc, { HttpHandler } from '@architect/functions';
import { CORS } from '../../constants';

export const handler = arc.http.async(async function(req) {
        return {
            status: 200,
            headers: CORS
        } as any
} as HttpHandler);