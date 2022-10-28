// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jlc2NlbmRvY2h1IiwiYSI6ImNreHcxZGQ4bjRiZ2czMXF3NGZlanUwOHUifQ.1iEERJ4M83PNKmIJ8pH1Qg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-87.62399291992188, 41.64448547363281],
        zoom: 16
    });
    
    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {
              "type": "FeatureCollection",
              "features": [
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 851,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448547363281,
                          "lng": -87.62399291992188,
                          "gsv_panorama_id": "sck8D0TGly6iRXiSVoFIng",
                          "time_created": "2022-05-24 10:47:36.354-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_851.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62399291992188,
                              41.64448547363281
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 853,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "NoSidewalk",
                          "lat": 41.64443206787109,
                          "lng": -87.62396240234375,
                          "gsv_panorama_id": "sGOC_qNLg4cvbj-hYYl3eQ",
                          "time_created": "2022-05-24 10:48:56.3-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "ends abruptly,street has a sidewalk",
                          "description": null,
                          "img_url": "with_icons/label_id_853.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62396240234375,
                              41.64443206787109
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 854,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64450454711914,
                          "lng": -87.62389373779297,
                          "gsv_panorama_id": "sGOC_qNLg4cvbj-hYYl3eQ",
                          "time_created": "2022-05-24 10:49:46.405-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_854.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62389373779297,
                              41.64450454711914
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 855,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64452362060547,
                          "lng": -87.62386322021484,
                          "gsv_panorama_id": "8VDo62za7-leD3pIVFXCNg",
                          "time_created": "2022-05-24 10:50:17.412-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "surface problem",
                          "description": null,
                          "img_url": "with_icons/label_id_855.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62386322021484,
                              41.64452362060547
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 856,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62370300292969,
                          "gsv_panorama_id": "B862NDSHQnu4Ctqwd_0ZXA",
                          "time_created": "2022-05-24 10:50:47.822-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_856.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62370300292969,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 857,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.6446647644043,
                          "lng": -87.6236801147461,
                          "gsv_panorama_id": "zGHeYA-Kwc9RBFoFuDoHGQ",
                          "time_created": "2022-05-24 10:51:07.099-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": null,
                          "description": "could maybe be a bit wider? Not sure it requires a narrow tag though",
                          "img_url": "with_icons/label_id_857.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6236801147461,
                              41.6446647644043
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 858,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.644657135009766,
                          "lng": -87.62352752685547,
                          "gsv_panorama_id": "zGHeYA-Kwc9RBFoFuDoHGQ",
                          "time_created": "2022-05-24 10:52:13.682-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_858.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62352752685547,
                              41.644657135009766
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 859,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64448928833008,
                          "lng": -87.62371063232422,
                          "gsv_panorama_id": "Pk95h5VcMt0jt_SdsipbGw",
                          "time_created": "2022-05-24 10:52:28.861-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "surface problem",
                          "description": null,
                          "img_url": "with_icons/label_id_859.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62371063232422,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 860,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448165893555,
                          "lng": -87.62362670898438,
                          "gsv_panorama_id": "tfSoVje5HCzhT0in7s7o-A",
                          "time_created": "2022-05-24 10:52:40.533-07",
                          "correct": "t",
                          "severity": 4,
                          "temporary": "f",
                          "tag_list": "cracks,grass",
                          "description": null,
                          "img_url": "with_icons/label_id_860.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62362670898438,
                              41.64448165893555
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 861,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62349700927734,
                          "gsv_panorama_id": "JYZ4mRngje7VXwQOQcl7mg",
                          "time_created": "2022-05-24 10:52:56.255-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_861.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62349700927734,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 863,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62348175048828,
                          "gsv_panorama_id": "JYZ4mRngje7VXwQOQcl7mg",
                          "time_created": "2022-05-24 10:53:11.577-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_863.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62348175048828,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 864,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64447784423828,
                          "lng": -87.62344360351562,
                          "gsv_panorama_id": "JYZ4mRngje7VXwQOQcl7mg",
                          "time_created": "2022-05-24 10:53:38.263-07",
                          "correct": "t",
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "sand/gravel,height difference",
                          "description": null,
                          "img_url": "with_icons/label_id_864.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62344360351562,
                              41.64447784423828
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 865,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62335968017578,
                          "gsv_panorama_id": "g83xtXgK5mAgs5R4EnRHSw",
                          "time_created": "2022-05-24 10:54:29.915-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_865.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62335968017578,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 866,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64449691772461,
                          "lng": -87.62337493896484,
                          "gsv_panorama_id": "JLCuNFMf50adPoGqUKfS8g",
                          "time_created": "2022-05-24 10:54:51.606-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "surface problem",
                          "description": null,
                          "img_url": "with_icons/label_id_866.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62337493896484,
                              41.64449691772461
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 867,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64450073242188,
                          "lng": -87.62323760986328,
                          "gsv_panorama_id": "JLCuNFMf50adPoGqUKfS8g",
                          "time_created": "2022-05-24 10:55:09.757-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_867.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62323760986328,
                              41.64450073242188
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 868,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62337493896484,
                          "gsv_panorama_id": "PcRCG64SQQD84goYZ2EAKQ",
                          "time_created": "2022-05-24 10:55:33.597-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_868.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62337493896484,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 869,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62332916259766,
                          "gsv_panorama_id": "PcRCG64SQQD84goYZ2EAKQ",
                          "time_created": "2022-05-24 10:55:42.109-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_869.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62332916259766,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 870,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62326049804688,
                          "gsv_panorama_id": "PcRCG64SQQD84goYZ2EAKQ",
                          "time_created": "2022-05-24 10:55:48.576-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_870.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62326049804688,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 871,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62311553955078,
                          "gsv_panorama_id": "reJmA7cid9Hwj9ULNnd_jg",
                          "time_created": "2022-05-24 10:56:08.699-07",
                          "correct": "t",
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "height difference,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_871.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62311553955078,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 872,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "Obstacle",
                          "lat": 41.64469909667969,
                          "lng": -87.62303161621094,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-05-24 10:56:49.083-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "narrow,vegetation",
                          "description": null,
                          "img_url": "with_icons/label_id_872.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62303161621094,
                              41.64469909667969
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 873,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62300872802734,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-05-24 10:57:02.632-07",
                          "correct": "t",
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "very broken,narrow sidewalk,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_873.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62300872802734,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 874,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62297058105469,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-05-24 10:57:20.505-07",
                          "correct": "t",
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "grass,very broken,narrow sidewalk,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_874.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62297058105469,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 876,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448547363281,
                          "lng": -87.62301635742188,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-05-24 10:58:13.151-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_876.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62301635742188,
                              41.64448547363281
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 877,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.6228256225586,
                          "gsv_panorama_id": "XJUVN-stVWf4MotZwF0myA",
                          "time_created": "2022-05-24 10:58:33.514-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "height difference,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_877.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6228256225586,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 878,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448547363281,
                          "lng": -87.62246704101562,
                          "gsv_panorama_id": "vO3k2H3h94RjAcURGHiHsw",
                          "time_created": "2022-05-24 10:59:44.021-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_878.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62246704101562,
                              41.64448547363281
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 880,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "Obstacle",
                          "lat": 41.64470291137695,
                          "lng": -87.62237548828125,
                          "gsv_panorama_id": "vO3k2H3h94RjAcURGHiHsw",
                          "time_created": "2022-05-24 10:59:59.811-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "vegetation,narrow",
                          "description": null,
                          "img_url": "with_icons/label_id_880.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62237548828125,
                              41.64470291137695
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 881,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62232971191406,
                          "gsv_panorama_id": "kUX13UMncQQK8cZqSvbIaA",
                          "time_created": "2022-05-24 11:00:17.904-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "cracks,height difference",
                          "description": null,
                          "img_url": "with_icons/label_id_881.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62232971191406,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 882,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62226104736328,
                          "gsv_panorama_id": "kUX13UMncQQK8cZqSvbIaA",
                          "time_created": "2022-05-24 11:00:26.949-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_882.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62226104736328,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 883,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62220001220703,
                          "gsv_panorama_id": "574zPNOlTHFha04gYEBgnA",
                          "time_created": "2022-05-24 11:00:50.924-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_883.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62220001220703,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 884,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.6445198059082,
                          "lng": -87.62203979492188,
                          "gsv_panorama_id": "7P-5Ql3A2n6o0ExZhS15gg",
                          "time_created": "2022-05-24 11:01:06.615-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "surface problem",
                          "description": null,
                          "img_url": "with_icons/label_id_884.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62203979492188,
                              41.6445198059082
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 885,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64450073242188,
                          "lng": -87.62217712402344,
                          "gsv_panorama_id": "7P-5Ql3A2n6o0ExZhS15gg",
                          "time_created": "2022-05-24 11:01:17.316-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_885.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62217712402344,
                              41.64450073242188
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 886,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62202453613281,
                          "gsv_panorama_id": "HXFQYSvoxHUnlk8VaUfESQ",
                          "time_created": "2022-05-24 11:01:57.726-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_886.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62202453613281,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 887,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "Occlusion",
                          "lat": 41.64446258544922,
                          "lng": -87.62188720703125,
                          "gsv_panorama_id": "l-K3h6IPo4XUjf1mGy0nxQ",
                          "time_created": "2022-05-24 11:02:22.577-07",
                          "correct": null,
                          "severity": null,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_887.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62188720703125,
                              41.64446258544922
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 888,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448928833008,
                          "lng": -87.62187957763672,
                          "gsv_panorama_id": "HXFQYSvoxHUnlk8VaUfESQ",
                          "time_created": "2022-05-24 11:02:34.585-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_888.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62187957763672,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 889,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644493103027344,
                          "lng": -87.62185668945312,
                          "gsv_panorama_id": "9H8OAfvv5iS3UZBqGZ97RQ",
                          "time_created": "2022-05-24 11:02:43.787-07",
                          "correct": "t",
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_889.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62185668945312,
                              41.644493103027344
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "Devon Snyder",
                          "label_id": 890,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64463424682617,
                          "lng": -87.62179565429688,
                          "gsv_panorama_id": "inDdl8tcuankYFQkSoBSRw",
                          "time_created": "2022-05-24 11:03:00.563-07",
                          "correct": "t",
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_890.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62179565429688,
                              41.64463424682617
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1478,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64450073242188,
                          "lng": -87.62387084960938,
                          "gsv_panorama_id": "8VDo62za7-leD3pIVFXCNg",
                          "time_created": "2022-06-07 12:01:22.145-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1478.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62387084960938,
                              41.64450073242188
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1478,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64450073242188,
                          "lng": -87.62387084960938,
                          "gsv_panorama_id": "8VDo62za7-leD3pIVFXCNg",
                          "time_created": "2022-06-07 12:01:22.145-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1478.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62387084960938,
                              41.64450073242188
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1479,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64450073242188,
                          "lng": -87.62371063232422,
                          "gsv_panorama_id": "Pk95h5VcMt0jt_SdsipbGw",
                          "time_created": "2022-06-07 12:01:36.923-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1479.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62371063232422,
                              41.64450073242188
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1480,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448928833008,
                          "lng": -87.62361145019531,
                          "gsv_panorama_id": "Pk95h5VcMt0jt_SdsipbGw",
                          "time_created": "2022-06-07 12:03:22.086-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_1480.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62361145019531,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1481,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62369537353516,
                          "gsv_panorama_id": "Pk95h5VcMt0jt_SdsipbGw",
                          "time_created": "2022-06-07 12:04:06.618-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1481.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62369537353516,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1482,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468765258789,
                          "lng": -87.62379455566406,
                          "gsv_panorama_id": "Pk95h5VcMt0jt_SdsipbGw",
                          "time_created": "2022-06-07 12:04:22.231-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1482.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62379455566406,
                              41.64468765258789
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1483,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.644676208496094,
                          "lng": -87.6236801147461,
                          "gsv_panorama_id": "Pk95h5VcMt0jt_SdsipbGw",
                          "time_created": "2022-06-07 12:04:29.971-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1483.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6236801147461,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1484,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.644676208496094,
                          "lng": -87.62352752685547,
                          "gsv_panorama_id": "JYZ4mRngje7VXwQOQcl7mg",
                          "time_created": "2022-06-07 12:04:40.243-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1484.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62352752685547,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1485,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62348937988281,
                          "gsv_panorama_id": "JYZ4mRngje7VXwQOQcl7mg",
                          "time_created": "2022-06-07 12:04:45.789-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1485.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62348937988281,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1486,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448547363281,
                          "lng": -87.62345123291016,
                          "gsv_panorama_id": "JYZ4mRngje7VXwQOQcl7mg",
                          "time_created": "2022-06-07 12:05:14.425-07",
                          "correct": null,
                          "severity": 4,
                          "temporary": "f",
                          "tag_list": "sand/gravel,uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1486.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62345123291016,
                              41.64448547363281
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1487,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62344360351562,
                          "gsv_panorama_id": "IGZI2_q8jWu75RkDfMVcng",
                          "time_created": "2022-06-07 12:05:42.331-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1487.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62344360351562,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1488,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64448928833008,
                          "lng": -87.62320709228516,
                          "gsv_panorama_id": "g83xtXgK5mAgs5R4EnRHSw",
                          "time_created": "2022-06-07 12:05:50.028-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1488.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62320709228516,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1489,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.644493103027344,
                          "lng": -87.62337493896484,
                          "gsv_panorama_id": "g83xtXgK5mAgs5R4EnRHSw",
                          "time_created": "2022-06-07 12:05:52.249-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1489.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62337493896484,
                              41.644493103027344
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1490,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62318420410156,
                          "gsv_panorama_id": "PcRCG64SQQD84goYZ2EAKQ",
                          "time_created": "2022-06-07 12:06:03.13-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "uneven/slanted,grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1490.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62318420410156,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1491,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468383789063,
                          "lng": -87.62313079833984,
                          "gsv_panorama_id": "reJmA7cid9Hwj9ULNnd_jg",
                          "time_created": "2022-06-07 12:06:11.767-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1491.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62313079833984,
                              41.64468383789063
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1492,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62311553955078,
                          "gsv_panorama_id": "reJmA7cid9Hwj9ULNnd_jg",
                          "time_created": "2022-06-17 12:15:33.579-07",
                          "correct": null,
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_1492.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62311553955078,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1493,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62309265136719,
                          "gsv_panorama_id": "reJmA7cid9Hwj9ULNnd_jg",
                          "time_created": "2022-06-17 12:15:49.853-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1493.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62309265136719,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1494,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62303161621094,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-06-17 12:15:58.843-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1494.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62303161621094,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1495,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "Obstacle",
                          "lat": 41.64468765258789,
                          "lng": -87.62303161621094,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-06-17 12:16:02.513-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "vegetation",
                          "description": null,
                          "img_url": "with_icons/label_id_1495.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62303161621094,
                              41.64468765258789
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1496,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62300109863281,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-06-17 12:16:08.683-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_1496.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62300109863281,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1497,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64466857910156,
                          "lng": -87.62297058105469,
                          "gsv_panorama_id": "XZ7nNF7m2PpFe06VYTHLJA",
                          "time_created": "2022-06-17 12:16:13.654-07",
                          "correct": null,
                          "severity": 4,
                          "temporary": "f",
                          "tag_list": "grass,very broken",
                          "description": null,
                          "img_url": "with_icons/label_id_1497.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62297058105469,
                              41.64466857910156
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1498,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.6228256225586,
                          "gsv_panorama_id": "XJUVN-stVWf4MotZwF0myA",
                          "time_created": "2022-06-17 12:16:32.063-07",
                          "correct": null,
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1498.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6228256225586,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1499,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.6229476928711,
                          "gsv_panorama_id": "HaY3sOZQ-AULWkG6fEHHbg",
                          "time_created": "2022-06-17 12:16:47.371-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1499.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6229476928711,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1500,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62287902832031,
                          "gsv_panorama_id": "HaY3sOZQ-AULWkG6fEHHbg",
                          "time_created": "2022-06-17 12:16:50.472-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass,uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1500.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62287902832031,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1501,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "Obstacle",
                          "lat": 41.64468002319336,
                          "lng": -87.62237548828125,
                          "gsv_panorama_id": "vO3k2H3h94RjAcURGHiHsw",
                          "time_created": "2022-06-17 12:17:27.941-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "vegetation",
                          "description": null,
                          "img_url": "with_icons/label_id_1501.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62237548828125,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1502,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.644676208496094,
                          "lng": -87.62236785888672,
                          "gsv_panorama_id": "vO3k2H3h94RjAcURGHiHsw",
                          "time_created": "2022-06-17 12:17:31.466-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1502.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62236785888672,
                              41.644676208496094
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1503,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448547363281,
                          "lng": -87.62246704101562,
                          "gsv_panorama_id": "vO3k2H3h94RjAcURGHiHsw",
                          "time_created": "2022-06-17 12:17:35.715-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "cracks",
                          "description": null,
                          "img_url": "with_icons/label_id_1503.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62246704101562,
                              41.64448547363281
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1504,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62232971191406,
                          "gsv_panorama_id": "kUX13UMncQQK8cZqSvbIaA",
                          "time_created": "2022-06-17 12:17:50.376-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "uneven/slanted,grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1504.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62232971191406,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1505,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62235260009766,
                          "gsv_panorama_id": "kUX13UMncQQK8cZqSvbIaA",
                          "time_created": "2022-06-17 12:18:07.802-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "cracks,grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1505.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62235260009766,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1506,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62228393554688,
                          "gsv_panorama_id": "574zPNOlTHFha04gYEBgnA",
                          "time_created": "2022-06-17 12:18:16.566-07",
                          "correct": null,
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "grass,uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1506.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62228393554688,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1507,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62220001220703,
                          "gsv_panorama_id": "574zPNOlTHFha04gYEBgnA",
                          "time_created": "2022-06-17 12:18:22.329-07",
                          "correct": null,
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1507.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62220001220703,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1508,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64448928833008,
                          "lng": -87.62199401855469,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:18:31.211-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1508.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62199401855469,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1509,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64448928833008,
                          "lng": -87.6221694946289,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:18:33.35-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1509.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6221694946289,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1510,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.62217712402344,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:18:40.687-07",
                          "correct": null,
                          "severity": 2,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1510.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62217712402344,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1511,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64467239379883,
                          "lng": -87.6220703125,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:18:48.26-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1511.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6220703125,
                              41.64467239379883
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1512,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64468002319336,
                          "lng": -87.62200164794922,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:22:04.093-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1512.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62200164794922,
                              41.64468002319336
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1513,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448928833008,
                          "lng": -87.62196350097656,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:22:09.58-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1513.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62196350097656,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1514,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64447784423828,
                          "lng": -87.62195587158203,
                          "gsv_panorama_id": "jd9LCdznpfML-_xedWUAPw",
                          "time_created": "2022-06-17 12:22:11.428-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1514.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62195587158203,
                              41.64447784423828
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1515,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448165893555,
                          "lng": -87.62187957763672,
                          "gsv_panorama_id": "HXFQYSvoxHUnlk8VaUfESQ",
                          "time_created": "2022-06-17 12:22:39.898-07",
                          "correct": null,
                          "severity": 3,
                          "temporary": "f",
                          "tag_list": "uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1515.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62187957763672,
                              41.64448165893555
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1516,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448928833008,
                          "lng": -87.62178802490234,
                          "gsv_panorama_id": "l-K3h6IPo4XUjf1mGy0nxQ",
                          "time_created": "2022-06-17 12:22:49.223-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1516.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62178802490234,
                              41.64448928833008
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1517,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "CurbRamp",
                          "lat": 41.64466857910156,
                          "lng": -87.62179565429688,
                          "gsv_panorama_id": "l-K3h6IPo4XUjf1mGy0nxQ",
                          "time_created": "2022-06-17 12:23:02.311-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": null,
                          "description": null,
                          "img_url": "with_icons/label_id_1517.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62179565429688,
                              41.64466857910156
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1519,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.6446647644043,
                          "lng": -87.62187957763672,
                          "gsv_panorama_id": "9H8OAfvv5iS3UZBqGZ97RQ",
                          "time_created": "2022-06-17 12:23:09.085-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "uneven/slanted",
                          "description": null,
                          "img_url": "with_icons/label_id_1519.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.62187957763672,
                              41.6446647644043
                          ]
                      }
                  },
                  {
                      "type": "Feature",
                      "properties": {
                          "username": "mikey",
                          "label_id": 1520,
                          "street_edge_id": 381,
                          "neighborhood": "Riverdale",
                          "label_type": "SurfaceProblem",
                          "lat": 41.64448928833008,
                          "lng": -87.6218490600586,
                          "gsv_panorama_id": "9H8OAfvv5iS3UZBqGZ97RQ",
                          "time_created": "2022-06-17 12:23:13.779-07",
                          "correct": null,
                          "severity": 1,
                          "temporary": "f",
                          "tag_list": "grass",
                          "description": null,
                          "img_url": "with_icons/label_id_1520.jpg"
                      },
                      "geometry": {
                          "type": "Point",
                          "coordinates": [
                              -87.6218490600586,
                              41.64448928833008
                          ]
                      }
                  }
              ]
          }
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-color': '#F58238',
                'circle-radius': 5,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const label_type = e.features[0].properties.label_type;
            const severity = e.features[0].properties.severity;
            const url = e.features[0].properties.img_url;
            const img = "<img width = 460px src=" +"'" + url + "'" + "/>"
            const user = e.features[0].properties.username;
  
            

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML("<strong>Label Type:</strong> " + label_type + "<br><strong>Severity:</strong> " + severity +"<br><strong>User:</strong> " + user + img).addTo(map);
        });

        // map.on('mouseleave', 'places', () => {
        //     map.getCanvas().style.cursor = '';
        //     popup.remove();
        // });
    });