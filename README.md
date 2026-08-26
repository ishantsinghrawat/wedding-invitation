# A & I — Personalized Wedding Invitation

This is the personalized version of the wedding invitation site.

It is designed for GitHub Pages and uses only:

- HTML
- CSS
- JavaScript

No Node.js, npm, React, backend, or database is required.

## What this version adds

Each guest or family can receive a unique URL.

Example:

```text
https://YOURUSERNAME.github.io/YOUR-REPO/?guest=Rawat%20Family&id=RF001
```

The site automatically shows:

- the guest/family name
- a personalized welcome message
- an optional invitation ID
- a personalized browser-tab title
- an RSVP button that carries the guest name and invitation ID into the RSVP URL

There is NO invited-guest-count feature.

## Drop-in installation

If you already have Version 1 in GitHub:

1. Keep your existing `assets/images/` folder and photos.
2. Replace these files with the new versions:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Commit the changes.
4. GitHub Pages will redeploy automatically.

## Create personalized guest links

Use this pattern:

```text
https://YOURUSERNAME.github.io/YOUR-REPO/?guest=GUEST_NAME&id=INVITE_ID
```

Examples:

```text
?guest=Rawat%20Family&id=RF001
?guest=Rahul%20and%20Priya&id=RP002
?guest=Mr.%20and%20Mrs.%20Sharma&id=MS003
```

Spaces become `%20` automatically if you use a normal URL encoder, but most browsers also handle pasted spaces.

The `id` parameter is optional.

If someone opens the site without any guest information, the page shows:

```text
Our Family & Friends
```

## RSVP setup

Open `script.js`.

Find:

```js
const RSVP_BASE_URL = "https://forms.google.com/";
```

Replace it with the real URL for your Google Form, Typeform, Jotform, etc.

The site automatically adds:

```text
?guest=Rawat+Family&invite_id=RF001
```

to the RSVP link.

Important: Google Forms does not automatically prefill arbitrary URL parameters into form fields.

If you want the guest name and invitation ID to visibly prefill Google Form fields, generate a Google Forms "Get pre-filled link" and then replace the `guest` and `invite_id` parameter names in `script.js` with Google's `entry.xxxxx` field IDs.

## Photos

Keep these inside:

```text
assets/images/
```

Recommended filenames:

```text
hero.jpg
first-date.jpg
couple.jpg
proposal.jpg
venue.jpg
```

## Wedding date

Open `script.js` and change:

```js
const weddingDate = new Date("2026-12-12T16:00:00");
```

## Important privacy note

GitHub Pages is public.

Guest names passed in URLs are not secret. Invitation IDs in this version are identifiers, not passwords.

Do not use this version to store private guest information in the repository.

## Optional next upgrade

A future private version could add:

- true invite-code validation
- protected RSVP records
- an admin dashboard
- invitation status tracking
- personalized QR codes
- guest list CSV generation
