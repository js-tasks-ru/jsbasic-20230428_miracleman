/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows = null;
  elem = null; 
  
  constructor(rows) {
    this.#rows = rows; 
    this.elem = this.#render();
  } 
  
  #render() {
    const table = document.createElement("table");
    table.innerHTML = this.#template();
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
      const button = row.querySelector('button');
      if (button) { 
        button.addEventListener('click', () => {
          row.remove();
        }); 
      } 
    });
    return table;
  }
   
  #template() {
    const rowTemplate = this.#rows.map(item => {
      return `
        <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button>X</button></td>
        </tr>
      `;
    }).join();
    return `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
        </tr>
      </thead>
      <tbody>
        ${rowTemplate}
      </tbody>`; 
  }
}
