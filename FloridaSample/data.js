var APP_DATA = {
  "scenes": [
    {
      "id": "0-corridal1",
      "name": "#corridal1",
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
        "yaw": -2.813150236491243,
        "pitch": 0.06876852951699419,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.7649953628605388,
          "pitch": -0.3229272919415749,
          "rotation": 0,
          "target": "1-corridal"
        },
        {
          "yaw": -2.3874259895433223,
          "pitch": 0.3793964418873532,
          "rotation": 0,
          "target": "1-corridal"
        },
        {
          "yaw": 3.0430927014773186,
          "pitch": 0.2360755791592517,
          "rotation": 0,
          "target": "2-rm1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.250565487404776,
          "pitch": -0.40735789259797706,
          "title": "Corridals",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-corridal",
      "name": "#corridal",
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
        "yaw": -0.11985926396887692,
        "pitch": 0.2094860640535554,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.09854818844627111,
          "pitch": 0.43494313186764977,
          "rotation": 0,
          "target": "0-corridal1"
        },
        {
          "yaw": 2.925714532658926,
          "pitch": 0.07296219390501335,
          "rotation": 0,
          "target": "0-corridal1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1748799091461528,
          "pitch": -0.09693601723436274,
          "title": "PassWays",
          "text": "safe and spacious pathways"
        }
      ]
    },
    {
      "id": "2-rm1",
      "name": "Rm1",
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
        "yaw": 2.1710396929756897,
        "pitch": 0.12624775763822527,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.08968816846095429,
          "pitch": 0.17631660508926572,
          "rotation": 0,
          "target": "0-corridal1"
        },
        {
          "yaw": -0.5617639665108882,
          "pitch": 0.1631081304224118,
          "rotation": 0,
          "target": "1-corridal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1710396929756897,
          "pitch": 0.12624775763822527,
          "title": "Sleeping Room",
          "text": "212"
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
