function popup_segments(feature, layer) {
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

  var start_coordinates = [
    feature.geometry.coordinates[0][0][1],
    feature.geometry.coordinates[0][0][0],
  ];

  var end_coordinates = [
    feature.geometry.coordinates[0][
      feature.geometry.coordinates[0].length - 1
    ][1],
    feature.geometry.coordinates[0][
      feature.geometry.coordinates[0].length - 1
    ][0],
  ];

  var content = `<table>
        <tr><td><b>Segment:</b></td><td>${feature.properties.id}</td></tr>
        <tr><td><b>Start:</b></td><td>${
          segments.features.indexOf(feature) === 0
            ? "San Francisco"
            : segments.features[segments.features.indexOf(feature) - 1]
                .properties.destination.city
        }</td></tr>
        <tr><td><b>Stop:</b></td><td>${
          feature.properties.destination.city
        }</td></tr>
        <tr><td><b>Distance:</b></td><td>${
          feature.properties.distance
        } mi</td></tr>
        <tr><td><b>gmaps:</b></td>
            <td>
            <a href="https://www.google.com/maps/dir/?api=1&origin=${start_coordinates}&destination=${end_coordinates}&travelmode=walking" target="_blank" rel="noopener noreferrer">Link</a>
            </td>
            </tr>
    </table>`;
  // layer.on("popupopen", function (e) {
  //   addClassToPopupIfMedia(content, e.popup);
  // });
  layer.bindPopup(content, { maxHeight: 400 });
}
