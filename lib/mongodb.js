import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Por favor, agrega la variable MONGODB_URI en .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    console.log('Conectando a MongoDB...');
    global._mongoClientPromise = client.connect().then(() => {
      console.log('Conexión exitosa a MongoDB');
      return client;
    }).catch((error) => {
      console.error('Error al conectar a MongoDB:', error);
      throw error;
    });
  }
  clientPromise = global._mongoClientPromise;
}

export default clientPromise;