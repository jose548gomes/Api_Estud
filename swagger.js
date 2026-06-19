const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestão de Disciplinas',
      version: '1.0.0',
      description: 'API REST para gestão de disciplinas (CRUD básico)'
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:3003',
        description: 'Servidor'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./routes/*.js']
};

module.exports = swaggerJsdoc(options);