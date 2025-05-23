var APP_DATA = {
  "scenes": [
    {
      "id": "0-sch",
      "name": "sch",
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
        "yaw": -1.9907964571409522,
        "pitch": 0.20028491640755952,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": 0.7256335167479548,
          "pitch": -0.03958230948061292,
          "rotation": 0,
          "target": "1-lab"
        },
        {
          "yaw": -0.8562448650519414,
          "pitch": -0.01022608952739823,
          "rotation": 0,
          "target": "2-class"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5773003550069262,
          "pitch": 0.3073191936849007,
          "title": "SchoolCompound",
          "text": "Conducieve"
        }
      ]
    },
    {
      "id": "1-lab",
      "name": "lab",
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
        "yaw": -0.024982844163734086,
        "pitch": 0.029451841198415707,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.8101893033244032,
          "pitch": 0.014617988951949101,
          "rotation": 0,
          "target": "0-sch"
        },
        {
          "yaw": 2.3738014796636744,
          "pitch": -0.021463987868788337,
          "rotation": 0,
          "target": "2-class"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.024982844163734086,
          "pitch": 0.029451841198415707,
          "title": "Computer Lab",
          "text": "Well Equipped"
        }
      ]
    },
    {
      "id": "2-class",
      "name": "Class",
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
        "yaw": -0.3479143620530536,
        "pitch": 0,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -0.35347661795295515,
          "pitch": -0.0029451841198415707,
          "rotation": 0,
          "target": "0-sch"
        },
        {
          "yaw": 1.9005152215919061,
          "pitch": -0.11161804066332337,
          "rotation": 0,
          "target": "1-lab"
        },
        {
          "yaw": -2.238266061599573,
          "pitch": -0.4633411225138584,
          "rotation": 0,
          "target": "1-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.00872406756229438,
          "pitch": 0.5117934838737028,
          "title": "ClassRoom",
          "text": "Spacious"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
