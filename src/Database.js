(function () {
  "use strict";

  // База данных

  const database = {
    lastReviewed: {
      maxLength: 4,
      orderIds: [12, 25, 589, 69],
    },

    orders: [
      {
        id: 1,
        fullName: "Бидзин Маш",
        good: "Плоттер",
        price: 15000,
        status: "process",
        date: 1598455328499,
      },
      {
        id: 2,
        fullName: "Селебрэйшн Зымацкая",
        good: "Бумага для принтера",
        price: 500,
        status: "back",
        date: 1599037940093,
      },
      {
        id: 3,
        fullName: "Саидазим Жиньцов",
        good: "Монитор",
        price: 18000,
        status: "new",
        date: 1599664167790,
      },
    ],
  };

  const api = {};

  // Метод перезаписи данных из базы данных для предотвращения мутации
  api.seed = function seed(orders) {
    database.orders = getCopy(orders);
  };

  // Метод получения данных из Database по id
  api.getOrderById = function getOrderById(id) {
    const order = database.orders.find((x) => x.id === id);

    if (order) {
      return getCopy(order);
    }
    return null;
  };

  // Метод получения данных из lastReviewed по id
  api.getLastReviewed = function () {
    return database.lastReviewed.orderIds.map((x) => api.getOrderById(x));
  };

  // Метод добавления последних просматриваемых заказов
  api.addLastReviewed = function addLastReviewed(orderId) {
    // Перезаписываем в database.lastReviewed orderIds, добавляя первый элемент из входящего аргумента и обрезаем массив по значению maxLength
    database.lastReviewed.orderIds = [
      orderId,
      ...database.lastReviewed.orderIds,
    ].slice(0, database.lastReviewed.maxLength);
  };

  window.Database = api;

  // Функция для предотвращения изменения получаемых данных
  // Получаем точную копию объекта
  function getCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }
})();
