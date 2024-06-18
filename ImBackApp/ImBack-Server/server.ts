import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import sequelize from './db';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
}).catch((err) => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
