// Turn Order: Sortable
$( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );

//   Turn Order: Clear Input
const delButton = document.querySelectorAll("#delInput");

delBtn.addEventListener("click",event=>{
event.preventDefault();
let clear = document.getElementByName('turnorder');
console.log(clear)
clear.value = '';
})