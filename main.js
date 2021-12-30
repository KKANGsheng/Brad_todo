let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup',filterItem);

function addItem(e){
    // prevent to submit the form
    e.preventDefault();

    //Get input value
    let newItem=document.getElementById('item').value;

    // create new li element
    let li=document.createElement('li');

    // Add class
    li.className='list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);

    // create del button element
    let deleteBtn=document.createElement("button");

    // all class to delete button
    deleteBtn.className="btn btn-danger btn-sm float-right delete";

    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    // append to the li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    // if contain delete button
   if(e.target.classList.contains('del')){
       if(confirm('Are You sure?')){
        //   create variable
        let li=e.target.parentElement;
        //    itemlist is ul li is single item
        itemList.removeChild(li);
       }
   }
}

function filterItem(e){
    // convert text to lowercase
    let text=e.target.value.toLowerCase();
    // grab all itemlist
    let items=itemList.getElementsByTagName('li');

    // convert collections to arrays
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        // if it is match
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    }
    )}
