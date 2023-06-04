function highlight(table) {
    //console.log(table.tBodies.tbody);
  const tableRows = Array.from(table.rows);
  tableRows.forEach((tr) => {
    const ageCell = tr.cells[1];
    const genderCell = tr.cells[2];
    const statusCell = tr.cells[3];

    //дата-атрибут available
    if (!statusCell.hasAttribute("data-available")) {
      tr.hidden = true;
    } else {
      if (statusCell.dataset.available === 'true') {
        tr.classList.add("available");
      } else {
        tr.classList.add("unavailable");
      }
    }

    if (genderCell.innerHTML === "m") {
      tr.classList.add("male");
    } else {
      tr.classList.add("female");
    }

    if (ageCell.innerHTML < 18) {
      tr.style.textDecoration = "line-through";
    }
    return;
  });
}
