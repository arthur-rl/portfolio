import arc, { HttpHandler } from '@architect/functions';
import { ProjectModelType } from '../../../schema/Project';
import { getTables, HttpRequestWithTable } from '../../middleware/tables';
import { v4 as uuidv4 } from "uuid";
import { CORS } from '../../constants';
export const handler = arc.http.async(
    getTables,
    async function(req: HttpRequestWithTable) {
        const session = await arc.http.session.read(req);
        console.log(session)
        if(session && session.logged_in) {
            let Project = req.table.getModel<ProjectModelType>("Project");
            const { name, description, image, projectButtons } = req.body;
            const project = await Project.create({
                name,
                description,
                image,
                buttons: projectButtons,
                id: uuidv4()
            });
            return {
                status: 200,
                json: project,
                headers: CORS
            } as any;
        } else {
            return {
                status: 401,
                json: {
                    message: "You are not logged in."
                },
                headers: CORS
            } as any;
        }
} as HttpHandler);