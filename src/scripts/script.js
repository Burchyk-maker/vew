// script.js
// import "bootstrap";

const menuItems = [
  { id: 1, name: "Главная", link: "/" },
  { id: 2, name: "О нас", link: "/about" },
  { id: 3, name: "Услуги", link: "/services" },
  { id: 4, name: "Контакты", link: "/contact" },
];
document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("menuList");

  // Используем цикл для создания элементов меню
  menuItems.forEach((item) => {
    // Создаем элементы
    const li = document.createElement("li");
    li.className = "menu-item";

    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;

    // Собираем структуру
    li.appendChild(a);
    menuList.appendChild(li);
  });
});
