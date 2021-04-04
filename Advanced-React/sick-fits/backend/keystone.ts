import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/sick-fits-keystone'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //How long they stay signed in?
    secret: process.env.COOKIE_SECRET,
};

export default config({
    //@ts-ignore
    server:{
        cors:{
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },

    db:{
        adapter: 'mongoose',
        url: databaseURL,
        // TODO: add data seeding here
    },

    lists: createSchema({
        //Schema items go on here.
    }),
    ui:{
        isAccessAllowed: () => true,
    },
    // TODO: Add session values here
});

