import express from "express";
import cors from 'cors';
import administradorRoutes from './routes/administrador.routes.js';

const app =  express()


app.use(express.urlencoded({ extended: true }));

app.use(express.json({
    type: "*/*"
}))

app.use(cors())

app.use(administradorRoutes)


app.use((req, res, next) => {
    return res.status(404).json({
        message: 'Ruta no existente'
    })
})

export default app;