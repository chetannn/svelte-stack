import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

export default defineConfig({
	schema: './src/lib/server/schema.ts',
	out: './migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL || ''
	},
	verbose: true,
	strict: true
});
