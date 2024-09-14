/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error('Не передан элемент');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */

  registerEvents() {

    document.querySelector('.create-income-button').addEventListener('click', (e) => {
      e.preventDefault();

      let hasAccount = false; //проверка есть ли счета (чтобы окна создания дохода/расхода не открывались при отсутствии счетов у пользователя)
      Account.list(User.current(), (err, response) => {
        if (err) {
          console.log('ошибка отправки запроса серверу на список счетов: ' + err);
        } else
          if (response && response.success) {
            if (response.data.length) {
              hasAccount = true;
            }
          }
        if (hasAccount) {
          App.getModal('newIncome').open();
        }
      });

    });



    document.querySelector('.create-expense-button').addEventListener('click', (e) => {
      e.preventDefault();

      let hasAccount = false;//проверка есть ли счета (чтобы окна создания дохода/расхода не открывались при отсутствии счетов у пользователя)
      Account.list(User.current(), (err, response) => {
        if (err) {
          console.log('ошибка отправки запроса серверу на список счетов: ' + err);
        } else
          if (response && response.success) {
            if (response.data.length) {
              hasAccount = true;
            }
          }
        if (hasAccount) {
          App.getModal('newIncome').open();
        }
      });

    });
  }
}
