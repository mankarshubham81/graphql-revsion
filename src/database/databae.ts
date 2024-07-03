import mongoose from "mongoose";

// graphqldatabase = 6packprogrammer 
export const connectDB = (uri: string) => mongoose.connect(uri, { dbName:"graphqldatabase"}).then(conn => {
    console.log(`Connected with ${conn.connection.name}`);
}).catch(e => console.log(e));