import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./dataBase.js');

process.on('SIGINT', () =>
    db.close(() => {
        console.log('DB encerrado!');
        process.exit(0);
    })
);

export default db;