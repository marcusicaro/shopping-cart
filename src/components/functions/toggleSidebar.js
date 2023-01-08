export default function toggleSidebar() {
  const list = document.querySelector(".cart-items");

  list.classList.contains("visible")
    ? list.classList.remove("visible")
    : list.classList.add("visible");
}
