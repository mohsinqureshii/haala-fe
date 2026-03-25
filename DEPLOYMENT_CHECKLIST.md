# Deployment Checklist

## Pre-Deployment

- [ ] All changes committed locally
- [ ] Run `pnpm run build` to verify build succeeds
- [ ] Test changes on dev server (`pnpm run dev`)
- [ ] No TypeScript errors blocking deployment
- [ ] All new assets uploaded to CDN (if applicable)

## Deployment

### Via GitHub (Automated)
```bash
git push origin main
```
- [ ] GitHub Actions workflow starts
- [ ] Build completes successfully
- [ ] Manus webhook triggers
- [ ] Site updates within 2 minutes

### Via Manus UI (Manual)
- [ ] Open Manus Management Dashboard
- [ ] Click "Publish" button
- [ ] Confirm deployment
- [ ] Wait for build to complete

### Via Claude Code (Automated)
- [ ] Make changes in Claude Code
- [ ] Claude commits and pushes automatically
- [ ] GitHub Actions triggers
- [ ] Manus deploys automatically

## Post-Deployment

- [ ] Visit https://haala.io to verify changes
- [ ] Hard refresh browser (Cmd+Shift+R)
- [ ] Check all pages load correctly
- [ ] Test interactive features
- [ ] Verify mobile responsiveness
- [ ] Check analytics are tracking

## Rollback (If Issues Found)

### Option 1: Via Manus Dashboard
- [ ] Go to Dashboard → Checkpoints
- [ ] Find previous working version
- [ ] Click "Rollback"
- [ ] Confirm rollback

### Option 2: Via Git
```bash
git revert <commit-hash>
git push origin main
```
- [ ] GitHub Actions triggers
- [ ] Previous version deploys

### Option 3: Via Manus CLI
```bash
manus rollback --version <version-id>
```

## Monitoring

After deployment, monitor for 30 minutes:
- [ ] No 404 errors in console
- [ ] No JavaScript errors in browser console
- [ ] Page load time is acceptable
- [ ] All images load correctly
- [ ] All links work
- [ ] Forms submit correctly

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Site shows old version | Hard refresh (Cmd+Shift+R), wait 2-3 min |
| Build fails | Check GitHub Actions logs, fix errors locally |
| 404 errors | Check file paths, ensure assets are uploaded |
| Slow load time | Check bundle size, optimize images |
| TypeScript errors | Fix errors in code, commit, push again |

## Emergency Contacts

- **Manus Support**: https://help.manus.im
- **GitHub Issues**: Check repository issues
- **Local Testing**: `pnpm run dev` to debug locally

## Notes

- Deployments typically complete within 1-2 minutes
- CDN cache is automatically cleared on each deployment
- Previous versions are saved and can be rolled back anytime
- All deployments are logged in Manus Dashboard
