# Deployment Guide

## Render.com Deployment

This project is configured for deployment on [Render](https://render.com/).

### Web Service (Static Site)
- **Name**: `graduation-invitation`
- **Environment**: `static`
- **Build Command**: `npm run build`
- **Publish Directory**: `./dist`

### Worker (Form Processor)
- **Name**: `form-processor`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server/form-handler.js`

### Environment Variables
- `NODE_VERSION`: 18
- `ENABLE_MCP`: true
- `FORM_WEBHOOK_URL`: (Optional) Webhook for RSVP notifications

## Manual Deployment
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to any static hosting provider.
