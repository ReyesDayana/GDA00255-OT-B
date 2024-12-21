import express from 'express'
import ManejadorRutas from './routes/project.routes.js'
const app = express()


app.use(express.json());
app.use(ManejadorRutas);

export default app