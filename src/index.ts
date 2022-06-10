import 'reflect-metadata'
import './alias'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimiterMiddleware } from './middlewares/rate_limiter'
import { handleErrorMiddleware } from './middlewares/error_handler'
import logger from './helpers/logger'
import passport from 'passport'
import { JWTStrategy } from './middlewares/passport'

//importing routes
import routes from './router'

//importing configs
import { settings } from './config/settings'

import { AppDataSource } from './database/datasources'

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  config() {}

  middlewares() {
    this.app.use(
      morgan('[:date[iso]] (:status) ":method :url HTTP/:http-version" :response-time ms - [:res[content-length]]')
    )
    this.app.use(cors())
    this.app.use(rateLimiterMiddleware)
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(passport.initialize())
    passport.use(JWTStrategy)
  }

  routes() {
    this.app.use(routes)
    this.app.use(handleErrorMiddleware)
  }

  start() {
    this.app.listen(settings.PORT, () => {
      logger.debug('Current settings')
      console.log(settings)

      logger.info('🚀 Server listen on port ' + settings.PORT)
    })

    AppDataSource.initialize()
      .then(() => {
        logger.info('🚀 Database conection is online...')
      })
      .catch(console.log)
  }
}

const server = new Server()
server.start()
