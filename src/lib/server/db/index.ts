import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

if (!env.TURSO_URL) throw new Error('DATABASE_URL is not set');
if (!dev && !env.TURSO_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

const client = createClient({ url: env.TURSO_URL, authToken: env.TURSO_AUTH_TOKEN });

export const db = drizzle(client);
