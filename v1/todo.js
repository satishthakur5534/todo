// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  if(!title || !description) {
    alert("All fields are required. please enter title and description");
    return;
  }
  var table = document.getElementsByTagName('table');
  let table_body = document.getElementById("table-body");

  let total_elements = table_body.querySelectorAll("tr").length + 1;

    let tblrw = document.createElement('tr');
      let tbltd_sno = document.createElement('td');
      let tbltd_title = document.createElement('td');
      let tbltd_des = document.createElement('td');
      let t = document.createTextNode(title);
      let d = document.createTextNode(description);
      let sno = document.createTextNode(total_elements);

      tbltd_title.appendChild(t);
      tbltd_des.appendChild(d);
      tbltd_sno.appendChild(sno)

      tblrw.appendChild(tbltd_sno);
      tblrw.appendChild(tbltd_title);
      tblrw.appendChild(tbltd_des);

      table_body.appendChild(tblrw);

   
}

function clearAll() {
  let table_body = document.getElementById("table-body").querySelectorAll('tr').forEach((row) => {
    row.remove();
  });   
}
// add =document.getElementById("id");
// addEventListener("click",()=>{
//   console.log("updating")
// })