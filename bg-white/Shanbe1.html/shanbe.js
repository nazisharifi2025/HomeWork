// const observer = new IntersectionObserver(
//   (entres) => {
//     entres.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate-fade-up-show");
//       } else {
//         entry.target.classList.remove("animate-fade-up-show");
//       }
//     });
//   },
//   {
//     threshold: 0.3,
//   }
// );
document
  .querySelectorAll(".scroll-animate")
  .forEach((el) => observer.observe(el));
