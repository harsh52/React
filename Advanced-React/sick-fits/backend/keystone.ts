import {createAuth} from '@keystone-next/auth'
import {User} from './schemas/User';
import 'dotenv/config'
import { config, createSchema } from '@keystone-next/keystone/schema'; 
import {withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { Product } from './schemas/Product';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/sick-fits-keystone'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //How long they stay signed in?
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey:'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields:['name', 'email', 'password'],
        //TODO: Add in initial roles here
    }
})

export default withAuth(config({
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
        User,
        Product,
    }),
    ui:{
        //Show the Ui for for the people who pass the test.

        isAccessAllowed: ({session}) => {
            console.log(session);
            return !!session?.data;
        }
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id`
    }),
})
);

