import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    await client.connect();
    const db = client.db('Data');

    if (id) {
      // Obtener un producto por ID
      const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
      return Response.json(product);
    } else {
      // Obtener todos los productos
      const products = await db.collection('products').find({}).toArray();
      return Response.json(products);
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(request) {
  try {
    const product = await request.json();
    await client.connect();
    const db = client.db('Data');
    await db.collection('products').insertOne(product);
    return Response.json({ message: 'Producto agregado' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function PUT(request) {
  try {
    const { id, ...updates } = await request.json();
    await client.connect();
    const db = client.db('Data');
    await db.collection('products').updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );
    return Response.json({ message: 'Producto actualizado' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await client.connect();
    const db = client.db('Data');
    await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    return Response.json({ message: 'Producto eliminado' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}