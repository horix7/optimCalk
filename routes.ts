import { Router } from 'https://deno.land/x/oak/mod.ts'
import { createCalc, returnNo } from './modules.ts'

const router = new Router()

router.post('/api/v1/calc', createCalc)
      .get('/', returnNo)

export default router