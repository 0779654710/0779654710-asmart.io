var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitc",
      "name": "Kitc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9430666682557494,
        "pitch": 0.39591083837673224,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 0.2686649136188688,
          "pitch": -0.0329300342897465,
          "rotation": 0,
          "target": "1-shrm-1"
        },
        {
          "yaw": 2.8626569445467567,
          "pitch": -0.025640904577455714,
          "rotation": 0,
          "target": "2-sleepingrm"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.187520766708408,
          "pitch": 0.17228623987134029,
          "title": "ShowerRoom",
          "text": "Modern Bathing Section"
        },
        {
          "yaw": -1.1277630300481807,
          "pitch": -0.34839173222245634,
          "title": "Dirco",
          "text": "Text"
        },
        {
          "yaw": -2.7668584394521005,
          "pitch": 1.5102878310245487,
          "title": "Tilled&nbsp;",
          "text": "Floor"
        },
        {
          "yaw": -0.26911364994661824,
          "pitch": -0.7933050988275028,
          "title": "TemperatureGuide",
          "text": "hot/cold water"
        }
      ]
    },
    {
      "id": "1-shrm-1",
      "name": "ShRm (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21193455853770438,
          "pitch": -0.25988803643206104,
          "rotation": 0,
          "target": "2-sleepingrm"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2625383547206965,
          "pitch": 0.5720611761929231,
          "title": "KitchenSection",
          "text": "Modern Cooking Section"
        }
      ]
    },
    {
      "id": "2-sleepingrm",
      "name": "sleepingRm",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.19273363995261938,
        "pitch": 0.034081701038616075,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.6830313059035618,
          "pitch": -0.08118256466439178,
          "rotation": 0,
          "target": "1-shrm-1"
        },
        {
          "yaw": 2.1088538216387303,
          "pitch": -0.0016380408473573027,
          "rotation": 0,
          "target": "0-kitc"
        },
        {
          "yaw": -2.787982080239839,
          "pitch": -0.07268775368443414,
          "rotation": 0,
          "target": "1-shrm-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0477216050412537,
          "pitch": -0.06420365945769291,
          "title": "RestRoom",
          "text": "ModernNice Looking"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
