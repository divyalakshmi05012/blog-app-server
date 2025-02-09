import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import Router from './routes/index.js'

const PORT=process.env.PORT
const app=express()

app.use(cors())
app.use(express.json())
app.use(Router)


app.listen(PORT,()=>console.log(`Server Running at Port ${PORT}`))