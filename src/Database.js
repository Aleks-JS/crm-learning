(function () {
  "use strict";

  // База данных
  const database = {
    orders: [
      {
        id: 1,
        fullname: "Алексей Данчин",
        good: "Бумага для принтера",
        price: 500,
        status: "new",
        date: Date.now(),
      },
      {
        id: 2,
        fullname: "Алексей Иванов",
        good: "Краски для принтера",
        price: 3000,
        status: "process",
        date: Date.now(),
      },
      {
        id: 3,
        fullname: "Иван Иванов",
        good: "Принтер",
        price: 25000,
        status: "back",
        date: Date.now(),
      },
    ],
  };

  const api = {};

  // Метод получения данных из Database по id
  api.getOrderById = function getOrderById(id) {
    const order = database.orders.find((x) => x.id === id);

    if (order) {
      return getCopy(order);
    }
    return null;
  };

  window.Database = api;

  // Функция для предотвращения изменения получаемых данных
  function getCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }
})();
