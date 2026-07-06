import { useEffect } from "react";

/**
 * Observa elementos com a classe `.reveal` e adiciona `.visible` quando entram
 * na viewport, disparando as animações definidas em index.css.
 *
 * @param scrollTop quando true, rola a página para o topo ao montar — usado nas
 * páginas internas para começar sempre no início do conteúdo.
 */
export const useReveal = (scrollTop = false) => {
  useEffect(() => {
    if (scrollTop) window.scrollTo(0, 0);

    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [scrollTop]);
};
