# Rapha's Counseling Center

A rebuilt website for Rapha's Counseling Center — online counseling with Ann-Marie Blaise, M.Sc. Counselling Psychology.

Original site: https://www.raphascounseling.com

## What this is

A static site with one HTML file per page and no build step. Vercel serves it as-is.

```
*.html            one file per page (index, about, services, testimonials, book, privacy, accessibility, terms, refund)
css/site.css      all styles, shared by every page
js/site.js        menu, animations and page features
img/              photography in WebP, plus the logo
og.jpg            the preview image shown when a link is shared
favicon.*, icon-*.png, apple-touch-icon.png, site.webmanifest   browser and phone icons
sitemap.xml, robots.txt   for search engines
vercel.json       clean URLs, redirects, caching and security headers
```

The header and footer are repeated in every page file. When you change a phone number, email or menu item, use search-and-replace across all the `.html` files.

Pages load Vercel Web Analytics from `/_vercel/insights/script.js`. It only works once the site is deployed on Vercel with Analytics turned on.

## Where to change things

- **Booking link:** `BOOKING` near the top of `js/site.js`.
- **Time zone note:** the `TZ` value in `js/site.js` (currently Trinidad and Tobago).
- **Page titles and search descriptions:** the `<title>` and `<meta name="description">` near the top of each page file.
- **Photos:** add new images to `img/` as `.webp` with a new file name. Images are cached for a week, so reusing an old name can show the old photo for a while.

## Run it locally

Links use clean paths like `/about`, so preview through a small server rather than opening the file directly:

```
npx serve .
```

Then open http://localhost:3000.

## Deploy on Vercel

There is no build step, so Vercel serves the repository as-is.

1. Go to vercel.com and sign in with GitHub.
2. Choose **Add New → Project**, then import `Caden284/Raphascounseling`.
3. Leave every build setting on its default. Framework preset is **Other**, and the build command and output directory stay empty.
4. Click **Deploy**.

Every later push to `main` redeploys automatically. Pull requests get their own preview URL.

The live domain is `raphascounseling.com`. To change it, open the project's **Settings → Domains**, add `raphascounseling.com`, and follow the DNS records Vercel shows you.

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

Paste the link into the `BOOKING` block in `js/site.js`:

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
