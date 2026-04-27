# Health Check Setup para Render

## Objetivo
Manter o servidor ativo no Render e evitar hibernação.

## Configuração no Render

### 1. Adicionar Cron Job via Render Dashboard

1. Acesse seu projeto no Render: https://dashboard.render.com
2. Vá para **Cron Jobs** (ou **Background Workers**)
3. Clique em **New Cron Job**
4. Configure com os seguintes dados:

```
Name: JBrasil Labs Health Check
Webhook URL: https://seu-dominio.onrender.com/health
Schedule: Every 10 minutes (*/10 * * * *)
```

### 2. Alternativa: Usar Uptime Robot (Gratuito)

1. Acesse https://uptimerobot.com
2. Faça login ou crie uma conta
3. Clique em **Add New Monitor**
4. Configure:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: JBrasil Labs Health Check
   - **URL**: `https://seu-dominio.onrender.com/health`
   - **Monitoring Interval**: Every 5 minutes

### 3. Testar o Health Check

Execute no terminal:
```bash
curl https://seu-dominio.onrender.com/health
```

Resposta esperada:
```json
{
  "status": "ok",
  "timestamp": "2026-04-23T22:46:00.000Z",
  "uptime": 1234.56,
  "environment": "production"
}
```

## Como Funciona

- O endpoint `/health` responde com status 200 OK
- Render reconhece como atividade e não hiberna o serviço
- O cron job acessa a URL a cada 10 minutos
- Seu site fica sempre online e responsivo

## Endpoints Disponíveis

- **GET /health** - Status do servidor
- **GET /** - Página inicial (HTML)
- **GET /api/...** - Qualquer rota da aplicação

## Monitoramento

Você pode monitorar a saúde do servidor através de:
1. Uptime Robot Dashboard
2. Render Dashboard > Logs
3. Google Analytics (eventos de page load)
