// Budget Buddy Live Configuration
// This file contains configuration settings for the budgetbuddylive integration

export const budgetBuddyConfig = {
  // API Configuration
  api: {
    baseUrl: process.env.BUDGETBUDDY_API_URL || '/api/budgetbuddylive',
    version: process.env.BUDGETBUDDY_API_VERSION || 'v1',
    timeout: 10000, // 10 seconds
  },

  // Database Configuration
  database: {
    url: process.env.BUDGETBUDDY_DATABASE_URL,
    provider: process.env.BUDGETBUDDY_DATABASE_PROVIDER || 'postgresql',
  },

  // Authentication Configuration
  auth: {
    jwtSecret: process.env.BUDGETBUDDY_JWT_SECRET,
    sessionSecret: process.env.BUDGETBUDDY_SESSION_SECRET,
    tokenExpiry: '7d',
  },

  // Feature Flags
  features: {
    enableExport: process.env.BUDGETBUDDY_ENABLE_EXPORT === 'true',
    enableNotifications: process.env.BUDGETBUDDY_ENABLE_NOTIFICATIONS === 'true',
    enableBankSync: process.env.BUDGETBUDDY_ENABLE_BANK_SYNC === 'true',
    enableCharts: process.env.BUDGETBUDDY_ENABLE_CHARTS === 'true',
  },

  // App Settings
  app: {
    name: 'Budget Buddy Live',
    version: '1.0.0',
    description: 'Personal budget management and financial tracking',
    maxTransactionsPerPage: 50,
    maxCategoriesPerUser: 100,
    defaultCurrency: 'USD',
  },

  // External Services
  services: {
    plaid: {
      clientId: process.env.BUDGETBUDDY_PLAID_CLIENT_ID,
      secret: process.env.BUDGETBUDDY_PLAID_SECRET,
      environment: process.env.BUDGETBUDDY_PLAID_ENVIRONMENT || 'sandbox',
    },
    email: {
      host: process.env.BUDGETBUDDY_SMTP_HOST,
      port: parseInt(process.env.BUDGETBUDDY_SMTP_PORT || '587'),
      user: process.env.BUDGETBUDDY_SMTP_USER,
      password: process.env.BUDGETBUDDY_SMTP_PASS,
      from: process.env.BUDGETBUDDY_FROM_EMAIL,
    },
  },

  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.BUDGETBUDDY_RATE_LIMIT || '100'), // requests per window
  },

  // File Upload Settings
  upload: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    destination: '/uploads/budgetbuddy',
  },
}

export default budgetBuddyConfig 