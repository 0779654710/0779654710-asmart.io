var APP_DATA = {
  "scenes": [
    {
      "id": "0-testpanorama",
      "name": "testpanorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8364811365001756,
          "pitch": 0.1751346636708746,
          "rotation": 0,
          "target": "1-whatsappimage20250325at73940am"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9168801915114599,
          "pitch": -0.4513017389399341,
          "title": "Outside@Night",
          "text": "Enjy the Night View"
        }
      ]
    },
    {
      "id": "1-whatsappimage20250325at73940am",
      "name": "WhatsAppImage20250325at7.39.40AM",
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
      "faceSize": 270,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5033065580990215,
          "pitch": 0.05268744573976214,
          "rotation": 0,
          "target": "0-testpanorama"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.005458330548639978,
          "pitch": 0.025742808406905127,
          "title": "lab 2",
          "text": "Inside Lab 2"
        }
      ]
    }
  ],
  "name": "Namatovu",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
