require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const authRoutes = require('./routes/authRoutes');
const recursoRoutes = require('./routes/[recurso]Routes'); // <-- MUDAR AQUI
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/[recurso]', recursoRoutes); // <-- MUDAR AQUI

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.get('/', (req, res) => res.send('API [Recurso] - /api-docs'));

app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB Atlas');
    app.listen(process.env.PORT, () => console.log(`🚀 Servidor na porta ${process.env.PORT}`));
  })
  .catch(err => console.error(err));