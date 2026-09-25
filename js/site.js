(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const header = document.querySelector('header.site');
  menuBtn.addEventListener('click', () => {
    const open = header.classList.toggle('mobile-open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && header.classList.contains('mobile-open')) menuBtn.click(); });

  // Fade sections in as they scroll into view
  if(!reduce && 'IntersectionObserver' in window){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.remove('pre'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => {
      if(el.getBoundingClientRect().top > window.innerHeight){ el.classList.add('pre'); io.observe(el); }
    });
  }

  // Booking links. Paste Ann-Marie's Google Calendar booking page link(s) here.
  // `all` is used for every service; fill a service's own entry only if she
  // made a separate booking page for it. Empty entries fall back to WhatsApp
  // with the service name already typed in, so booking never breaks.
  const BOOKING = {
    all: 'https://calendar.app.google/oqEQfSbHMJtqGyjh7',
    consultation: '', individual: '', couples: '',
    professional: '', groups: '', palliative: ''
  };
  document.querySelectorAll('[data-book]').forEach(a => {
    const url = BOOKING[a.dataset.book] || BOOKING.all;
    a.href = url || 'https://wa.me/5994167333?text=' + encodeURIComponent(
      "Hello Ann-Marie, I'd like to book " + a.dataset.service + '. My preferred days and times are: ');
  });

  // Ann-Marie works on Trinidad and Tobago time. Show the current time there,
  // and the visitor's own time when it differs.
  const TZ = 'America/Port_of_Spain';
  const tzEls = document.querySelectorAll('[data-tz-now]');
  if(tzEls.length){
    const fmt = (zone) => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: zone }).format(new Date());
    const render = () => {
      const there = fmt(TZ), here = fmt(undefined);
      const text = there === here
        ? `It's ${there} in Trinidad right now, the same as your time.`
        : `It's ${there} in Trinidad right now (${here} where you are).`;
      tzEls.forEach(el => { el.textContent = text; });
    };
    render();
    setInterval(render, 30000);
  }
})();
