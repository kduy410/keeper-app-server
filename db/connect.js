import mongoose from 'mongoose';
import config from '../core/config/config.dev'

// Mongoose.Promise = global.Promise; //This is legacy code from older examples that isn't needed with Mongoose 5.

const connect = async () => {
    let dbHost = config.DB_HOST;
    let dbPort = config.DB_PORT;
    let dbName = config.DB_NAME;
    try {
        //mongoose.connect("mongodb://127.0.0.1:27017/keeper-app-server", { useNewUrlParser: true });
        await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true });
        console.log('Connected to mongo!');
    }
    catch (err) {
        console.log('Could not connect to MongoDB');
        console.log(err);
    }
}

export default connect;