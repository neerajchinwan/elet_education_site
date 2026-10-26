import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function localApi() {
  return {
    name: 'local-api',
    apply: 'serve',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))
      server.middlewares.use('/api', async (req, res, next) => {
        const name = req.url.split('?')[0].replace(/^\/+|\/+$/g, '')
        if (!/^[a-z0-9-]+$/i.test(name) || !fs.existsSync(path.resolve('api', `${name}.js`))) return next()
        let body = ''
        for await (const chunk of req) body += chunk
        try { req.body = body ? JSON.parse(body) : {} } catch { req.body = {} }
        res.status = code => { res.statusCode = code; return res }
        res.json = data => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)) }
        try {
          const { default: handler } = await server.ssrLoadModule(`/api/${name}.js`)
          await handler(req, res)
        } catch (error) {
          console.error(`/api/${name} failed:`, error)
          if (!res.headersSent) res.status(500).json({ message: 'Server error' })
        }
      })
    },
  }
}

export default defineConfig({ plugins: [react(), localApi()] })
