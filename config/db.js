import mongoose from "mongoose";

let cached=global.mongoose

if(!cached){
    cached=global.mongoose={conn:null,promise:null}
}

async function ConnectDB() {

    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts={
            bufferCommanda:false
        }
        cached.promise=mongoose.connect(`${process.env.MONGODB_URI}/electrocart`,opts).then(mongoose=>{
            return mongoose
        })
    }

    cached.conn=await cached.promise
    return cached.conn
    
}

export default ConnectDB