import express from 'express'
import morgan from 'morgan'  // paso 2
import helmet from 'helmet'  // paso 2
import mongoose from 'mongoose'  // paso 3
import compression from 'compression'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
class Server {
    private app: express.Application
    constructor(){
        this.app = express()
        this.config()
        this.routes()  // paso 2
    }
    config(){

        // todo lo de mongoose es del paso 3
        const MONGO_URI = 'mongodb://localhost/restapits'
        mongoose.set('useFindAndModify', true)
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true       })
        .then(db => console.log('DB is connected'))
        this.app.set('port', process.env.PORT || 3000)
        // Middlewares
        this.app.use(express.json()) // para que nuestro servidor entienda
                                // los formatos json desde clientes
        this.app.use(express.urlencoded({extended: false})) // para aceptar envíos 
                                                // desde formulario
        this.app.use(morgan('dev'))  // Paso 2
        this.app.use(helmet())  // paso 2
        this.app.use(compression())  // Para reducir el peso
        this.app.use(cors())  // para validar que nuestro servidor pueda conectarse
                              // a otros servidores

    }
    routes(){ // paso 2
        this.app.use(indexRoutes)
    }
    start(){
        this.app.listen(this.app.get('port'), 
        () => {
            console.log(`Server on port: ${this.app.get('port')}`)
        })
    }
}
const server = new Server()
server.start()