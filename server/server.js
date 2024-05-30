const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')
const path = require('path'); 

const app = express()
app.use(cors())

dotEnv.config()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'public/images')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
        console.log("MongoDb connected successfully")
    })
    .catch((error)=>{
        console.log(`${error}`);
    })

    app.use('/products',productRoutes)


app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`)
})