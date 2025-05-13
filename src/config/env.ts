import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const BASE_URL = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/';

