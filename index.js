import Express from "express";
import cors from 'cors';
import 'dotenv/config';
import posts from "./router/post.routes.js";
import user from "./router/user.routes.js";
import people from "./router/people.routes.js";
import './model/index.js';

const app = Express();
const PORT = process.env.PORT || 80;
const corsOptions = { origin: '*' }

app.listen(PORT, () => {
    if (process.env.ENVIRONMENT === 'development') {
        console.log(`(DEVELOPMENT) Server running at PORT ${PORT}`);
    } else {
        return;
    }
});

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(Express.json());

// use import routes here
app.use(user);
app.use(posts);
app.use(people);