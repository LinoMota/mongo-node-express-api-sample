import Mongoose from 'mongoose';

const CONNECTION_URL = "mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb"

Mongoose.set("useNewUrlParser", true)
Mongoose.set("useUnifiedTopology", true)
Mongoose.set("useFindAndModify", false)


export default Mongoose.connect(CONNECTION_URL).then(res => {
    console.log("Conectei no banco de dados")
}).catch(err => {
    console.log("Não pude conectar no banco de dados")
})