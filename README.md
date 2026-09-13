# Rapha's Counseling Center

A rebuilt website for Rapha's Counseling Center — online counseling with Ann-Marie Blaise, M.Sc. Counselling Psychology.

Original site: https://www.raphascounseling.com

## What this is

One static page, no build step and no framework. Navigation runs on hash routes (`#/about`, `#/services`, `#/book`, `#/testimonials`), so every section works from a plain file or any static host.

```
index.html   the whole site
img/         photography and the logo, from the original site
.nojekyll    tells GitHub Pages to serve the files as-is
```

Fonts load from Google Fonts. Everything else is local.

## Run it locally

Open `index.html` in a browser. That's the whole setup.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://caden284.github.io/Raphascounseling/`.

To use the real domain instead, point `raphascounseling.com` at GitHub Pages and add the domain under **Settings → Pages → Custom domain**.

## Before going live

- **Booking links.** The six "Request to book" buttons currently point at the Wix booking calendar. Once Ann-Marie creates her Google Calendar appointment schedule, swap in that link, or paste the website embed code into the Book section to show live open times on the page.
- **Terms and Refund Policy.** The old Wix pages carried Wix's placeholder legal text. Those two sections need real wording before launch.
- **Social links.** The old site's social icons pointed at Wix's own accounts. The footer here links only to WhatsApp and email until the real profiles exist.

## Contact details used on the page

Phone and WhatsApp: 599-416-7333
Email: galemarieblades@gmail.com
