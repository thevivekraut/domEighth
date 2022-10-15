var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItems);

function addItem(e){
 e.preventDefault();

 var newItem = document.getElementById('item').value;
 
 var li = document.createElement('li');

 li.className = 'list-group-item';
 console.log(li);

 li.appendChild(document.createTextNode(newItem));

 var deletebtn = document.createElement('button');
 deletebtn.className ='btn btn-danger btn-sm float-right delete';
 deletebtn.appendChild(document.createTextNode('x'));
 li.appendChild(deletebtn);
 itemList.appendChild(li);
 
var editbtn = document.createElement('button');
editbtn.appendChild(document.createTextNode('Edit'));
deletebtn.appendChild(editbtn);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
     if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li); 
     }
    }
}

function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  console.log(items);
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
       item.style.display = 'block';
    }
    else{
        item.style.display = 'none';
    }
    console.log(itemName);
  })
}