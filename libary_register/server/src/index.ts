
import { AppDataSource } from "./data-source"
import { getRouter } from "./routes";
import express = require("express");



async function main() {

    await AppDataSource.initialize();

    const app = express();

    app.use(express.json());

    const cors = require('cors');
    const corsOptions = {
        origin: 'http://localhost:4200',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200
    }
    app.use(cors(corsOptions));

    //app.use('/api', getRouter());
    app.use('/api', getRouter());
    app.listen(3000, () => {
        console.log('Listening on :3000 ...');
    });
}

main();