import express  from 'express';
import cors from 'cors';
import {getPool, sql} from './db.js';

const app =express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) =>{
    res.json({ status: 'ok', message: 'Working Backend' });

});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All Values needed for the operation' });
  }

  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input('Name', sql.NVarChar(100), name)
      .input('Email', sql.NVarChar(150), email)
      .input('Message', sql.NVarChar(1000), message)
      .execute('sp_InsertContactMessage');

    res.json({ success: true, data: result.recordset });
  } catch (err) {
    console.error('Error message:', err);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(` Backend working at http://localhost:${PORT}`);
});