import { Client, Databases, Account, ID } from 'node-appwrite';

const client = new Client();

client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('66d1dd150015e48ae252')        
   .setKey('5d853bf34be5d501e118c03909fddd12df2ac76c66ef93343c6b4abc2b04a8c96da8c555180ca05513c4134513404f4cbae32b2b565eeb22958f25f71b8d6d2a518fda5dbe2b5ee2c5a1a3f0157e264cf995b3be0d8e3598f197aa58be6dc5fa87a8aeab4e4afe22de8fee27a8fbf140416d5287bccdc29981654c11eb79fd62');               // Your Appwrite API key

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account, ID };
