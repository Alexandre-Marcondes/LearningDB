///Querying the DATABASE MongoDB APP1

const { MongoClient } = require("mongodb");

const uri = require('./atlas_url');
const client = new MongoClient(uri);

const dbname = "bank";
const collection_name = "accounts";

const accountsCollection = client.db(dbname).collection(collection_name);


const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database\nFull connection string: ${uri}`);

    } catch (err) {
        console.error(`Error connection to the databse: ${err}`);

    }
};

const documentsToFind = { balance: { $gt: 4700 } };

const main = async () => {
    try {
        await connectToDatabase()
        let result = accountsCollection.find(documentsToFind);
        let docCount = accountsCollection.countDocuments(documentsToFind);
        await result.forEach((doc) => console.log(doc));
        console.log(`Found ${await docCount}documents `);

    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);

    } finally {
        await client.close();
    }
};

main();