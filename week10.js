document.getElementById('btn').addEventListener('click', () =>{
    let table = document.getElementById('table');
    let inputName = document.getElementById('band-name');
    let inputGenre = document.getElementById('band-genre');
    let inputInfo = document.getElementById('band-info');
    
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
        
    cell1.innerHTML = inputName.value;
    cell2.innerHTML = inputGenre.value;

    table.appendChild(row);
    row.appendChild(cell1);
    row.appendChild(cell2);


    
    inputName.value = ''; 
    inputGenre.value = ''; 
    inputInfo.value = '';    
});