services:
  - type: web
    name: graduation-invitation
    env: static
    buildCommand: npm run build
    staticPublishPath: ./dist

    envVars:
      - key: NODE_VERSION
        value: 18
      - key: ENABLE_MCP
        value: true

    routes:
      - type: rewrite
        source: /*
        destination: /index.html

    headers:
      - path: /*
        name: Cache-Control
        value: public, max-age=3600
      - path: /assets/*
        name: Cache-Control
        value: public, max-age=31536000, immutable

  - type: worker
    name: form-processor
    env: node
    buildCommand: npm install
    startCommand: node server/form-handler.js

    envVars:
      - key: FORM_WEBHOOK_URL
        sync: false
