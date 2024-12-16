const pool = require('../db'); // เชื่อมต่อกับ PostgreSQL database

// เพิ่มผู้ใช้ใหม่
const createUser = async (req, res) => {
  const { firstname, lastname, date_of_birth, tel, email, password, confirm_password } = req.body;

  try {
    // ตรวจสอบว่าอีเมลซ้ำหรือไม่
    const result = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      // ถ้าอีเมลซ้ำ ส่งข้อความผิดพลาด
      return res.status(400).json({ error: 'อีเมลนี้ถูกใช้งานไปแล้ว' });
    }

    // หากไม่ซ้ำ ให้ทำการเพิ่มข้อมูลผู้ใช้
    const insertResult = await pool.query(
      'INSERT INTO "User" (firstname, lastname, date_of_birth, tel, email, password, confirm_password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [firstname, lastname, date_of_birth, tel, email, password, confirm_password]
    );

    // ส่งข้อมูลผู้ใช้ที่เพิ่มไปแล้วกลับไปที่ฝั่ง Client
    res.status(201).json(insertResult.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createUser,
};
