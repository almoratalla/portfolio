import { buildConfig } from "payload/config";
import { slateEditor } from '@payloadcms/richtext-slate';
import { mongooseAdapter } from '@payloadcms/db-mongodb'

export default buildConfig({
    collections: [
        {
            slug: "users",
            auth: true,
            access: {
                delete: () => false,
                update: () => false,
            },
            fields: [],
        },
    ],
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URI || ''
    })
});
