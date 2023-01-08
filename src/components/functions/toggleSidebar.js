export default function toggleSidebar() {
  const list = document.querySelector(".cart-items");
  const closeBtn = document.querySelector(".close-btn");

  list.classList.contains("visible")
    ? list.classList.remove("visible")
    : list.classList.add("visible");
}
