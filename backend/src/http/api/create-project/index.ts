import arc, { HttpHandler } from '@architect/functions';
import { ProjectModelType } from '../../../schema/Project';
import { getTables, HttpRequestWithTable } from '../../middleware/tables';
import { v4 as uuidv4 } from "uuid";
export const handler = arc.http.async(
    getTables,
    async function(req: HttpRequestWithTable) {
        let Project = req.table.getModel<ProjectModelType>("Project");
        const project = await Project.create({
            name: "ApplyX",
            id: uuidv4()
        });
        return {
            status: 200,
            json: project
        }
} as HttpHandler);