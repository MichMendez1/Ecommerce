import clientPromise from '../lib/mongodb';

export async function getProducts() {
  try {
    const client = await clientPromise; // Conecta al servidor
    const db = client.db('Data');
    const products = await db.collection('products').find({}).toArray();
    return products;
  } catch (error) {
    console.error('Error en getProducts:', error);
    throw error;
  }
}

export async function addProduct(product) {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').insertOne(product);
}

export async function updateProduct(id, updates) {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').updateOne(
    { _id: new ObjectId(id) },
    { $set: updates }
  );
}

export async function deleteProduct(id) {
  const client = await clientPromise;
  const db = client.db('Data');
  return await db.collection('products').deleteOne({ _id: new ObjectId(id) });
}