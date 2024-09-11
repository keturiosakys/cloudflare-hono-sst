import { Hono } from 'hono'
import { instrument } from '@fiberplane/hono-otel'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default instrument(app)
