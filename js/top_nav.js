function top_nav(element) {
  var return_content = `<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">\
         <div class="navbar-collapse" id="navbarCollapse">\
           <ul class="navbar-nav mr-auto">\
             <li class="nav-item ${element === "map" ? "active" : ""}">\
               <a class="nav-link" href="index.html">Map</a>\
             </li>\
             <li class="nav-item ${element === "table" ? "active" : ""}">\
               <a class="nav-link" href="table.html">Table</a>\
             </li>\
           </ul>\
         </div>\
       </nav>`;

  return return_content;
}
