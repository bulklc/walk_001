var json_segments = {
    "type": "FeatureCollection",
    "name": "segments",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
    
// ########## 
    
            "type": "Feature",
            "properties": {
                "segment_id": 'A',
                "start_node": 1.0,
                "end_node": 2.0,
                "length": 16.7,
                "path_url": 'https://www.google.com/maps/dir/690+Stanyan+St,+San+Francisco,+CA+94117/1250+Old+Bayshore+Hwy,+Burlingame,+CA+94010/@37.6919415,-122.4974617,11.3z/data=!4m14!4m13!1m5!1m1!1s0x8085875185faf593:0x37c3b02dcf8a8d4e!2m2!1d-122.4528278!2d37.769638!1m5!1m1!1s0x808f762eb707ffcf:0x1950356e64552ca1!2m2!1d-122.3620716!2d37.5929043!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.453482333333326, 37.769414833333336],
                        [-122.362069606878293, 37.592928474428959]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'B',
                "start_node": 2.0,
                "end_node": 3.0,
                "length": 11.6,
                "path_url": 'https://www.google.com/maps/dir/1250+Old+Bayshore+Hwy,+Burlingame,+CA+94010/1836+El+Camino+Real,+Redwood+City,+CA+94063/@37.5352766,-122.3762309,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x808f762eb707ffcf:0x1950356e64552ca1!2m2!1d-122.3620716!2d37.5929043!1m5!1m1!1s0x808fa3a618343791:0x3d18f021392c43f5!2m2!1d-122.2243818!2d37.4777061!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.362069606878293, 37.592928474428959],
                        [-122.224443587534168, 37.477690815798809]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'C',
                "start_node": 3.0,
                "end_node": 4.0,
                "length": 13.1,
                "path_url": 'https://www.google.com/maps/dir/1836+El+Camino+Real,+Redwood+City,+CA+94063/35466+Dumbarton+Ct,+Newark,+CA+94560/@37.5079577,-122.2207524,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x808fa3a618343791:0x3d18f021392c43f5!2m2!1d-122.2243818!2d37.4777061!1m5!1m1!1s0x808fbe44ccc43785:0x7a1604b377e02afa!2m2!1d-122.0532483!2d37.5492721!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.224443587534168, 37.477690815798809],
                        [-122.05281875703879, 37.5485763325906]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'D',
                "start_node": 4.0,
                "end_node": 5.0,
                "length": 25.6,
                "path_url": 'https://www.google.com/maps/dir/35466+Dumbarton+Ct,+Newark,+CA+94560/6680+Regional+St,+Dublin,+CA+94568/@37.6528408,-122.177409,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x808fbe44ccc43785:0x7a1604b377e02afa!2m2!1d-122.0532483!2d37.5492721!1m5!1m1!1s0x808fec702c7738d3:0x6b146b7d4e670d07!2m2!1d-121.9332228!2d37.700083!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.05281875703879, 37.5485763325906],
                        [-121.932675, 37.699533]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'E',
                "start_node": 5.0,
                "end_node": 5.01,
                "length": 14.9,
                "path_url": 'https://www.google.com/maps/dir/6680+Regional+St,+Dublin,+CA+94568/7700+Southfront+Rd,+Livermore,+CA+94551/@37.6909666,-121.8995704,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x808fec702c7738d3:0x6b146b7d4e670d07!2m2!1d-121.9332228!2d37.700083!1m5!1m1!1s0x808fe0dc58bfaa99:0x6e28c003903fef45!2m2!1d-121.7005964!2d37.7153154!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-121.932675, 37.699533],
                        [-121.70108582613923, 37.715496316357076]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'F',
                "start_node": 5.01,
                "end_node": 6.0,
                "length": 24.7,
                "path_url": 'https://www.google.com/maps/dir/7700+Southfront+Rd,+Livermore,+CA+94551/3751+N+Tracy+Blvd,+Tracy,+CA+95304/@37.7264565,-121.7433166,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x808fe0dc58bfaa99:0x6e28c003903fef45!2m2!1d-121.7005964!2d37.7153154!1m5!1m1!1s0x809017fd099761b5:0x90b9d857c3129063!2m2!1d-121.436994!2d37.7640946!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-121.70108582613923, 37.715496316357076],
                        [-121.4352249932886, 37.764200456375839]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'G',
                "start_node": 6.0,
                "end_node": 7.0,
                "length": 14.9,
                "path_url": 'https://www.google.com/maps/dir/3751+N+Tracy+Blvd,+Tracy,+CA+95304/179+Commerce+Ave,+Manteca,+CA+95336/@37.7743806,-121.4316896,11.39z/data=!4m14!4m13!1m5!1m1!1s0x809017fd099761b5:0x90b9d857c3129063!2m2!1d-121.436994!2d37.7640946!1m5!1m1!1s0x809041a01018ad49:0x4192b26b52a8c918!2m2!1d-121.1947839!2d37.7959939!3e2?entry=ttu'
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-121.4352249932886, 37.764200456375839],
                        [-121.194717126376716, 37.796047803230394]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'H',
                "start_node": 7.0,
                "end_node": 8.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-121.194717126376716, 37.796047803230394],
                        [-121.073480499295101, 37.70406]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": 'I',
                "start_node": 8.0,
                "end_node": 9.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-121.073480499295101, 37.70406],
                        [-120.883857, 37.522831]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 9.0,
                "end_node": 10.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-120.883857, 37.522831],
                        [-120.452247434050093, 37.2862886]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 10.0,
                "end_node": 11.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-120.452247434050093, 37.2862886],
                        [-120.252515097681467, 37.125619526529881]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 11.0,
                "end_node": 12.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-120.252515097681467, 37.125619526529881],
                        [-120.087378617399878, 36.981142677285632]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 12.0,
                "end_node": 13.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-120.087378617399878, 36.981142677285632],
                        [-119.918790772161927, 36.834235549999988]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 13.0,
                "end_node": 14.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.918790772161927, 36.834235549999988],
                        [-119.7708038367347, 36.705621469387758]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 14.0,
                "end_node": 15.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.7708038367347, 36.705621469387758],
                        [-119.684400546682667, 36.62798605246234]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 15.0,
                "end_node": 16.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.684400546682667, 36.62798605246234],
                        [-119.627546723101759, 36.572721102037875]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 16.0,
                "end_node": 17.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.627546723101759, 36.572721102037875],
                        [-119.56566905912409, 36.520554013681178]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 17.0,
                "end_node": 18.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.56566905912409, 36.520554013681178],
                        [-119.391527739639812, 36.32569495]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 18.0,
                "end_node": 19.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.391527739639812, 36.32569495],
                        [-119.332158190860142, 36.225090397185738]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 19.0,
                "end_node": 20.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.332158190860142, 36.225090397185738],
                        [-119.291491803760294, 35.963945806123263]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 20.0,
                "end_node": 21.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.291491803760294, 35.963945806123263],
                        [-119.249051113126981, 35.787511770799739]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 21.0,
                "end_node": 22.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.249051113126981, 35.787511770799739],
                        [-119.229977491132885, 35.684987611361841]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 22.0,
                "end_node": 23.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.229977491132885, 35.684987611361841],
                        [-119.08187980000001, 35.4429286]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 23.0,
                "end_node": 24.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.08187980000001, 35.4429286],
                        [-119.029675766302802, 35.3150722]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 24.0,
                "end_node": 25.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-119.029675766302802, 35.3150722],
                        [-118.942688181992807, 34.98915105365419]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 25.0,
                "end_node": 26.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.942688181992807, 34.98915105365419],
                        [-118.882021918765801, 34.81902675]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 26.0,
                "end_node": 27.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.882021918765801, 34.81902675],
                        [-118.616815123502263, 34.48971631493076]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 27.0,
                "end_node": 28.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.616815123502263, 34.48971631493076],
                        [-118.580680386370261, 34.419948558208638]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 28.0,
                "end_node": 29.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.580680386370261, 34.419948558208638],
                        [-118.47199711538461, 34.220355499999989]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 29.0,
                "end_node": 30.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.47199711538461, 34.220355499999989],
                        [-118.27398175, 34.058634416666649]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 30.0,
                "end_node": 31.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.27398175, 34.058634416666649],
                        [-118.026056, 33.884063]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 31.0,
                "end_node": 32.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-118.026056, 33.884063],
                        [-117.900719560034474, 33.800664331168576]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 32.0,
                "end_node": 32.01,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-117.900719560034474, 33.800664331168576],
                        [-117.716114572741603, 33.62655785]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 32.01,
                "end_node": 33.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-117.716114572741603, 33.62655785],
                        [-117.619320268122465, 33.43523925]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 33.0,
                "end_node": 34.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-117.619320268122465, 33.43523925],
                        [-117.387372443850211, 33.207652473236998]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 34.0,
                "end_node": 35.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-117.387372443850211, 33.207652473236998],
                        [-117.262002, 32.950561]
                    ]
                ]
            }
        },

// ########## 

       {
            "type": "Feature",
            "properties": {
                "segment_id": '',
                "start_node": 35.0,
                "end_node": 36.0,
                "length": null,
                "path_url": null
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-117.262002, 32.950561],
                        [-117.148215250275967, 32.753025528516474]
                    ]
                ]
            }
        }
    ]
}
