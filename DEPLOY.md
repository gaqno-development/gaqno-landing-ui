# gaqno-landing-ui — Deploy & 404 troubleshooting

## Root path and locales

- All routes are under a locale: `/pt`, `/en`, `/pt/dev`, `/pt/custos`, etc.
- **`/` (root)** has no page; the app redirects it to the default locale (`/pt`) via:
  1. **Middleware** (`middleware.ts`) — runs first and redirects `/` → `/pt` (or `/en` from Accept-Language).
  2. **Route handler** (`app/route.ts`) — fallback: if a request for `/` reaches the app without being redirected (e.g. middleware not running), `GET /` returns a redirect to `/pt`.

If you still see **404 on Cloudflare or Coolify** for the root URL or the app:

### Coolify

1. **Port** — Container exposes **3000** (see `Dockerfile`). In Coolify, the service must use port **3000** for the app (not 3009; 3009 is only for `npm run dev`).
2. **Health check** — If the health check hits `/` and expects 200, it may get a **302 redirect**; configure the health check to allow 302 or to use `/pt` (or `/en`) as the path.
3. **Subpath** — If the app is served at a subpath (e.g. `https://domain.com/landing`), add `basePath: '/landing'` in `next.config.mjs` and rebuild; otherwise Next.js will not match `/landing` and may 404.

### Cloudflare

1. **Tunnel / proxy** — The tunnel (or proxy) must forward requests to the Coolify service (container port 3000). If the public URL is the root of a custom hostname (e.g. `https://landing.gaqno.dev/`), no subpath is needed.
2. **Cache** — If you previously got 404 for `/`, Cloudflare might cache it. Purge the cache for that URL or use “Development Mode” to bypass cache and test.
3. **Redirect** — Root `/` should return **302** to `/pt` (or `/en`). If you see 404, the request may not be reaching the container (wrong host, tunnel route, or upstream down).

### Quick checks

- From the host running the container: `curl -I http://localhost:3000/` → expect **302** with `Location: .../pt`.
- From the host: `curl -I http://localhost:3000/pt` → expect **200**.
