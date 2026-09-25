# Rapha's Counseling Center

A rebuilt website for Rapha's Counseling Center — online counseling with Ann-Marie Blaise, M.Sc. Counselling Psychology.

Original site: https://www.raphascounseling.com

## What this is

One static page, no build step and no framework. Navigation runs on hash routes (`#/about`, `#/services`, `#/book`, `#/testimonials`), so every section works from a plain file or any static host.

```
index.html   the whole site
img/         photography and the logo, from the original site
vercel.json  caching and security headers for Vercel
.nojekyll    tells GitHub Pages to serve the files as-is
```

Fonts load from Google Fonts. Everything else is local.

## Run it locally

Open `index.html` in a browser. That's the whole setup.

## Deploy on Vercel

There is no build step, so Vercel serves the repository as-is.

1. Go to vercel.com and sign in with GitHub.
2. Choose **Add New → Project**, then import `Caden284/Raphascounseling`.
3. Leave every build setting on its default. Framework preset is **Other**, and the build command and output directory stay empty.
4. Click **Deploy**.

Every later push to `main` redeploys automatically. Pull requests get their own preview URL.

To use the real domain, open the project's **Settings → Domains**, add `raphascounseling.com`, and follow the DNS records Vercel shows you.

## Deploy on GitHub Pages instead

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://caden284.github.io/Raphascounseling/`.

## Before going live

- **Booking links.** All six "Request to book" buttons open Ann-Marie's Google Calendar booking page (Rapha's Counseling Sessions). See the next section to change it.
- **Terms and Refund Policy.** Written with a 24-hour cancellation window and payment before each session. Adjust those two points in both sections if the practice works differently.
- **Social links.** The old site's social icons pointed at Wix's own accounts. The footer here links only to WhatsApp and email until the real profiles exist.

## Set up booking with Google Calendar

Ann-Marie signs in to Google Calendar with galemarieblades@gmail.com, on a computer (the phone app can't create booking pages).

1. Click **Create**, then **Appointment schedule**.
2. Title: `Rapha's Counseling Center session`. Duration: 30 minutes for the consultation.
3. Set her weekly hours, time zone, and a buffer between sessions if she wants one.
4. Under **Booked appointment settings**, choose **Google Meet video conferencing** so each booking gets a video link.
5. If her account offers custom questions on the booking form, add one: "Which service would you like?"
6. Click **Save**, then **Share**, then copy the booking page link.

Paste the link into the `BOOKING` block near the bottom of `index.html`:

```js
const BOOKING = {
  all: 'https://calendar.app.google/XXXXXXXX',
  ...
};
```

`all` is used for every service. If she creates separate schedules for the longer sessions (for example a 90 minute one for couples), paste those under `couples`, `individual` and so on. Any service left empty falls back to WhatsApp, so nothing breaks while it's being set up.

Every booking lands on her calendar and in her Gmail inbox, and the client gets a confirmation email with the Meet link. Turning on Google Calendar notifications on her phone gives her an alert for each new booking.

## Contact details used on the page

Phone and WhatsApp: 599-416-7333
Email: galemarieblades@gmail.com
