# Sajjad Hossain Shawon Portfolio Website

This is an editable static portfolio website built with plain HTML, CSS, and JavaScript. It does not need a database, build system, or paid server.

## Files

- `index.html` - main website layout
- `assets/styles.css` - visual design and responsive layout
- `assets/site-data.js` - editable content: profile text, links, articles, certifications, awards, projects, skills
- `assets/app.js` - renders the content from `site-data.js`
- `assets/favicon.svg` - browser icon

## How to edit content

1. Open `assets/site-data.js`.
2. Edit text, links, publications, certificates, projects, awards, or skills.
3. Keep the same JavaScript object format: quotes around text and commas between items.
4. Save the file.
5. Re-upload or commit the changed file to your hosting provider.

## Best hosting option for permanent public link and easy editing

Use GitHub Pages with your GitHub account:

1. Create a new GitHub repository, for example `sajjad-portfolio`.
2. Upload all files from this folder.
3. Go to repository `Settings` > `Pages`.
4. Select `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save.
7. Your site should become available at a GitHub Pages URL such as `https://yourusername.github.io/sajjad-portfolio/`.

When you want to edit the site later, open `assets/site-data.js` on GitHub, click the pencil/edit button, update the content, and commit the change.

## Alternative hosting

You can also deploy this folder to Netlify or Vercel. For Netlify, drag and drop the whole folder or connect a GitHub repository for automatic updates.

## Hyperlinked items included

The site includes clickable links for email, academic reference email, LinkedIn, GitHub, ORCID, ResearchGate, thesis/publications/articles, and all certificate/badge verification links supplied in the CV link list.
