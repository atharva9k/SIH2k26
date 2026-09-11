# Step 1: Build the React SPA Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY gem-compliance-ai/frontend/package*.json ./
RUN npm install
COPY gem-compliance-ai/frontend/ ./
RUN npm run build

# Step 2: Python Backend Runtime
FROM python:3.11-slim
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python requirements
COPY gem-compliance-ai/backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r ./backend/requirements.txt

# Copy Backend Source Code
COPY gem-compliance-ai/backend/ ./backend/
COPY gem-compliance-ai/uploads/ ./uploads/

# Copy built frontend dist into location expected by FastAPI
COPY --from=frontend-builder /app/frontend/dist /app/frontend/dist

WORKDIR /app/backend

ENV PORT=8000
EXPOSE 8000

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT}"]
