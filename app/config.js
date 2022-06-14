const serviceUrl = process.env.SERVICE_URL || 'http://localhost:3000' // use localhost for default
const useAutoStoreData = process.env.USE_AUTO_STORE_DATA || 'true'
const useCookieSessionStore = process.env.USE_COOKIE_SESSION_STORE || 'false'
const useHttps = process.env.USE_HTTPS || 'true'
const usePromoMode = process.env.PROMO_MODE || 'false'

module.exports = {
  port: '3000',
  serviceName: 'Animal Health and Welfare Review Service',
  serviceUrl,

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData,

  // Enable or disable Browser Sync (local development only)
  useBrowserSync: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore,

  // Enable or disable built-in docs and examples.
  useDocumentation: 'false',

  // Force HTTP to redirect to HTTPS on production
  useHttps,

  usePromoMode
}
