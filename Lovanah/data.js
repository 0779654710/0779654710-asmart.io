var APP_DATA = {
  "scenes": [
    {
      "id": "0-rm",
      "name": "RM",
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
        "yaw": -1.916099901605227,
        "pitch": 0.07608581754222854,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -2.334161002836696,
          "pitch": 0.00810359605533506,
          "rotation": 0,
          "target": "3-sleepingrm"
        },
        {
          "yaw": 1.090801768124475,
          "pitch": -0.17367539899020912,
          "rotation": 0,
          "target": "3-sleepingrm"
        },
        {
          "yaw": 2.398741403384533,
          "pitch": -0.29857417672686815,
          "rotation": 0,
          "target": "3-sleepingrm"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9860638805798363,
          "pitch": 0.048200323542216594,
          "title": "Lovan RoofTop",
          "text": "Spacious for Meeting"
        },
        {
          "yaw": 0.9603631574235507,
          "pitch": 0.24925087981871563,
          "title": "seats",
          "text": "soft"
        }
      ]
    },
    {
      "id": "1-kitc",
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
        "yaw": 0.5084723415768853,
        "pitch": 0.7673543352242191,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 0.7863409097565395,
          "pitch": 0.38253649848838656,
          "rotation": 0,
          "target": "0-rm"
        },
        {
          "yaw": 2.3046163744318324,
          "pitch": 0.7599839273738489,
          "rotation": 0,
          "target": "3-sleepingrm"
        },
        {
          "yaw": -2.530957073163856,
          "pitch": 0.019633373049977365,
          "rotation": 0,
          "target": "2-shrm-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.44385223831450915,
          "pitch": 0.5427962647814084,
          "title": "Shower room",
          "text": "modern one"
        }
      ]
    },
    {
      "id": "2-shrm-1",
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
        "yaw": -2.4008847429975475,
        "pitch": 0.13956228589749742,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 2.352913966521788,
          "pitch": 0.06426331557133658,
          "rotation": 0,
          "target": "1-kitc"
        },
        {
          "yaw": 0.2618713663092027,
          "pitch": 0.17761572886874788,
          "rotation": 0,
          "target": "3-sleepingrm"
        },
        {
          "yaw": -2.1392753781436475,
          "pitch": -0.12868544689405503,
          "rotation": 0,
          "target": "0-rm"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7985283459370134,
          "pitch": 0.15134302237686725,
          "title": "ModernKitchen",
          "text": "Part Of the Room"
        }
      ]
    },
    {
      "id": "3-sleepingrm",
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
        "yaw": 0.26803184636439603,
        "pitch": -0.04870232424026355,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.6626159945895935,
          "pitch": -0.1384725106988789,
          "rotation": 0,
          "target": "0-rm"
        },
        {
          "yaw": 1.8017732320118727,
          "pitch": -0.09821490492834073,
          "rotation": 0,
          "target": "1-kitc"
        },
        {
          "yaw": -2.7003494970827067,
          "pitch": 0.1574703827005166,
          "rotation": 0,
          "target": "2-shrm-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.26803184636439603,
          "pitch": -0.04870232424026355,
          "title": "BedRoom",
          "text": "well spacious"
        },
        {
          "yaw": 3.097824686689645,
          "pitch": -0.012575885891928706,
          "title": "telephony",
          "text": "Modern one"
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
