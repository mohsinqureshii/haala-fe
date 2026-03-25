# Haala FE - Deployment Guide

## Overview
This project is deployed on **Manus Hosting** with a custom domain **haala.io**. The CI/CD pipeline automatically deploys changes from GitHub to Manus.

## Deployment Methods

### Method 1: Git Push (Recommended)
The simplest way to deploy - just push to the main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

**What happens:**
1. GitHub Actions workflow triggers automatically
2. Code is built and tested
3. Manus webhook receives the update
4. Site deploys to haala.io within 1-2 minutes

### Method 2: Claude Code
When using Claude Code to edit files:

1. Make your changes in Claude Code
2. Claude will commit and push automatically
3. GitHub Actions will trigger
4. Your changes go live on haala.io

### Method 3: Manual Manus Deployment
If you need to force a deployment without code changes:

1. Go to Manus Management UI
2. Click "Publish" button
3. Your current code deploys immediately

## Deployment Status

**Live URLs:**
- 🌐 **Custom Domain**: https://haala.io
- 🔗 **Manus Domain**: https://haalafe-fqtvqb8r.manus.space
- 🔗 **Backup Domain**: https://halafe.manus.space
- 💻 **Dev Server**: https://3000-iuxxve3cuupzjdsvfkc4q-885139a8.us2.manus.computer

**Current Version:** Light white hero with English-only primary text, Arabic/Urdu translations, and i18n support

## Build & Test Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Check TypeScript errors
pnpm run type-check
```

## CI/CD Pipeline Details

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy-manus.yml`
- **Trigger**: Push to main branch or manual workflow_dispatch
- **Steps**:
  1. Checkout code
  2. Setup Node.js + pnpm
  3. Install dependencies
  4. Build project
  5. Deploy to Manus

### Environment Variables
No secrets needed for basic deployment. If you add backend features later:
- `MANUS_PROJECT_ID` - Project identifier
- `MANUS_API_TOKEN` - Authentication token (already configured in Manus)

## Rollback

If something goes wrong:

1. **Via Manus UI**: Go to Dashboard → Checkpoints → Select previous version → Click "Rollback"
2. **Via Git**: `git revert <commit-hash>` then push
3. **Via Manus CLI**: `manus rollback --version <version-id>`

## Monitoring

Check deployment status:
- **GitHub**: Actions tab shows build logs
- **Manus**: Dashboard shows deployment history
- **Live Site**: Visit https://haala.io to verify changes

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for errors
- Run `pnpm run build` locally to debug
- Common issues: TypeScript errors, missing dependencies

### Site Not Updating
- Wait 2-3 minutes for deployment to complete
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Check Manus Dashboard for deployment status

### Cache Issues
- Manus automatically invalidates CDN cache on deploy
- If issues persist, use Manus UI to force cache clear

## Next Steps

1. **Test deployment**: Make a small change and push to verify pipeline works
2. **Add backend features**: When ready, upgrade to web-db-user for database/auth
3. **Set up monitoring**: Configure analytics and error tracking
4. **Optimize performance**: Monitor bundle size and Core Web Vitals

## Support

For deployment issues:
- Check Manus Dashboard logs
- Review GitHub Actions workflow logs
- Contact Manus support at https://help.manus.im
