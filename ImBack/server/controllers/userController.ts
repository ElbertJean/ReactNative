import { Request, Response } from 'express';
import sequelize from '../db';

export const registerUser = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  try {
    await sequelize.query(
      'INSERT INTO usuario (nome, email, senha) VALUES (:nome, :email, :senha)',
      { replacements: { nome, email, senha } }
    );

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
};
