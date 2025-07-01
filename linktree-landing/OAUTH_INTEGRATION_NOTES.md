# OAuth Authentication Integration Notes

## Current Setup

**BudgetBuddyLive Authentication:**
- Uses NextAuth.js with Google OAuth
- OAuth callbacks configured for: `budgetbuddylive-emegs13dj-turnerpeters-6002s-projects.vercel.app`
- Proxied through: `jtpnexus.com/budgetbuddylive`

## Authentication Flow Considerations

### 1. OAuth Redirect URLs
The Google OAuth app is currently configured with the Vercel domain. This means:
- ✅ **OAuth initiation**: Works through proxy (`jtpnexus.com/budgetbuddylive/api/auth/signin`)
- ⚠️  **OAuth callback**: May redirect to Vercel domain instead of staying on jtpnexus.com

### 2. Potential Solutions

#### Option A: Update Google OAuth Configuration (Recommended)
Add `jtpnexus.com` as an authorized redirect URL:
```
https://jtpnexus.com/budgetbuddylive/api/auth/callback/google
```

#### Option B: Configure NextAuth.js for Multiple Domains
In BudgetBuddyLive, update the NextAuth configuration:
```javascript
// In [...nextauth].js or auth.ts
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization: {
      params: {
        redirect_uri: process.env.NEXTAUTH_URL + '/api/auth/callback/google'
      }
    }
  })
]
```

### 3. Environment Variables for BudgetBuddyLive

If accessing through jtpnexus.com, may need:
```bash
NEXTAUTH_URL=https://jtpnexus.com/budgetbuddylive
# OR use dynamic URL detection
```

### 4. Header Forwarding

We've configured Next.js headers to forward host information:
- `X-Forwarded-Host: jtpnexus.com`
- `X-Original-Host: jtpnexus.com`

This helps the proxied app understand it's being accessed through jtpnexus.com.

### 5. Session Cookies

- ✅ **Domain**: Cookies should work correctly through the proxy
- ✅ **Path**: `/budgetbuddylive` path is preserved
- ✅ **HTTPS**: Both domains use HTTPS

## Testing Authentication Flow

### Test Steps:
1. Visit `jtpnexus.com/budgetbuddylive`
2. Click "Sign in with Google"
3. Complete OAuth flow
4. Verify redirect returns to `jtpnexus.com/budgetbuddylive/dashboard`
5. Test session persistence across page refreshes

### Expected Behavior:
- ✅ User stays on `jtpnexus.com` throughout auth flow
- ✅ OAuth callbacks work correctly
- ✅ Session persists after authentication
- ✅ All BudgetBuddyLive features work normally

## Troubleshooting

### If OAuth Fails:
1. Check Google OAuth console for redirect URL configuration
2. Verify `NEXTAUTH_URL` environment variable in BudgetBuddyLive
3. Check browser network tab for redirect issues
4. Ensure authentication headers are being forwarded

### If Session Issues:
1. Check cookie domain and path settings
2. Verify HTTPS configuration
3. Test with browser developer tools

---

**Status**: Monitoring authentication flow with current proxy setup.
**Action Required**: May need to update Google OAuth redirect URLs if callback issues occur. 