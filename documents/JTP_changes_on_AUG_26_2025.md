# JTP Nexus Project Changes - August 26, 2025

## Vercel Project Name Change

The project name in Vercel has been changed from `v0-jtpnexus` to `jtpnexus`.

### Potential Impact

According to the [Vercel OIDC documentation](https://vercel.com/docs/oidc/reference#team-and-project-name-changes), changing a project name will affect the OpenID Connect token claims and may require updating backend OpenID Connect federation configurations.

### Project Information

- **Project ID:** `prj_jdwpAOrL8iogASndpx0KEUqCVN7u`
- **Current Project Name:** `jtpnexus`

## Domain Configuration

The domain `jtpnexus.com` has been configured in Vercel with the following setup:
- Primary domain: `jtpnexus.com` 
- Subdomain: `www.jtpnexus.com` (redirects to primary domain)
- Production deployment connected to the domain

## Analytics Implementation

Vercel Web Analytics has been enabled for the project on August 26, 2025.

### Installation Steps

1. Install the analytics package:
```bash
npm i @vercel/analytics
```

2. Implement the Analytics component in the app:
```jsx
import { Analytics } from "@vercel/analytics/next"
```

3. Add the component to the application layout.

### Documentation References

- [Vercel Analytics Quickstart](https://vercel.com/docs/analytics/quickstart#add-the-analytics-component-to-your-app)
