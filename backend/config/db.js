const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
  try {
    console.log('⏳ Fetching tables list...');
    
    // MySQL ma tables list garne query
    const [rows] = await pool.query('SHOW TABLES');
    
    console.log('📋 Database ma bhako Tables ko list:');
    console.table(rows); // Table format ma ramro sanga dekhaucha

  } catch (err) {
    console.error('❌ Error aayo:', err.message);
  }
})();


module.exports = pool.promise(); 