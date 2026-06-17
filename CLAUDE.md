# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All Docker Compose commands run from `tp-docker/`:

```bash
# Start the full stack (builds images if needed)
docker compose up --build

# Start in detached mode
docker compose up -d --build

# Stop and remove containers
docker compose down

# View logs
docker compose logs -f
```

Local development (without Docker):

```bash
# Backend (hot-reload via node --watch)
cd tp-docker/backend && npm install && npm run dev

# Frontend (Vite dev server)
cd tp-docker/frontend && npm install && npm run dev
```

The standalone `dockerfile` at the root can be tested with:

```bash
docker build -t hello . && docker run -p 3000:3000 hello
```

## Architecture

The project is a two-tier web app orchestrated with Docker Compose (`tp-docker/docker-compose.yml`), sharing an internal Docker network `app-net`.

- **Backend** (`tp-docker/backend/`) — Express.js API on port 3001. Single route: `GET /api/health`. Multi-stage Dockerfile: `deps` stage installs production-only `node_modules`, `production` stage copies them in.
- **Frontend** (`tp-docker/frontend/`) — React + Vite SPA. Multi-stage Dockerfile: `builder` stage runs `vite build`, `production` stage serves the `dist/` with `nginx:alpine` on port 80. In Vite dev mode (`vite.config.js`), `/api` is proxied to `http://backend:3001`; this proxy does **not** carry over to the nginx production image (no nginx proxy config exists).
- **CI** (`.github/workflows/docker.yml`) — builds and pushes both images to Docker Hub on push to `main` or on version tags (`v*`). Requires `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` repository secrets.
