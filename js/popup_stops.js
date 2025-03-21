function popup_stops(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (var i in e.target._eventParents) {
        if (typeof e.target._eventParents[i].resetStyle === "function") {
          e.target._eventParents[i].resetStyle(e.target);
        }
      }
    },
    mouseover: highlightFeature,
  });

  var content = "";

  if (feature.properties.type === "stop") {
    content = `<table>
        <tr><td valign="top"><b>Name:</b></td><td valign="top">${
          feature.properties.name
        }</td></tr>
        <tr><td><b>Cost:</b></td><td>$${feature.properties.cost}</td></tr>
        <tr><td><b>gmaps:</b></td>
            <td>
            <a href="https://www.google.com/maps/place/${feature.properties.address.replace(
              / /g,
              "+"
            )}/" target="_blank" rel="noopener noreferrer">Link</a>
            </td>
        </tr>
    </table>`;
  } else {
    content = `<table>
        <tr><td valign="top"><b>${
          feature.properties.type.charAt(0).toUpperCase() +
          feature.properties.type.slice(1)
        }:</b></td><td valign="top">${feature.properties.name}</td></tr>
    </table>`;
  }

  layer.bindPopup(content, { maxHeight: 400 });
}
