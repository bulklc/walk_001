function top_nav(element) {
  var return_content =
    `<nav class="navbar navbar-expand-lg navbar-dark">\
       <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
         <span class="navbar-toggler-icon"></span>\
       </button>\
       <div class="collapse navbar-collapse" id="main_nav" >\
         <ul class="navbar-nav">\
           <li class="nav-item ${element === "map" ? "active" : ""}">\
             <a class="nav-link" href="index.html">Map</a>\
           </li>\
           <li class="nav-item ${element === "table" ? "active" : ""}">\
             <a class="nav-link" href="table.html">Table</a>\
           </li>\
         </ul>\
       </div>\
    </nav>`;
  // var return_content = `<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">\
  //        <div class="navbar-collapse" id="navbarCollapse">\
  //          <ul class="navbar-nav mr-auto">\
  //            <li class="nav-item ${element === "map" ? "active" : ""}">\
  //              <a class="nav-link" href="index.html">Map</a>\
  //            </li>\
  //            <li class="nav-item ${element === "table" ? "active" : ""}">\
  //              <a class="nav-link" href="table.html">Table</a>\
  //            </li>\
  //          </ul>\
  //        </div>\
  //      </nav>`;

  return return_content;
}
