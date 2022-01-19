import arc, { HttpHandler } from '@architect/functions';
import { ProjectModelType } from '@architect/shared/schema/Project';
import { CORS } from '@architect/shared/constants';
import { getTables, HttpRequestWithTable } from '@architect/shared/middleware';
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