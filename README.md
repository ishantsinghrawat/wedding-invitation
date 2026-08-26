# Wedding Invitation Website

A simple, elegant, mobile-friendly wedding invitation website made with plain HTML, CSS, and JavaScript.

No npm.
No React.
No database.
No hosting bill.

It works directly with GitHub Pages.

## 1. Files

- `index.html` — all invitation text and sections
- `styles.css` — design, colours, spacing and animations
- `script.js` — countdown, mobile menu and scroll animations
- `assets/images/` — add your photos here

## 2. Edit the invitation

Open `index.html` and replace:

- `Ishant & Partner`
- wedding date
- Toronto / venue
- ceremony and reception time
- venue address
- Google Maps URL
- RSVP deadline
- Google Forms RSVP URL

Search for the word `Partner` to quickly find the name placeholders.

## 3. Change the countdown

Open `script.js`.

Change:

```js
const weddingDate = new Date("2026-12-12T16:00:00");
```

Example:

```js
const weddingDate = new Date("2027-02-18T18:30:00");
```

## 4. Add photos

Put photos in:

`assets/images/`

Recommended names:

- `hero.jpg`
- `first-date.jpg`
- `couple.jpg`
- `proposal.jpg`
- `venue.jpg`

`hero.jpg` automatically becomes the full-screen cover.

The first four additional photos automatically replace four placeholders.

For the gallery, you can later replace placeholder `<div>` elements with normal `<img>` tags.

## 5. RSVP setup

The easiest free option is Google Forms.

Create fields like:

- Guest name
- Attending? Yes / No
- Number of guests
- Meal preference
- Dietary restrictions
- Message for the couple

Copy the form link.

Then in `index.html`, search:

`https://forms.google.com/`

Replace it with your actual Google Form URL.

## 6. Google Maps

Search in `index.html` for:

`https://maps.google.com/`

Replace with your venue's Google Maps link.

## 7. Publish to GitHub Pages

### Create repository

1. Log in to GitHub.
2. Create a new repository.
3. Example repository name:
   `wedding-invitation`
4. Make it Public.
5. Upload every file/folder from this project.
6. Commit the files.

### Enable Pages

1. Open the repository.
2. Go to `Settings`.
3. Choose `Pages`.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Save.

GitHub will provide an address similar to:

`https://YOURUSERNAME.github.io/wedding-invitation/`

## 8. Connect your own domain

Optional examples:

- `ishantandname.com`
- `ishantwedsname.com`
- `ourwedding2026.com`

Buy the domain from a registrar and configure it under:

GitHub Repository → Settings → Pages → Custom domain.

## 9. Make a QR code

Once GitHub Pages is live, copy your website URL and create a QR code that points to it.

Put the QR code on:

- physical invitation cards
- save-the-date cards
- table cards
- WhatsApp invitation image

Important: publish the final URL before printing hundreds of cards.

## 10. Privacy note

A normal GitHub Pages site is publicly accessible.

Do not put private information on it that you would not want publicly indexed.

If you need guest-specific/private invitations, authentication, invitation codes, or personalized RSVP tracking, that should be a second version with a backend/database.

## Suggested next upgrade

Version 2 could include:

- individual invitation code for each family
- guest name automatically shown on the invitation
- guest limits
- RSVP database
- admin dashboard
- WhatsApp share button
- calendar download
- separate Indian wedding event pages
- music toggle
- multilingual English/Hindi invitation
