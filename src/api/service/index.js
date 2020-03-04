import pool from '../../db';
import HttpError from '../utils/error';

export const listForms = async ({ limit = 100, offset = 0 }) => {
  const [
    data,
  ] = await pool.execute(`SELECT * FROM forms ORDER BY ? LIMIT ? OFFSET ?`, [
    'created_at DESC',
    +limit,
    +offset,
  ]);

  return data;
};

export const createForm = async ({ email, phone, description }, ip_addr) => {
  const [
    data,
  ] = await pool.execute(
    `SELECT COUNT(*) found FROM forms WHERE email = ? OR phone = ?`,
    [email, phone],
  );

  const [{ found }] = data;

  if (found) {
    throw new HttpError(
      'This email or phone number has already been used',
      400,
    );
  }

  await pool.execute(
    `INSERT INTO forms (email, phone, description, ip_addr) VALUES(?, ?, ?, ?)`,
    [email, phone, description || null, ip_addr],
  );
};

export const countFormsPerIp = async ip_addr => {
  const [
    data,
  ] = await pool.execute(`SELECT COUNT(*) count FROM forms WHERE ip_addr = ?`, [
    ip_addr,
  ]);

  const [{ count }] = data;

  return count;
};
