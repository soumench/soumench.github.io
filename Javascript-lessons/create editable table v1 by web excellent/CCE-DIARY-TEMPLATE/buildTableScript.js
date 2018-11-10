// This function simply builds table - all the tags HTML needs
const buildTable = (table) => '<table><tbody>' + table.map(row => '<tr>' + row.map(cell => '<td>'+cell+'</td>').join('') + '</tr>').join('') + '</tbody></table>';

// This function uses previous one to build a table and add it to DOM
const buildRegularTable = (tableData) => {
  const container = document.createElement('div');
  container.className = 'theTable'
  container.innerHTML = buildTable (tableData);
  document.body.appendChild(container);
  return container;
}

// This function is for building an advanced table - the one you can somewhat edit.
const buildAddableTable = (tableData, tableHeader) => {

  const container = document.createElement('div');

  document.body.appendChild(container);

  const renderTable = () => {


    let adding = false;
    container.className = 'theTable'
    container.innerHTML = buildTable (tableData);
    const table = container.querySelector('table');


    [].forEach.call(container.querySelectorAll('table tr'), (row, index) => {
      var delCell = document.createElement('td');
      delCell.innerHTML = '<span class="delete">x</span>';
      delCell.className = 'buttons';
      delCell.addEventListener('click', () => {
        if(window.confirm('Are you sure you want to delete this row?')){
          tableData.splice(index,1);
          renderTable();
        }
      })
      row.appendChild(delCell);
    });

    const addCellButton = document.createElement('button');
    addCellButton.innerHTML = 'Add';
    addCellButton.addEventListener('click', function(){
      addCellButton.style.display = 'none';
      const row = document.createElement('tr');
      row.className = 'inputs'
      for(let i =0; i<tableData[0].length; i++){ 
        row.innerHTML += '<td><input size="1" type="text" placeholder="empty"/></td>';
      }
      row.innerHTML += '<td class="buttons"><span class="done">&#10004;</span></td>'
      row.querySelector('.done').addEventListener('click', ()=>{
        const rowData = [];
        [].forEach.call(row.querySelectorAll('input'), (input)=>{
          rowData.push(input.value);
        })
        tableData.push(rowData);
        renderTable();
      })
      table.appendChild(row);
    });


    if(tableHeader){
      const headerRow = document.createElement('tr');
      headerRow.className = 'header';
      tableData[0].forEach((a,i)=>{
        headerRow.innerHTML +='<td>'+tableHeader[i]+'</td>';
      })
      headerRow.innerHTML += '<td class="buttons"></td>';
      table.insertBefore(headerRow, table.childNodes[0])
    }

    container.appendChild(addCellButton);
  }

  renderTable(container, tableData);
}

const people = [
  ['22', 'Soumen', 'Reading', 'Writing', 'talkative' ],
  ['40',  'Billy', 'writing', 'speaking', 'violent'  ],
  ['26', 'Mea', 'Great Britain', 'present', 'health']
];

const header = [ 'Roll', 'Name', 'Proficiency', 'Need <br>Improvement', 'Remarks']

//buildRegularTable(people);

buildAddableTable(people, header);