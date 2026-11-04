# Premium animated invitation edition

This version replaces all photo placeholders with animated CSS illustrations, adds a mobile RSVP shortcut, improves navigation accessibility and corrects the wedding countdown to January 30, 2027 at 4:00 PM India time.

## Deploy
Upload the contents of this folder to the root of your GitHub Pages repository, replacing index.html, styles.css and script.js. The URL parameters `?guest=...&id=...` still work.

## Important before sending invitations
The RSVP link is still the original placeholder (`https://forms.google.com/`). Update `RSVP_BASE_URL` in `script.js` with your actual form URL. The code passes `guest` and `invite_id` query parameters, but Google Forms prefill requires actual entry IDs and configuration.

The existing `hero.jpg` is retained in assets for compatibility but is not displayed anywhere in this version. No personal photographs are required.
