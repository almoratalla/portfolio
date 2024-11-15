import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    collections: [Users, Media],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || "",
    }),
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },

    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    sharp,
});
