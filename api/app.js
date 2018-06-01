import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = 9000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

mongoose.connect('mongodb://localhost:27017/node_express_react');
mongoose.Promise = global.Promise;

require('./src/index')(app);

app.listen(port, () => {
    console.log(`Express server started on port: ${port}`)
});
