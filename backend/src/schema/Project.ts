import { Entity } from "dynamodb-onetable"

const model = {
    pk: { type: String, value: 'project:${id}' },
    sk: { type: String, value: 'project:' },
    id: { type: String },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    shown: {type: Boolean, default: true}
}

export type ProjectModelType = Entity<typeof model>

export default model