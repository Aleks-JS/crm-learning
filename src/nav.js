function updateLastReviewedList() {
  // Получаем последние просматриваемые заказы
  const orders = Database.getLastReviewed();
  // Получаем блок для отрисовки элемента из списка последних просматриваемых заказов
  const template = document
    .querySelector("[data-reviewed]")
    .content.querySelector("li");
  // Получаем точку монтирования приложения (списка последних просматриваемых заказов)
  const reviewedListElement = document.querySelector("[data-reviewed-list]");

  // Очищаем блок со списком перед формированием нового списка
  reviewedListElement.innerHTML = "";

  // Проход по массиву с данными
  orders.forEach((order) => {
    // Клонируем DOM структуру из template
    const liElem = template.cloneNode(true);

    // Вставляем fullName вместо флага %FULLNAME%
    liElem.innerHTML = liElem.innerHTML.replace(/%FULLNAME%/g, order.fullName);

    // Добавляем элемент в список
    reviewedListElement.append(liElem);
  });
}
