const { MongoClient } = require("mongodb");
const uri = require('./atlas_url');

console.log(uri);

const client = new MongoClient(uri);

const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);


const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);

    } catch (error) {
        console.error(`Error connection to the databse: ${err}`);

    }
};

const sampleAccounts = [{
    account_holder: "linus Torvalds",
    account_id: "MDB8829001337",
    account_type: "checking",
    balance: 50352434,
},
{
    account_holder: "linus Torvalds",
    account_id: "MDB8829001337",
    account_type: "checking",
    balance: 50352434,

}
];

const main = async () => {
    try {
        await connectToDatabase();
        let result = await accountsCollection.insertMany(sampleAccounts);
        console.log(`Inserted document: ${result.insertedId}`);
        console.log(result);
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);

    } finally {
        await client.close();
    }
};

main();