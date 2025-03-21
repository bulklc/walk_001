function style_segments(segment) {
  var distance_min = Infinity;
  var distance_max = 0;

  segments.features.forEach((segment) => {
    if (segment.properties.distance > distance_max) {
      distance_max = segment.properties.distance;
    }

    if (segment.properties.distance < distance_min) {
      distance_min = segment.properties.distance;
    }
  });

  // switch (segment.properties.restricted) {
  //   case false:
  return {
    pane: "pane_segments",
    opacity: 1,
    color: getGradientColor(
      "#91BF9D",
      "#C23A22",
      (segment.properties.distance - distance_min) /
        (distance_max - distance_min)
    ),
    dashArray: segment.properties.restricted ? "10, 15" : "-",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 8,
    //weight: segment.properties.restricted ? 5 : 10,
    fillOpacity: 0,
    interactive: true,
  };

  //case true:
  // return {
  //   pane: "pane_segments",
  //   opacity: 1,
  //   color: getGradientColor(
  //     "#F8858B",
  //     "#C23A22",
  //     (segment.properties.distance - restricted_distance_min) /
  //       (restricted_distance_max - restricted_distance_min)
  //   ),
  //   dashArray: "",
  //   lineCap: "square",
  //   lineJoin: "bevel",
  //   weight: 16.0,
  //   fillOpacity: 0,
  //   interactive: true,
  // };
  //}
}

// function style_segments(segment) {
//   var unrestricted_distance_min = Infinity;
//   var unrestricted_distance_max = 0;

//   var restricted_distance_min = Infinity;
//   var restricted_distance_max = 0;

//   segments.features.forEach((segment) => {
//     if (segment.properties.restricted) {
//       if (segment.properties.distance > restricted_distance_max) {
//         restricted_distance_max = segment.properties.distance;
//       }

//       if (segment.properties.distance < restricted_distance_min) {
//         restricted_distance_min = segment.properties.distance;
//       }
//     } else {
//       if (segment.properties.distance > unrestricted_distance_max) {
//         unrestricted_distance_max = segment.properties.distance;
//       }

//       if (segment.properties.distance < unrestricted_distance_min) {
//         unrestricted_distance_min = segment.properties.distance;
//       }
//     }
//   });

//   switch (segment.properties.restricted) {
//     case false:
//       return {
//         pane: "pane_segments",
//         opacity: 1,
//         color: getGradientColor(
//           "#91BF9D",
//           "#FFF8B8",
//           (segment.properties.distance - unrestricted_distance_min) /
//             (unrestricted_distance_max - unrestricted_distance_min)
//         ),
//         dashArray: "",
//         lineCap: "square",
//         lineJoin: "bevel",
//         weight: 8.0,
//         fillOpacity: 0,
//         interactive: true,
//       };

//     case true:
//       return {
//         pane: "pane_segments",
//         opacity: 1,
//         color: getGradientColor(
//           "#F8858B",
//           "#C23A22",
//           (segment.properties.distance - restricted_distance_min) /
//             (restricted_distance_max - restricted_distance_min)
//         ),
//         dashArray: "",
//         lineCap: "square",
//         lineJoin: "bevel",
//         weight: 16.0,
//         fillOpacity: 0,
//         interactive: true,
//       };
//   }
// }
