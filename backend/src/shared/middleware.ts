import arc, { HttpHandler, HttpRequest, HttpResponse } from "@architect/functions";
import { Table } from "dynamodb-onetable";
import schema from "./schema";

export interface HttpRequestWithTable extends HttpRequest {
    table: Table
}

export const getTables = async function (req: HttpRequest, context: any): Promise<HttpResponse | void>  {
    const client = await arc.tables();
    const table = new Table({
        client: client._doc,
        name: client._name("core"),
        schema: schema,
    });
    (req as HttpRequestWithTable).table = table;
} as HttpHandler;