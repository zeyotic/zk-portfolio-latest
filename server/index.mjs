import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'

const app = new Hono()

app.use(
  '/*',
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
  }),
)

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().email().max(254),
  message: z.string().trim().min(10).max(4000),
})

app.get('/api/health', (c) => c.json({ ok: true, service: 'zeyad-portfolio-api' }))

app.post('/api/contact', async (c) => {
  let body
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid JSON body' }, 400)
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return c.json(
      {
        error: 'Validation failed',
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      400,
    )
  }

  const { name, email, message } = parsed.data
  console.log(
    `[contact] ${new Date().toISOString()}`,
    JSON.stringify({ name, email, preview: message.slice(0, 120) }),
  )

  return c.json({
    ok: true,
    receivedAt: new Date().toISOString(),
  })
})

const port = Number(process.env.PORT) || 8787
console.log(`Portfolio API → http://localhost:${port}`)
serve({ fetch: app.fetch, port })
