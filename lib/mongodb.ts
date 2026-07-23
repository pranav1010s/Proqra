import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (!uri) {
  console.warn('MONGODB_URI is not set — database writes will be skipped.')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise && uri) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise || Promise.reject(new Error('No MongoDB URI'))
} else {
  if (uri) {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  } else {
    clientPromise = Promise.reject(new Error('No MongoDB URI'))
  }
}

export default clientPromise
