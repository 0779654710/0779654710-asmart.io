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
        "yaw": 0.0030546979000014574,
        "pitch": 0,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.7532356789012198,
          "pitch": 0.25021728674064114,
          "rotation": 0,
          "target": "1-store"
        },
        {
          "yaw": -2.788534446451189,
          "pitch": 0.625145382200154,
          "rotation": 0,
          "target": "1-store"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.524341196797753,
          "pitch": 0.2765075455369228,
          "title": "RoofTop",
          "text": "Spacous meeting Space"
        }
      ]
    },
    {
      "id": "1-store",
      "name": "store",
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
        "yaw": 2.3005035667440215,
        "pitch": 0.5016630284130468,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 1.6707913495149018,
          "pitch": 0.21062290551415686,
          "rotation": 0,
          "target": "0-rm"
        },
        {
          "yaw": -1.9014827878047633,
          "pitch": 0.2248991571447938,
          "rotation": 0,
          "target": "0-rm"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3048836048440116,
          "pitch": 0.497282990313046,
          "title": "Store",
          "text": "Food and working materials"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
