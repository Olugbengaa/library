// Creating the selected variables

 let color1 = document.querySelector('#p-color');
 let color2 = document.querySelector('#s-color');
 let body = document.getElementById('html');
 let input = document.querySelector('#books');
 let button = document.querySelector('.add-book');
 let list = document.querySelector('.list');
 let clear = document.querySelector('.clear-books')
 let search = document.querySelector('#search')
 

 function changeColor1 () {
   body.style.background =  "linear-gradient(to right,"
    + color1.value 
    + "," 
    + color2.value 
    + ")";
 }
 function changeColor2 () {
   body.style.background =  "linear-gradient(to right,"
    + color1.value 
    + "," 
    + color2.value 
    + ")";
 }

  function createBookList (e){

    if (input.value.length === 0) { alert('Please, add a  book')}
    else {
 
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      let link = document.createElement('a');
      link.className = 'link';
      link.innerHTML = '<i class = fa fa-delete><i/>'
      li.appendChild(link);
      list.appendChild(li);
      input.value =''
      e.preventDefault()
    }
  }
  
  function enterButton (event){
    if (input.value.length > 0 && event.which === 13) {

      let li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      let link = document.createElement('a');
      link.className = 'link';
      link.innerHTML = '<i class = fa fa-remove><i/>'
      li.appendChild(link);
      list.appendChild(li);
      input.value =''
      event.preventDefault() 
    }
  } 
 
  function removeBook (e){
    if(e.target.parentElement.parentElement.classList.contains ('list'))    
   { e.target.parentElement.remove();}  
  }
  function clearBook (){
      while(list.firstChild) {
        list.removeChild(list.firstChild)
      }
  }

  function searchBooks (e){
      let text = e.target.value.toLowerCase();
      let books = document.querySelectorAll('.list li');
         books.forEach(function(list){
              if(list.firstChild.textContent.toLowerCase().indexOf(text) != -1){
                list.style.display ='block'
              }
              else {list.style.display = 'none'}
         })
  }

  search.addEventListener('keyup', searchBooks )
  clear.addEventListener('click', clearBook)
  input.addEventListener('keypress', enterButton) 
  button.addEventListener('click', createBookList) 
  color1.addEventListener('input', changeColor1)
  color2.addEventListener('input', changeColor2)
  list.addEventListener('click', removeBook)
 