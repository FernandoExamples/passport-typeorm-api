import { Router } from 'express'
const router = Router()

import authRoutes from '@modules/auth/auth.routes'

router.use('/api', authRoutes)

export default router
