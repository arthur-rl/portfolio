import arc, { HttpHandler } from '@architect/functions';
import { ProjectModelType } from '../../../schema/Project';
import { CORS } from '../../constants';
import { getTables, HttpRequestWithTable } from '../../middleware/tables';
export const handler = arc.http.async(
    getTables,
    async function(req: HttpRequestWithTable) {
        let Project = req.table.getModel<ProjectModelType>("Project");
        const projects = await Project.scan();
        return {
            status: 200,
            json: projects,
            headers: CORS
        } as any
} as HttpHandler);