import https from 'https';

const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID || '3d6007daacc98589da2b4daf42c88726';
const CF_AUTH_KEY = process.env.CF_AUTH_KEY || 'ec33a108dfd2736e55280c851b3e0b241ae7f';
const CF_AUTH_EMAIL = process.env.CF_AUTH_EMAIL || 'chamnabmey.info@gmail.com';
const CF_KV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID || 'dce2fabac4984c8dab84bb79368a95de';
const CF_ZONE_ID = process.env.CF_ZONE_ID || 'cbce4cfad30d43d8dd475d3013033f78';

/**
 * Puts a key-value pair into Cloudflare Workers KV
 */
export function kvPut(key: string, value: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const req = https.request({
        hostname: 'api.cloudflare.com',
        path: `/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${encodeURIComponent(key)}`,
        method: 'PUT',
        headers: {
          'X-Auth-Key': CF_AUTH_KEY,
          'X-Auth-Email': CF_AUTH_EMAIL,
          'Content-Type': 'text/plain',
        },
      }, (res) => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => {
          resolve(res.statusCode === 200);
        });
      });
      req.on('error', (err) => {
        console.warn('Cloudflare KV PUT error:', err);
        resolve(false);
      });
      req.write(value);
      req.end();
    } catch (e) {
      console.warn('Cloudflare KV PUT exception:', e);
      resolve(false);
    }
  });
}

/**
 * Gets a value from Cloudflare Workers KV
 */
export function kvGet(key: string): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const req = https.request({
        hostname: 'api.cloudflare.com',
        path: `/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${encodeURIComponent(key)}`,
        method: 'GET',
        headers: {
          'X-Auth-Key': CF_AUTH_KEY,
          'X-Auth-Email': CF_AUTH_EMAIL,
        },
      }, (res) => {
        let body = '';
        res.on('data', c => body += c);
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve(body);
          } else {
            resolve(null);
          }
        });
      });
      req.on('error', (err) => {
        console.warn('Cloudflare KV GET error:', err);
        resolve(null);
      });
      req.end();
    } catch (e) {
      console.warn('Cloudflare KV GET exception:', e);
      resolve(null);
    }
  });
}

/**
 * Purges Cloudflare Edge Cache so visitors immediately see updated content
 */
export function purgeCloudflareCache(): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const req = https.request({
        hostname: 'api.cloudflare.com',
        path: `/client/v4/zones/${CF_ZONE_ID}/purge_cache`,
        method: 'POST',
        headers: {
          'X-Auth-Key': CF_AUTH_KEY,
          'X-Auth-Email': CF_AUTH_EMAIL,
          'Content-Type': 'application/json',
        },
      }, (res) => {
        resolve(res.statusCode === 200);
      });
      req.on('error', () => resolve(false));
      req.write(JSON.stringify({ purge_everything: true }));
      req.end();
    } catch {
      resolve(false);
    }
  });
}
