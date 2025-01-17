// ADD ONE or MANY to COLLECTIONS APP

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
    account_holder: "Gal Dicker",
    account_id: "MDB8829001337",
    account_type: "checking",
    balance: 41,
},
{
    account_holder: "Dudeds Sander",
    account_id: "MDB8829001337",
    account_type: "checking",
    balance: 4701,

}
];

const main = async () => {

    /////// Insert one documment in the database 
    // try {
    //     await connectToDatabase();
    //     let result = await accountsCollection.insertOne(sampleAccounts);
    //     console.log(`Inserted document: ${result.insertedId}`);
    //     console.log(result);
    // } catch (err) {
    //     console.error(`Error connecting to the database: ${err}`);

    // } finally {
    //     await client.close();
    // }

    // insert more than one 

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