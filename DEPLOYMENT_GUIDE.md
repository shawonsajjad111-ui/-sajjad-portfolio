# Deployment Guide

## Recommended: GitHub Pages

This is best if you want a public link that stays online and can be edited anytime.

1. Sign in to GitHub.
2. Create a repository named `sajjad-portfolio`.
3. Upload the full contents of this folder.
4. Open the repository settings.
5. Open the Pages section.
6. Source: choose `Deploy from a branch`.
7. Branch: choose `main`.
8. Folder: choose `/root`.
9. Save.
10. Wait for GitHub to publish the site.

Typical public link format:

`https://YOUR-GITHUB-USERNAME.github.io/sajjad-portfolio/`

## Editing after deployment

1. Open the GitHub repository.
2. Open `assets/site-data.js`.
3. Click the pencil/edit button.
4. Change the text or add a new article/certificate/project.
5. Commit the change.
6. The live site updates automatically after the deployment finishes.

## Fast option: Netlify Drop

1. Go to Netlify Drop.
2. Drag the `sajjad-portfolio` folder into the deploy area.
3. Netlify gives you a public URL.
4. For future updates, drag the updated folder again or connect the project to GitHub.

## Notes

- The contact buttons use email links, not a backend contact form. This keeps the site simple, secure, and free to host.
- No private API keys are required.
- All certificate and article links are in `assets/site-data.js`.
