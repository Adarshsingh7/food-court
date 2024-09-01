import { Client, Databases, Account, ID } from 'appwrite';

const client = new Client();


client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('66d1dd150015e48ae252')

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account, ID };
