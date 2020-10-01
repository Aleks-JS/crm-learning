const state = {};

// Вешаем событие "update", по которому обрабатываем его функцией update
Database.addEventListener("update", update);

// Вызываем функцию при загрузке приложения
update();

// При вызове функции update вызываем updateLastReviewedList, которая обновляет список просматриваемых заказов
function update() {
  updateLastReviewedList();
}
