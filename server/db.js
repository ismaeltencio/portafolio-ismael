import sql from 'mssql';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const config = {
    server: 'ISMA_PC',
    database: 'PortfolioDB',
    user: 'portfolio_user',
    password: 'Portafolio2026!',
    options: {
        trustServerCertificate: true,
        encrypt: false,
    },
};


let poolPromise;

export async function getPool() {
    if(!poolPromise){
        poolPromise = sql.connect(config);
    }
    return poolPromise;
    
}

export { sql };