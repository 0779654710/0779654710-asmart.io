var APP_DATA = {
  "scenes": [
    {
      "id": "0-lib",
      "name": "Lib",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.357532125367653,
        "pitch": 0.016908400150567715,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.5426906271107068,
          "pitch": 0.03239702531826083,
          "rotation": 0,
          "target": "1-schpc"
        },
        {
          "yaw": 1.8773528381415678,
          "pitch": 0.14435118909063682,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4885767623322543,
          "pitch": 0.08744396807353993,
          "title": "Library",
          "text": "Conducieve Reading Section"
        },
        {
          "yaw": 0.21401766613065476,
          "pitch": 0.1121314177724635,
          "title": "Modern",
          "text": "Design"
        }
      ]
    },
    {
      "id": "1-schpc",
      "name": "schPc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 300,
      "initialViewParameters": {
        "yaw": -0.06869450464712834,
        "pitch": 0.2208888089881249,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -2.495780776232527,
          "pitch": 0.020241362128215812,
          "rotation": 0,
          "target": "0-lib"
        },
        {
          "yaw": 1.89079001082513,
          "pitch": -0.05444416444131228,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06869450464712834,
          "pitch": 0.2208888089881249,
          "title": "PlayGround",
          "text": "Both Games"
        }
      ]
    },
    {
      "id": "2-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 130,
      "initialViewParameters": {
        "yaw": 2.702529249996342,
        "pitch": -0.03497630860309542,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -3.106297994918709,
          "pitch": 0.12538160008290333,
          "rotation": 0,
          "target": "0-lib"
        },
        {
          "yaw": 1.2246515729509397,
          "pitch": 0.013591794924629141,
          "rotation": 0,
          "target": "1-schpc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.702529249996342,
          "pitch": -0.03497630860309542,
          "title": "WaitingHall",
          "text": "Text"
        },
        {
          "yaw": -1.7352137723724468,
          "pitch": 0.05587128019131171,
          "title": "School",
          "text": "Administration Block"
        }
      ]
    }
  ],
  "name": "School",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
