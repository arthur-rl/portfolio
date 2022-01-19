import { Entity } from "dynamodb-onetable";
import Project from './Project';

const schema =  {
    version: '0.0.1',
    indexes: {
        primary: { hash: 'pk', sort: 'sk' },
        gs1:     { hash: 'gs1pk', sort: 'gs1sk', follow: true },
    },
    models: {
        Project
    } as const
}

export default schema;