# Build the static site, then serve it with nginx. The final image is a few MB
# and starts in about a second: no Node, no database, nothing to wait for.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
# The official image fills ${...} placeholders in /etc/nginx/templates/*.template from the environment at start.
ENV FRAME_ANCESTORS="'self'"
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1/health >/dev/null || exit 1
