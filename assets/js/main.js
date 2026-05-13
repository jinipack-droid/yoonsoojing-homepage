(() => {
  const topButton = document.querySelector(".top-floating");
  const header = document.querySelector(".site-header");
  const links = document.querySelectorAll('a[href^="#"]');
  const eventTrack = document.querySelector(".event-layout");
  const eventPrev = document.querySelector(".event-nav.prev");
  const eventNext = document.querySelector(".event-nav.next");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 2;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (eventTrack && eventPrev && eventNext) {
    const scrollEventCards = (direction) => {
      const card = eventTrack.querySelector(".event-card");
      const gap = Number.parseFloat(getComputedStyle(eventTrack).gap) || 0;
      const amount = card ? card.getBoundingClientRect().width + gap : eventTrack.clientWidth;

      eventTrack.scrollBy({
        left: direction * amount,
        behavior: "smooth",
      });
    };

    eventPrev.addEventListener("click", () => scrollEventCards(-1));
    eventNext.addEventListener("click", () => scrollEventCards(1));
  }
})();
