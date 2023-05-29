function makeDiagonalRed(table) {
    const tableCellsLength = Array.from(table.rows).length;
    const tableRowsLength = table.rows.length;
    const squareSize = (tableCellsLength <= tableRowsLength) ? tableCellsLength : tableRowsLength;
    
    for (let i = 0; i < squareSize; i++) {
      table.rows[i].cells[i].style.backgroundColor = 'red';
    } 
}
