FROM oven/bun:latest as runner

WORKDIR /app

ENV GROUP=bun
ENV USER=sneedex
ENV UID=1001

RUN adduser \
  --system \
  --disabled-password \
  --gecos "" \
  --home "/nonexistent" \
  --shell "/sbin/nologin" \
  --no-create-home \
  --uid "${UID}" \
  "${USER}"

COPY package.json ./

RUN bun install

COPY . .

ENV NODE_ENV production

USER sneedex

EXPOSE 3000

CMD ["bun", "run", "start"]
