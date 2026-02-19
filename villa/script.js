(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ebeveyn Banyosu",
 "hfovMin": "150%",
 "id": "panorama_7B26C829_7004_50E3_41DA_E786D311DDA2",
 "overlays": [
  "this.overlay_6E91ADD9_7031_CB73_41C7_AFBF1A48F6DA",
  "this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u00dcst Kat Banyo",
 "hfovMin": "150%",
 "id": "panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698",
 "overlays": [
  "this.overlay_6AE515F9_7071_3B33_41C5_962B06AAFBE8",
  "this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.16,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_624AA731_76BC_713E_41C8_42166FF05303",
 "idleSequence": "this.sequence_624AA731_76BC_713E_41C8_42166FF05303",
 "id": "camera_624AB731_76BC_713E_41BC_7B4201292597",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_5EB31FAD_703E_C7D3_41C8_EF4576F08075",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_5EB31FAD_703E_C7D3_41C8_EF4576F08075.ogg",
  "mp3Url": "media/audio_5EB31FAD_703E_C7D3_41C8_EF4576F08075.mp3"
 },
 "data": {
  "label": "Video Project (4)"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Merdiven",
 "hfovMin": "150%",
 "id": "panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00",
 "overlays": [
  "this.overlay_6783FE91_7077_49F3_41CB_87A7F0AB4247",
  "this.overlay_67DB639C_7071_5FF1_41D2_BB3FAAD20058",
  "this.overlay_439FF0D4_70F1_5971_41BE_74ECECBF05A9",
  "this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_62C587A7_7250_B560_417E_AE5823BCFECA_t.png",
 "id": "photo_62C587A7_7250_B560_417E_AE5823BCFECA",
 "width": 2752,
 "label": "K\u0131\u015f Bah\u00e7esi",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_62C587A7_7250_B560_417E_AE5823BCFECA.png"
   }
  ]
 },
 "height": 1536
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_5D75BB53_700F_4F77_41A5_B700518A7FC2",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_5D744B54_700F_4F71_4190_60F5ADE43C32",
  "this.image_uid6E66D4BE_76BC_7725_41D4_C9DF44BDFF4F_1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window90752"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1183
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_2_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_2",
 "width": 2752,
 "label": "Gen\u00e7 Odas\u0131",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_2.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "initialPosition": {
  "yaw": 6.59,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_62400761_76BC_715E_41C1_C56BB153C190",
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47998654_700E_F971_4146_D3CD3E11C7FC_t.jpg",
 "id": "photo_47998654_700E_F971_4146_D3CD3E11C7FC",
 "width": 3024,
 "label": "IMG_1996",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47998654_700E_F971_4146_D3CD3E11C7FC.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_0_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_0",
 "width": 2752,
 "label": "BAH\u00c7E",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_0.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 98.45,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -19.84
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63CAC885_76BC_7FE7_41DC_A99E70CB1D88",
 "idleSequence": "this.sequence_63CAC885_76BC_7FE7_41DC_A99E70CB1D88",
 "id": "camera_63CD2885_76BC_7FE7_41C6_C420850F445A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.47,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F432637_76BC_7322_41D6_799DF682B766",
 "idleSequence": "this.sequence_6F432637_76BC_7322_41D6_799DF682B766",
 "id": "camera_6F433637_76BC_7322_41D2_D4D7F88DF7E3",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_4796DE14_7011_48F1_41DA_34E9B16479A9_t.jpg",
 "id": "photo_4796DE14_7011_48F1_41DA_34E9B16479A9",
 "width": 3024,
 "label": "IMG_1992",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_4796DE14_7011_48F1_41DA_34E9B16479A9.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -24.24,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -9.55
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_626B87B2_76BC_713D_41CF_A1DFD3FFC508",
 "idleSequence": "this.sequence_626B87B2_76BC_713D_41CF_A1DFD3FFC508",
 "id": "camera_626B97B2_76BC_713D_41D8_7EC89DDD5808",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1207
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40EE6A12_7013_48F1_41B8_F4343E0B1F21",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40EE6A12_7013_48F1_41B8_F4343E0B1F21.ogg",
  "mp3Url": "media/audio_40EE6A12_7013_48F1_41B8_F4343E0B1F21.mp3"
 },
 "data": {
  "label": "Video Project (4)"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Sokak Giri\u015fi",
 "hfovMin": "192%",
 "id": "panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7",
 "overlays": [
  "this.overlay_57E906F6_7016_D931_41D3_2A4C53202A62",
  "this.overlay_5C9A9EA1_703F_49D3_41D1_558BAACAE313",
  "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5823D74C_7017_4751_41AE_5E434A6C643A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_t.jpg",
 "class": "Panorama",
 "hfovMax": 136
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_1_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_1",
 "width": 2752,
 "label": "Cocuk Odasu",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_1.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 135.18,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -18.37
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63D7486C_76BC_7F26_41D4_66256BA2EAA6",
 "idleSequence": "this.sequence_63D7486C_76BC_7F26_41D4_66256BA2EAA6",
 "id": "camera_63D7586C_76BC_7F26_41BE_DF9CDCEBA06F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B262879_7004_7162_41DA_9F22050814F9_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1217
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -13.96,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6FF2056F_76BC_7123_41CB_6A4B285FB432",
 "idleSequence": "this.sequence_6FF2056F_76BC_7123_41CB_6A4B285FB432",
 "id": "camera_6FF2656F_76BC_7123_41BC_8809374B477A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.63,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_62547709_76BC_72EF_41C3_35D5CC952997",
 "idleSequence": "this.sequence_62547709_76BC_72EF_41C3_35D5CC952997",
 "id": "camera_62544709_76BC_72EF_41CF_265349A5B7B9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.57,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F1395AF_76BC_7122_41BD_835AD4AF395E",
 "idleSequence": "this.sequence_6F1395AF_76BC_7122_41BD_835AD4AF395E",
 "id": "camera_6F13E5AF_76BC_7122_41C4_CFB157D8C286",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 148.41,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 8.82
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63BEF81B_76BC_7EE3_41C9_8297FB10291D",
 "idleSequence": "this.sequence_63BEF81B_76BC_7EE3_41C9_8297FB10291D",
 "id": "camera_63BEC81B_76BC_7EE3_41C2_B69E697DAB22",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "K\u0131\u015f Bah\u00e7esi",
 "hfovMin": "150%",
 "id": "panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D",
 "overlays": [
  "this.overlay_661D9F67_700E_C75F_41B0_42F8B15F7E7E",
  "this.overlay_66D3FB5D_7071_4F73_41CF_F91E30207886",
  "this.overlay_66F0E505_7073_58D3_41B2_2CDD4CE1A9A5",
  "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "initialPosition": {
  "yaw": 176.33,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -22.78
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_63F4C8AD_76BC_7F27_41D2_2BED5A7D04CD",
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_62CA15F8_7253_74EF_41D3_F39E88119816_t.png",
 "id": "photo_62CA15F8_7253_74EF_41D3_F39E88119816",
 "width": 2752,
 "label": "BAH\u00c7E",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_62CA15F8_7253_74EF_41D3_F39E88119816.png"
   }
  ]
 },
 "height": 1536
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40EC4984_7013_4BD1_41D3_9B515A52EAF7",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40EC4984_7013_4BD1_41D3_9B515A52EAF7.ogg",
  "mp3Url": "media/audio_40EC4984_7013_4BD1_41D3_9B515A52EAF7.mp3"
 },
 "data": {
  "label": "Video Project (3)"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u00dcst Kat Koridor",
 "hfovMin": "150%",
 "id": "panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3",
 "overlays": [
  "this.overlay_68D45C45_7071_4953_41D0_6DB35AC7AE60",
  "this.overlay_688F8F04_707F_C8D1_41D9_23FDFD67E59F",
  "this.overlay_6957514B_7071_3B57_41C3_D675EF5E9152",
  "this.overlay_69B87D7C_7071_4B31_41D0_B16D633E0BB2",
  "this.overlay_50F7A3B4_7033_3F31_415D_6F6BBD6EDDEA",
  "this.overlay_42C26F5C_70F1_4771_41CD_CB90B08887B2",
  "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE"
  },
  {
   "yaw": -173.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 168.2,
   "panorama": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_t.jpg",
 "class": "Panorama",
 "hfovMax": 133
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Bah\u00e7e",
 "hfovMin": "150%",
 "id": "panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7",
 "overlays": [
  "this.overlay_512C41B7_7031_DB3F_41B3_66BE5D26CFBD",
  "this.overlay_51D16D8F_700F_4BEF_41BA_61CDFDE13369",
  "this.overlay_5250AC1F_700F_48EF_4198_CD8D549E5D3F",
  "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "playList": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_AlbumPlayList",
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58",
 "label": "Foto\u011fraf Alb\u00fcm\u00fc BAH\u00c7E",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 16.16,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -30.86
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6333892C_76BC_7125_41C4_35E7A3B9855D",
 "idleSequence": "this.sequence_6333892C_76BC_7125_41C4_35E7A3B9855D",
 "id": "camera_6333E92C_76BC_7125_41C2_AAC377B7A429",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Zemin Kat WC",
 "hfovMin": "150%",
 "id": "panorama_7B26358D_7004_73A2_41B7_7DD26142E293",
 "overlays": [
  "this.overlay_62A10982_7011_4BD1_41D5_282D2B65E695",
  "this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_5_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_5",
 "width": 2752,
 "label": "K\u0131\u015f Bah\u00e7esi",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_5.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_8_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_8",
 "width": 1376,
 "label": "Salon",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_8.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_7_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_7",
 "width": 1376,
 "label": "Mutfak",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_7.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_4_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_4",
 "width": 2752,
 "label": "Giri\u015f",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_4.png"
   }
  ]
 },
 "height": 1536
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6245546A_7250_ABE3_41D1_B6DB13786711_t.png",
 "id": "photo_6245546A_7250_ABE3_41D1_B6DB13786711",
 "width": 1376,
 "label": "Salon",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6245546A_7250_ABE3_41D1_B6DB13786711.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47B182D0_7011_5971_41D6_9B761A7D652E_t.jpg",
 "id": "photo_47B182D0_7011_5971_41D6_9B761A7D652E",
 "width": 4032,
 "label": "IMG_1991",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47B182D0_7011_5971_41D6_9B761A7D652E.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 146.2,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63C1189D_76BC_7FE7_41BA_4A5BE71D631D",
 "idleSequence": "this.sequence_63C1189D_76BC_7FE7_41BA_4A5BE71D631D",
 "id": "camera_63C1689D_76BC_7FE7_4196_12BB683DD2A5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Yatak Odas\u0131",
 "hfovMin": "150%",
 "id": "panorama_7B2620E1_7004_7163_41D0_C541871224E4",
 "overlays": [
  "this.overlay_6F632DAB_7033_4BD7_41B8_7C2E2A7FAE2A",
  "this.overlay_6FF1D516_7033_58F1_41CD_B0C54EE3E1F5",
  "this.overlay_456DB55D_7031_5B73_41C7_F7FC4E8CC42B",
  "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A"
  },
  {
   "yaw": 168.2,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.41,
   "panorama": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B262879_7004_7162_41DA_9F22050814F9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -108.24,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -3.98
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_48855C99_7031_49F3_41D2_04E66CEC6278",
 "idleSequence": "this.sequence_48855C99_7031_49F3_41D2_04E66CEC6278",
 "id": "panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1217
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.18,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_62460749_76BC_716E_41DA_2E5AAB124274",
 "idleSequence": "this.sequence_62460749_76BC_716E_41DA_2E5AAB124274",
 "id": "camera_62461749_76BC_716E_41D1_A74AC5798333",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1207
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.78,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -24.24
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_631EA8DD_76BC_7F67_41D2_FC07028C22DF",
 "idleSequence": "this.sequence_631EA8DD_76BC_7F67_41D2_FC07028C22DF",
 "id": "camera_631EB8DD_76BC_7F67_41CF_47E563C83186",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_8_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_8",
 "width": 1376,
 "label": "Salon",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_8.png"
   }
  ]
 },
 "height": 768
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_5CA67D22_7033_48D1_41B7_5ECDF67ABDBA",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "Harmanc\u0131k Kapal\u0131 Pazar Yeri",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_5CA68D22_7033_48D1_41BB_77832823285C",
  "this.image_uid6E69F4BE_76BC_7725_41DC_BA67D6875258_1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "4vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "footerBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonIconWidth": 12,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "close": "this.stopGlobalAudio(this.audio_47987324_7032_D8D1_41BF_CDFE66060C26)",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window79458"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6230614D_7250_AD21_41A4_61D977300882_t.png",
 "id": "photo_6230614D_7250_AD21_41A4_61D977300882",
 "width": 2752,
 "label": "Giri\u015f",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6230614D_7250_AD21_41A4_61D977300882.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_58236A4A_7016_C951_41D7_DCAAA1375696_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Bah\u00e7e",
 "hfovMin": "150%",
 "id": "panorama_7B21B51C_7004_D0A1_41CF_228567471D83",
 "overlays": [
  "this.overlay_548BA5E9_7013_5B53_41D7_1236E5146E89",
  "this.overlay_559B6180_701E_FBD1_41D3_D48C1C9E65E2",
  "this.overlay_56B35627_701E_D8DF_41D2_B058614A1EE3",
  "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83_tcap0",
  "this.overlay_47A9AC32_7012_C931_41A0_19949E6F7210"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 94.78,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_627D9771_76BC_713E_419A_BC8DD949F8C7",
 "idleSequence": "this.sequence_627D9771_76BC_713E_419A_BC8DD949F8C7",
 "id": "camera_627DE771_76BC_713E_41D9_50E00D31F730",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1217
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_420E4621_7011_38D3_41C1_3D3E0CC2D30B_t.jpg",
 "id": "photo_420E4621_7011_38D3_41C1_3D3E0CC2D30B",
 "width": 275,
 "label": "okul",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_420E4621_7011_38D3_41C1_3D3E0CC2D30B.jpg"
   }
  ]
 },
 "height": 183
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F0685C7_76BC_7162_4102_ACA43F07A930",
 "idleSequence": "this.sequence_6F0685C7_76BC_7162_4102_ACA43F07A930",
 "id": "camera_6F0695C7_76BC_7162_41CE_BB673FB45232",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u00c7at\u0131",
 "hfovMin": "150%",
 "id": "panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE",
 "overlays": [
  "this.overlay_50D0F716_7033_58F1_41DC_0E61B0BEF975",
  "this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B213DF4_7004_5361_4191_449E83E3564C_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.9,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -36
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63279944_76BC_7165_41C0_47961050B2D5",
 "idleSequence": "this.sequence_63279944_76BC_7165_41C0_47961050B2D5",
 "id": "camera_6327C944_76BC_7165_41C8_39AB95C59920",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1286
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7B26358D_7004_73A2_41B7_7DD26142E293_camera",
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_7_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_7",
 "width": 1376,
 "label": "Mutfak",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_7.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_479CB9E3_700E_CB57_41D1_A47F58CAA484_t.jpg",
 "id": "photo_479CB9E3_700E_CB57_41D1_A47F58CAA484",
 "width": 3024,
 "label": "IMG_1994(1)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_479CB9E3_700E_CB57_41D1_A47F58CAA484.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_2_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_2",
 "width": 2752,
 "label": "Gen\u00e7 Odas\u0131",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_2.png"
   }
  ]
 },
 "height": 1536
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Mutfak",
 "hfovMin": "150%",
 "id": "panorama_7B27CD2D_7004_50E3_41D6_265046B601B5",
 "overlays": [
  "this.overlay_659DB489_7011_79D0_41D3_5B1A9D42442E",
  "this.overlay_65E83448_7011_3951_41C8_F9760487AA7F",
  "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Oda",
 "hfovMin": "150%",
 "id": "panorama_7B211FF2_7004_2F61_41BD_F97E313F7365",
 "overlays": [
  "this.overlay_6C9C0D9D_700E_CBF3_41D3_42752A5CD919",
  "this.overlay_6C5212A9_700F_D9D3_41A7_2A94D4F19FCF",
  "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Bah\u00e7e",
 "hfovMin": "150%",
 "id": "panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE",
 "overlays": [
  "this.overlay_52829E9D_7013_C9F3_41D8_FE865D849D0D",
  "this.overlay_534D4C5E_7013_C971_41C2_51B801FFD270",
  "this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Mutfak",
 "hfovMin": "150%",
 "id": "panorama_7B27C51D_7004_50A3_4187_E804E3372D87",
 "overlays": [
  "this.overlay_62E2355D_7011_FB73_41C4_461A3103BE51",
  "this.overlay_644BCF20_7013_48D1_41D0_CCCFB365115D",
  "this.overlay_63DC03F5_7011_FF33_41D9_050E5D7A7B02",
  "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.49,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -9.55
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6277B789_76BC_71EE_41D4_0238A05684CB",
 "idleSequence": "this.sequence_6277B789_76BC_71EE_41D4_0238A05684CB",
 "id": "camera_62778789_76BC_71EE_41D3_1B066317389A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47B1DD37_7011_4B3F_419E_EBC30D674798_t.jpg",
 "id": "photo_47B1DD37_7011_4B3F_419E_EBC30D674798",
 "width": 4032,
 "label": "IMG_1990",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47B1DD37_7011_4B3F_419E_EBC30D674798.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_9_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_9",
 "width": 2752,
 "label": "Yatak odas\u0131",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_9.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.67,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63081904_76BC_7EE5_41AC_32E697B47ABE",
 "idleSequence": "this.sequence_63081904_76BC_7EE5_41AC_32E697B47ABE",
 "id": "camera_63086904_76BC_7EE5_41DB_DA7C33B029D1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1161
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1207
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -82.7,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_639D37DA_76BC_716D_41D0_A0E16E78BC0C",
 "idleSequence": "this.sequence_639D37DA_76BC_716D_41D0_A0E16E78BC0C",
 "id": "camera_639D07DA_76BC_716D_41DD_3868CF801288",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47108C93_7011_49F7_41C7_86C46DB5E8C1_t.jpg",
 "id": "photo_47108C93_7011_49F7_41C7_86C46DB5E8C1",
 "width": 4032,
 "label": "IMG_1985",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47108C93_7011_49F7_41C7_86C46DB5E8C1.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_46F64DC9_7011_4B53_41C5_9F4BCF8A6391",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_46F41DC9_7011_4B53_4184_CA6FAF71266D",
  "this.image_uid6E6094C6_76BC_7765_41D2_94A05022859F_1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window120977"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "duration": 1000,
 "id": "effect_61515258_7250_AF2F_41D0_A87F97473332",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Zemin Kat Koridor",
 "hfovMin": "150%",
 "id": "panorama_7B213DF4_7004_5361_4191_449E83E3564C",
 "overlays": [
  "this.overlay_600B62ED_7012_D953_4196_FFF5657D2F40",
  "this.overlay_60C525F4_7011_5B31_41A5_9FB09042A0A9",
  "this.overlay_603E9368_7011_3F51_41D7_5E163FC54A9E",
  "this.overlay_6169299B_7013_4BF7_41D9_ABE344A1FE9E",
  "this.overlay_64B1A8F4_7011_C931_4183_797D54F5AC42",
  "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 97.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.25,
   "panorama": "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47AE8814_7011_48F1_41DA_72604C50CB83_t.jpg",
 "id": "photo_47AE8814_7011_48F1_41DA_72604C50CB83",
 "width": 4032,
 "label": "IMG_1990(1)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47AE8814_7011_48F1_41DA_72604C50CB83.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.84,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_625B06E8_76BC_732E_41D3_8E94A1D2C9F7",
 "idleSequence": "this.sequence_625B06E8_76BC_732E_41D3_8E94A1D2C9F7",
 "id": "camera_625B16E8_76BC_732E_41A6_6DD0CB1C021D",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1207
},
{
 "duration": 1000,
 "id": "effect_61516258_7250_AF2F_41D4_02C2654384CC",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_632E6C97_7253_7B21_41B4_89A5BCCFAEC4_t.png",
 "id": "photo_632E6C97_7253_7B21_41B4_89A5BCCFAEC4",
 "width": 2752,
 "label": "Cocuk Odasu",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_632E6C97_7253_7B21_41B4_89A5BCCFAEC4.png"
   }
  ]
 },
 "height": 1536
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_5DAEBE86_7076_C9D1_41C8_6295FFFAD787",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_5DAEBE86_7076_C9D1_41C8_6295FFFAD787.ogg",
  "mp3Url": "media/audio_5DAEBE86_7076_C9D1_41C8_6295FFFAD787.mp3"
 },
 "data": {
  "label": "Video Project (4)"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_camera",
 "manualRotationSpeed": 1200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Oda ",
 "hfovMin": "150%",
 "id": "panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3",
 "overlays": [
  "this.overlay_6B0C045A_7071_D971_41D1_81046EABD905",
  "this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Yatak Odas\u0131",
 "hfovMin": "150%",
 "id": "panorama_7B262879_7004_7162_41DA_9F22050814F9",
 "overlays": [
  "this.overlay_5173F328_7037_38D1_41D5_FDDD706987F2",
  "this.panorama_7B262879_7004_7162_41DA_9F22050814F9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_47987324_7032_D8D1_41BF_CDFE66060C26",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_47987324_7032_D8D1_41BF_CDFE66060C26.ogg",
  "mp3Url": "media/audio_47987324_7032_D8D1_41BF_CDFE66060C26.mp3"
 },
 "data": {
  "label": "Video Project"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Giri\u015f ",
 "hfovMin": "150%",
 "id": "panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C",
 "overlays": [
  "this.overlay_7EC38C7B_7011_C937_41D6_6A272502B8F2",
  "this.overlay_7E6AD0AF_7011_592F_41C6_C92D552EAA69",
  "this.overlay_40B92D10_7011_48F1_41D6_6AF3BC0C7547",
  "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83"
  },
  {
   "yaw": 3.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 97.3,
   "panorama": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_1_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_1",
 "width": 2752,
 "label": "Cocuk Odasu",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_1.png"
   }
  ]
 },
 "height": 1536
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47A110D3_700E_F977_41C4_7F4E78B6D79C_t.jpg",
 "id": "photo_47A110D3_700E_F977_41C4_7F4E78B6D79C",
 "width": 3024,
 "label": "IMG_1996(1)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47A110D3_700E_F977_41C4_7F4E78B6D79C.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_0_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_0",
 "width": 2752,
 "label": "BAH\u00c7E",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_0.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.8,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63AAB84C_76BC_7F66_41C8_7862421F1E7E",
 "idleSequence": "this.sequence_63AAB84C_76BC_7F66_41C8_7862421F1E7E",
 "id": "camera_63AA884C_76BC_7F66_4142_86AB52BC3F50",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47B5286D_7011_4953_41B0_944B525C042A_t.jpg",
 "id": "photo_47B5286D_7011_4953_41B0_944B525C042A",
 "width": 3024,
 "label": "IMG_1992(1)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47B5286D_7011_4953_41B0_944B525C042A.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_62C49E7D_7250_B7E1_41B3_1619616EE0C6_t.png",
 "id": "photo_62C49E7D_7250_B7E1_41B3_1619616EE0C6",
 "width": 1376,
 "label": "Koridor",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_62C49E7D_7250_B7E1_41B3_1619616EE0C6.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_479E4AF9_700E_C933_4180_75728BA1F053_t.jpg",
 "id": "photo_479E4AF9_700E_C933_4180_75728BA1F053",
 "width": 3024,
 "label": "IMG_1995",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_479E4AF9_700E_C933_4180_75728BA1F053.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.75,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6FC7F547_76BC_7163_41CA_4B9D138975A7",
 "idleSequence": "this.sequence_6FC7F547_76BC_7163_41CA_4B9D138975A7",
 "id": "camera_6FC7C547_76BC_7163_41C8_9BF6078F4677",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47B0B764_7011_4751_41B7_A6CAEDDA5723_t.jpg",
 "id": "photo_47B0B764_7011_4751_41B7_A6CAEDDA5723",
 "width": 4032,
 "label": "IMG_1987",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47B0B764_7011_4751_41B7_A6CAEDDA5723.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_5_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_5",
 "width": 2752,
 "label": "K\u0131\u015f Bah\u00e7esi",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_5.png"
   }
  ]
 },
 "height": 1536
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_4_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_4",
 "width": 2752,
 "label": "Giri\u015f",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_4.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1187
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_622F4374_7253_6DE0_41D7_19009751BFF9_t.png",
 "id": "photo_622F4374_7253_6DE0_41D7_19009751BFF9",
 "width": 2752,
 "label": "Gen\u00e7 Odas\u0131",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_622F4374_7253_6DE0_41D7_19009751BFF9.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.49,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -42.61
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F505620_76BC_72DD_41D5_5033F7675D08",
 "idleSequence": "this.sequence_6F505620_76BC_72DD_41D5_5033F7675D08",
 "id": "camera_6F50B620_76BC_72DD_41DA_3FE15EB18B37",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6247B718_7250_952F_41C2_D957F105FE0D_t.png",
 "id": "photo_6247B718_7250_952F_41C2_D957F105FE0D",
 "width": 2752,
 "label": "Yatak odas\u0131",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_6247B718_7250_952F_41C2_D957F105FE0D.png"
   }
  ]
 },
 "height": 1536
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Salon",
 "hfovMin": "150%",
 "id": "panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7",
 "overlays": [
  "this.overlay_6319357B_7011_3B37_41D1_663ACDC497A5",
  "this.overlay_64942725_700E_D8D3_41C8_2183FF11B654",
  "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.02,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -24.98
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F211607_76BC_72E2_41BA_8B3D8E5D12E2",
 "idleSequence": "this.sequence_6F211607_76BC_72E2_41BA_8B3D8E5D12E2",
 "id": "camera_6F216607_76BC_72E2_41A2_521DFE9FEEAA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1239
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_48E8B157_7071_5B7F_41D3_5B7DCD34D0E3",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_48E94157_7071_5B7F_41D8_A9B4B655F7CC",
  "this.image_uid6F9E24CE_76BC_7765_41DB_D4A79ADF1914_1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window125625"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.08,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F2EF5F7_76BC_7122_41C1_B0E4D12B3634",
 "idleSequence": "this.sequence_6F2EF5F7_76BC_7122_41C1_B0E4D12B3634",
 "id": "camera_6F2EC5F7_76BC_7122_41DB_A0FF432B4F11",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1235
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_62325A4B_7250_9F21_41B8_565AEC32BA9A_t.png",
 "id": "photo_62325A4B_7250_9F21_41B8_565AEC32BA9A",
 "width": 2752,
 "label": "Giri\u015f hol\u00fc",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_62325A4B_7250_9F21_41B8_565AEC32BA9A.png"
   }
  ]
 },
 "height": 1536
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_6_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_6",
 "width": 1376,
 "label": "Koridor",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_6.png"
   }
  ]
 },
 "height": 768
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1286
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_626517CA_76BC_716D_41C0_1FFCBEF4373F",
 "idleSequence": "this.sequence_626517CA_76BC_716D_41C0_1FFCBEF4373F",
 "id": "camera_626567CA_76BC_716D_41CE_21880D0752C4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_3_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_3",
 "width": 2752,
 "label": "Giri\u015f hol\u00fc",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_3.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1161
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.8,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_633C091C_76BC_7EE5_41DC_273BCB0E2A57",
 "idleSequence": "this.sequence_633C091C_76BC_7EE5_41DC_273BCB0E2A57",
 "id": "camera_633C691C_76BC_7EE5_41D2_EEAEBE46F320",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1235
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_49F9F62E_7073_58D1_41C5_A6F068B8F205",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_49FBA632_7073_5931_41AF_B7EECA2882D6",
  "this.image_uid6E6234C6_76BC_7765_41DB_6EEF47043C47_1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window123915"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.02,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -13.22
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_62500719_76BC_72EF_41BD_F1D650157994",
 "idleSequence": "this.sequence_62500719_76BC_72EF_41BD_F1D650157994",
 "id": "camera_62501719_76BC_72EF_41D8_BC1BB991CE75",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.29,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -12.49
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6FE9457F_76BC_7123_4185_C6B380B92BFE",
 "idleSequence": "this.sequence_6FE9457F_76BC_7123_4185_C6B380B92BFE",
 "id": "camera_6FE9557F_76BC_7123_41D8_A5445D1D1232",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -135.92,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -13.22
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F1E6597_76BC_71E2_41AA_C1FB4A55A1D9",
 "idleSequence": "this.sequence_6F1E6597_76BC_71E2_41AA_C1FB4A55A1D9",
 "id": "camera_6F1E7597_76BC_71E2_41DD_7DBAE3E22077",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Tepe G\u00f6z",
 "hfovMin": "142%",
 "id": "panorama_5823D74C_7017_4751_41AE_5E434A6C643A",
 "overlays": [
  "this.overlay_5A1D04E4_7011_5951_41D7_A3C6B7E5E159",
  "this.overlay_5A24EEDB_7031_4977_41DA_06A3580B8672",
  "this.overlay_5C53E028_700F_38D1_4182_12FCF8534382",
  "this.overlay_41400D9A_7011_4BF1_41B6_D07B3AF11A5F",
  "this.overlay_5C97F976_700E_CB31_41D8_5DE65EC2981E",
  "this.overlay_5C76DD0A_7031_48D1_41B3_1B32A5CE532A",
  "this.overlay_5CFF7DA5_7033_4BD3_41CD_F2E0DDDAB177"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Giyinme Odas\u0131",
 "hfovMin": "150%",
 "id": "panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A",
 "overlays": [
  "this.overlay_6E40B6FA_7031_3931_41C4_FFDF637B6D27",
  "this.overlay_6E3F5B19_703F_C8F3_41D2_06057A49A4F4",
  "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_5C02F4FC_7033_5931_41D6_33EAD7F7AEF8_t.jpg",
 "id": "photo_5C02F4FC_7033_5931_41D6_33EAD7F7AEF8",
 "width": 630,
 "label": "pazar",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_5C02F4FC_7033_5931_41D6_33EAD7F7AEF8.jpg"
   }
  ]
 },
 "height": 354
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6FDB1516_76BC_76E2_41D5_57410EA1C73D",
 "idleSequence": "this.sequence_6FDB1516_76BC_76E2_41D5_57410EA1C73D",
 "id": "camera_6FDB6516_76BC_76E2_41CF_F7D820FA300A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1239
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_40DF9E11_7011_C8F3_41D6_34E694CA41D9",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_40DC7E12_7011_C8F1_41C5_CA1BFFC2B137",
  "this.image_uid6E6644C6_76BC_7765_41DC_8FF9CCB29CDF_1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingTop": 0,
 "bodyPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "shadowVerticalLength": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window92172"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.57,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_639487F3_76BC_7123_41D4_455B61760FD9",
 "idleSequence": "this.sequence_639487F3_76BC_7123_41D4_455B61760FD9",
 "id": "camera_639497F3_76BC_7123_41CE_9008570725FC",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1217
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.1,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_638B980B_76BC_7EE3_41D0_AA674D31277C",
 "idleSequence": "this.sequence_638B980B_76BC_7EE3_41D0_AA674D31277C",
 "id": "camera_638BF80B_76BC_7EE3_41D2_2F7AFDFE799A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "initialPosition": {
  "yaw": 180,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -29.39
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6F3A05D7_76BC_7162_41B2_A4C94D22684D",
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B260765_7004_3F63_41A8_2586B2F3E074_camera",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.panorama_5823D74C_7017_4751_41AE_5E434A6C643A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5823D74C_7017_4751_41AE_5E434A6C643A_camera"
  },
  {
   "media": "this.panorama_58236A4A_7016_C951_41D7_DCAAA1375696",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58236A4A_7016_C951_41D7_DCAAA1375696_camera"
  },
  {
   "media": "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_camera"
  },
  {
   "media": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F_camera"
  },
  {
   "media": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83_camera"
  },
  {
   "media": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_camera"
  },
  {
   "media": "this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_camera"
  },
  {
   "media": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_camera"
  },
  {
   "media": "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_camera"
  },
  {
   "media": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C_camera"
  },
  {
   "media": "this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293_camera"
  },
  {
   "media": "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_camera"
  },
  {
   "media": "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87_camera"
  },
  {
   "media": "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_camera"
  },
  {
   "media": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_camera"
  },
  {
   "media": "this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_camera"
  },
  {
   "media": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_camera"
  },
  {
   "media": "this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_camera"
  },
  {
   "media": "this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_camera"
  },
  {
   "media": "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_camera"
  },
  {
   "media": "this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074_camera"
  },
  {
   "media": "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_camera"
  },
  {
   "media": "this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_camera"
  },
  {
   "media": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4_camera"
  },
  {
   "media": "this.panorama_7B262879_7004_7162_41DA_9F22050814F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B262879_7004_7162_41DA_9F22050814F9_camera"
  },
  {
   "media": "this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_camera"
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58",
   "end": "this.setComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, false, -1, this.effect_61515258_7250_AF2F_41D0_A87F97473332, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27); this.keepComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, false); this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB.set('playList', this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_AlbumPlayList); this.setComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, true, -1, this.effect_61516258_7250_AF2F_41D4_02C2654384CC, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D",
   "end": "this.setComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, false, -1, this.effect_61515258_7250_AF2F_41D0_A87F97473332, 'hideEffect', false); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0); this.keepComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, false); this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB.set('playList', this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_AlbumPlayList); this.setComponentVisibility(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB, true, -1, this.effect_61516258_7250_AF2F_41D4_02C2654384CC, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "playList": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_AlbumPlayList",
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D",
 "label": "Foto\u011fraf Alb\u00fcm\u00fc BAH\u00c7E",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B27C51D_7004_50A3_4187_E804E3372D87_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_43CD3850_700F_4971_41DA_E0DA15D65688",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_43CD3850_700F_4971_41DA_E0DA15D65688.ogg",
  "mp3Url": "media/audio_43CD3850_700F_4971_41DA_E0DA15D65688.mp3"
 },
 "data": {
  "label": "Video Project (1)"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_47D9FA32_7031_C931_41D9_1A4E7C173F1B",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_47D9FA32_7031_C931_41D9_1A4E7C173F1B.ogg",
  "mp3Url": "media/audio_47D9FA32_7031_C931_41D9_1A4E7C173F1B.mp3"
 },
 "data": {
  "label": "Video Project (1)"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Tepe G\u00f6z Site",
 "hfovMin": "120%",
 "id": "panorama_58236A4A_7016_C951_41D7_DCAAA1375696",
 "overlays": [
  "this.overlay_5C256F03_7033_48D7_41BB_E1436C9FCC17",
  "this.overlay_6556276A_7684_5122_41B9_69C01246DCD8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "items": [
  {
   "media": "this.panorama_5823D74C_7017_4751_41AE_5E434A6C643A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5823D74C_7017_4751_41AE_5E434A6C643A_camera"
  },
  {
   "media": "this.panorama_58236A4A_7016_C951_41D7_DCAAA1375696",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58236A4A_7016_C951_41D7_DCAAA1375696_camera"
  },
  {
   "media": "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_camera"
  },
  {
   "media": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F_camera"
  },
  {
   "media": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83_camera"
  },
  {
   "media": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_camera"
  },
  {
   "media": "this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_camera"
  },
  {
   "media": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_camera"
  },
  {
   "media": "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_camera"
  },
  {
   "media": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B213DF4_7004_5361_4191_449E83E3564C_camera"
  },
  {
   "media": "this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293_camera"
  },
  {
   "media": "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_camera"
  },
  {
   "media": "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87_camera"
  },
  {
   "media": "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_camera"
  },
  {
   "media": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_camera"
  },
  {
   "media": "this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_camera"
  },
  {
   "media": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_camera"
  },
  {
   "media": "this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_camera"
  },
  {
   "media": "this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_camera"
  },
  {
   "media": "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_camera"
  },
  {
   "media": "this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074_camera"
  },
  {
   "media": "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_camera"
  },
  {
   "media": "this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_camera"
  },
  {
   "media": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B2620E1_7004_7163_41D0_C541871224E4_camera"
  },
  {
   "media": "this.panorama_7B262879_7004_7162_41DA_9F22050814F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B262879_7004_7162_41DA_9F22050814F9_camera"
  },
  {
   "media": "this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_9_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_9",
 "width": 2752,
 "label": "Yatak odas\u0131",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_9.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.47,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6270C79A_76BC_71ED_41DB_BC20EB0C9573",
 "idleSequence": "this.sequence_6270C79A_76BC_71ED_41DB_BC20EB0C9573",
 "id": "camera_6270D79A_76BC_71ED_4193_3DBF46F9AC30",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_40F2E8F1_7013_4933_41D8_82E6C08E0D1B",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_40F2E8F1_7013_4933_41D8_82E6C08E0D1B.ogg",
  "mp3Url": "media/audio_40F2E8F1_7013_4933_41D8_82E6C08E0D1B.mp3"
 },
 "data": {
  "label": "Video Project (2)"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_6_t.png",
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_6",
 "width": 1376,
 "label": "Koridor",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_63DF6E01_7251_F721_41DA_8E551AD85F58_6.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_3_t.png",
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_3",
 "width": 2752,
 "label": "Giri\u015f hol\u00fc",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_3.png"
   }
  ]
 },
 "height": 1536
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.22,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6F729650_76BC_737D_41D4_AD6AAD61511B",
 "idleSequence": "this.sequence_6F729650_76BC_737D_41D4_AD6AAD61511B",
 "id": "camera_6F72E650_76BC_737D_41CA_B7B94374387B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1217
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 160.9,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63A0E85C_76BC_7F66_41AE_D35300040606",
 "idleSequence": "this.sequence_63A0E85C_76BC_7F66_41AE_D35300040606",
 "id": "camera_63A0F85C_76BC_7F66_41DC_B6D23FAB34BD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.14,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63B74834_76BC_7F25_41C5_5EC1BCC0AB81",
 "idleSequence": "this.sequence_63B74834_76BC_7F25_41C5_5EC1BCC0AB81",
 "id": "camera_63B75834_76BC_7F25_41DC_F761F1D5E4E2",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47A6A571_700E_DB33_4182_73E04B81DB8C_t.jpg",
 "id": "photo_47A6A571_700E_DB33_4182_73E04B81DB8C",
 "width": 3024,
 "label": "IMG_1995(1)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47A6A571_700E_DB33_4182_73E04B81DB8C.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47B11CD9_7011_4973_41D2_825612C7914C_t.jpg",
 "id": "photo_47B11CD9_7011_4973_41D2_825612C7914C",
 "width": 3024,
 "label": "IMG_1988",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47B11CD9_7011_4973_41D2_825612C7914C.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B21B51C_7004_D0A1_41CF_228567471D83_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_5EA91F2A_703E_C8D1_41C9_66A024022271",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_5EA91F2A_703E_C8D1_41C9_66A024022271.ogg",
  "mp3Url": "media/audio_5EA91F2A_703E_C8D1_41C9_66A024022271.mp3"
 },
 "data": {
  "label": "Video Project (3)"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.43,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -14.69
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_63EB38C5_76BC_7F67_41B4_598EA766FB81",
 "idleSequence": "this.sequence_63EB38C5_76BC_7F67_41B4_598EA766FB81",
 "id": "camera_63EB08C5_76BC_7F67_4196_7E09AAAB981B",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_5823D74C_7017_4751_41AE_5E434A6C643A_camera",
 "manualRotationSpeed": 1194,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "displayMovements": [
  {
   "duration": 2000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 5000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetHfov": 125,
   "targetStereographicFactor": 0,
   "targetPitch": 0
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.94,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -19.84
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_631298F1_76BC_7F3E_41DC_3D4B2BD4BEE0",
 "idleSequence": "this.sequence_631298F1_76BC_7F3E_41DC_3D4B2BD4BEE0",
 "id": "camera_6312E8F1_76BC_7F3E_41DC_4468A9DF7F71",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1187
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47B21234_7011_5931_41C5_D03543769FE8_t.jpg",
 "id": "photo_47B21234_7011_5931_41C5_D03543769FE8",
 "width": 4032,
 "label": "IMG_1986",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47B21234_7011_5931_41C5_D03543769FE8.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_4796343A_7011_3931_41D3_EE7BC4498E68_t.jpg",
 "id": "photo_4796343A_7011_3931_41D3_EE7BC4498E68",
 "width": 3024,
 "label": "IMG_1993",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_4796343A_7011_3931_41D3_EE7BC4498E68.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B2620E1_7004_7163_41D0_C541871224E4_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1235
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 35.27,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_6FD0552E_76BC_7122_41DD_65327DD08B55",
 "idleSequence": "this.sequence_6FD0552E_76BC_7122_41DD_65327DD08B55",
 "id": "camera_6FD0B52E_76BC_7122_41BD_BBCD39C8C4FE",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1183
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47A78FBE_700E_C731_41C2_F91EE2423C80_t.jpg",
 "id": "photo_47A78FBE_700E_C731_41C2_F91EE2423C80",
 "width": 3024,
 "label": "IMG_1994",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47A78FBE_700E_C731_41C2_F91EE2423C80.jpg"
   }
  ]
 },
 "height": 4032
},
{
 "initialPosition": {
  "yaw": 61.71,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -30.86
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6FFF2557_76BC_7163_41BE_E0AEB7D57FBD",
 "manualRotationSpeed": 1200
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_65B9C179_7250_ADE1_41D9_16233ED71A97_t.png",
 "id": "photo_65B9C179_7250_ADE1_41D9_16233ED71A97",
 "width": 1376,
 "label": "Mutfak",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_65B9C179_7250_ADE1_41D9_16233ED71A97.png"
   }
  ]
 },
 "height": 768
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_5DB82C8A_700E_C9D1_41D7_3D9010E3A119_t.jpg",
 "id": "photo_5DB82C8A_700E_C9D1_41D7_3D9010E3A119",
 "width": 1155,
 "label": "preview_ikonia-dugun-ve-toplanti-merkezi_PPLVe447",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_5DB82C8A_700E_C9D1_41D7_3D9010E3A119.jpeg"
   }
  ]
 },
 "height": 768
},
{
 "initialPosition": {
  "yaw": 71.27,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -25.71
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_635A395C_76BC_7166_4196_CDE37FFF5752",
 "manualRotationSpeed": 1200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Bah\u00e7e",
 "hfovMin": "150%",
 "id": "panorama_7B210CD1_7004_31A2_41BE_088283ED903F",
 "overlays": [
  "this.overlay_539B23A4_7011_5FD1_41C8_B09D74CAE71C",
  "this.overlay_5403940A_7017_F8D1_41B6_8290CDB26902",
  "this.overlay_54D23A88_7011_49D1_41CB_21E096435CC1",
  "this.overlay_5A4734C2_7013_7951_41DB_65C2038EB30C",
  "this.overlay_5AD005E2_7011_3B51_41BC_CF22D763BD1E",
  "this.overlay_5ABA9072_7013_F931_41B0_2F20F8B1D1A7",
  "this.overlay_5AF7A513_7012_F8F7_41D2_6BBECF519952",
  "this.overlay_5D640381_7011_3FD3_41D5_27885303B904",
  "this.overlay_5D10EBC2_7011_4F51_41BE_8966FEC23444",
  "this.overlay_5D9AA7BF_7031_472F_41AA_B2909B2F3792",
  "this.overlay_43B2A7AC_7011_C7D1_41B9_2EF21A19782D",
  "this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F_tcap0",
  "this.overlay_472E4141_7073_3B53_41D2_F9243B9E2F0F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58236A4A_7016_C951_41D7_DCAAA1375696"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_47A982D2_7011_7971_41C9_D484A1716E46_t.jpg",
 "id": "photo_47A982D2_7011_7971_41C9_D484A1716E46",
 "width": 4032,
 "label": "IMG_1989",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_47A982D2_7011_7971_41C9_D484A1716E46.jpg"
   }
  ]
 },
 "height": 3024
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Balkon",
 "hfovMin": "150%",
 "id": "panorama_7B260765_7004_3F63_41A8_2586B2F3E074",
 "overlays": [
  "this.overlay_6C32C789_7011_47D3_41DB_DCE52E7ED706",
  "this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7B210CD1_7004_31A2_41BE_088283ED903F_camera",
 "timeToIdle": 5000,
 "manualRotationSpeed": 1189
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Bah\u00e7e",
 "hfovMin": "150%",
 "id": "panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C",
 "overlays": [
  "this.overlay_576467DA_7012_C771_41D9_5AC37BF13A17",
  "this.overlay_58222CAF_7013_C92F_41A1_8A65C406D12F",
  "this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_tcap0",
  "this.overlay_4619356A_7071_FB51_41AB_97F87174D67A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_t.jpg",
 "class": "Panorama",
 "hfovMax": 135
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#CCCCCC",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000099",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#000099",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "verticalAlign": "top",
 "bottom": "0%",
 "height": "12.832%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Gayrimenkul Hakk\u0131nda"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "width": 573,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": 20,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 116,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Sanal Turlar"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "KONUM"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "ALB\u00dcM"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "\u0130LET\u0130\u015e\u0130M"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.14,
   "yaw": -131.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -67.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A, this.camera_631EB8DD_76BC_7F67_41CF_47E563C83186); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_409195A8_7012_DBD1_41CF_9088A745451C",
   "pitch": -67.58,
   "hfov": 13.14,
   "yaw": -131.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E91ADD9_7031_CB73_41C7_AFBF1A48F6DA",
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.73,
   "yaw": -50.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -58.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5217F104_7011_D8D1_41B1_BEC3029011EC",
   "pitch": -58.12,
   "hfov": 20.73,
   "yaw": -50.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6AE515F9_7071_3B33_41C5_962B06AAFBE8",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_624AA731_76BC_713E_41C8_42166FF05303",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.65,
   "yaw": -33.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -60.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_52154104_7011_D8D1_41D2_07AD4854A8E9",
   "pitch": -60.29,
   "hfov": 15.65,
   "yaw": -33.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6783FE91_7077_49F3_41CB_87A7F0AB4247",
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.71,
   "yaw": 29.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52151104_7011_D8D1_41C7_CE034BD8FC2E",
   "pitch": -37.33,
   "hfov": 24.71,
   "yaw": 29.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67DB639C_7071_5FF1_41D2_BB3FAAD20058",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.07,
   "yaw": 8.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -7.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 15, this.audio_40EC4984_7013_4BD1_41D3_9B515A52EAF7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_0_HS_2_0.png",
      "width": 364,
      "class": "ImageResourceLevel",
      "height": 392
     }
    ]
   },
   "pitch": -7.79,
   "yaw": 8.7,
   "distance": 50
  }
 ],
 "id": "overlay_439FF0D4_70F1_5971_41BE_74ECECBF05A9",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5D744B54_700F_4F71_4190_60F5ADE43C32",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0130konia Garden D\u00fc\u011f\u00fcn ve Kongre Merkezi</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText90753"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid6E66D4BE_76BC_7725_41D4_C9DF44BDFF4F_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_5DB82C8A_700E_C9D1_41D7_3D9010E3A119.jpeg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10924"
 },
 "shadow": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63CAC885_76BC_7FE7_41DC_A99E70CB1D88",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F432637_76BC_7322_41D6_799DF682B766",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_626B87B2_76BC_713D_41CF_A1DFD3FFC508",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.78,
   "yaw": -93.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F, this.camera_63C1689D_76BC_7FE7_4196_12BB683DD2A5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4088B5A8_7012_DBD1_41D4_3AB4839A2D6C",
   "pitch": -24.28,
   "hfov": 35.78,
   "yaw": -93.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57E906F6_7016_D931_41D3_2A4C53202A62",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.49,
   "yaw": 39.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 36.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4912C005_7031_38D3_41C7_16A68D9F6703",
   "pitch": 36.36,
   "hfov": 35.49,
   "yaw": 39.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C9A9EA1_703F_49D3_41D1_558BAACAE313",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63D7486C_76BC_7F26_41D4_66256BA2EAA6",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6FF2056F_76BC_7123_41CB_6A4B285FB432",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_62547709_76BC_72EF_41C3_35D5CC952997",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F1395AF_76BC_7122_41BD_835AD4AF395E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63BEF81B_76BC_7EE3_41C9_8297FB10291D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.28,
   "yaw": -33.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7, this.camera_62778789_76BC_71EE_41D3_1B066317389A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5215D104_7011_D8D1_41C8_0AE6F7985DA6",
   "pitch": -18.86,
   "hfov": 6.28,
   "yaw": -33.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_661D9F67_700E_C75F_41B0_42F8B15F7E7E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.44,
   "yaw": 12.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87, this.camera_6270D79A_76BC_71ED_4193_3DBF46F9AC30); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52158104_7011_D8D1_41A0_0470E2D3C661",
   "pitch": -17.99,
   "hfov": 5.44,
   "yaw": 12.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66D3FB5D_7071_4F73_41CF_F91E30207886",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.62,
   "yaw": 154.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7, this.camera_626B97B2_76BC_713D_41D8_7EC89DDD5808); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52165104_7011_D8D1_41A2_61A0478D20A8",
   "pitch": -16.99,
   "hfov": 9.62,
   "yaw": 154.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66F0E505_7073_58D3_41B2_2CDD4CE1A9A5",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.44,
   "yaw": 1.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698, this.camera_6333E92C_76BC_7125_41C2_AAC377B7A429); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5215C104_7011_D8D1_41DA_37F7ED4DE6A1",
   "pitch": -46.52,
   "hfov": 16.44,
   "yaw": 1.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68D45C45_7071_4953_41D0_6DB35AC7AE60",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.78,
   "yaw": -42.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3, this.camera_6327C944_76BC_7165_41C8_39AB95C59920); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_52167104_7011_D8D1_41C8_7EE743B0619D",
   "pitch": -56.19,
   "hfov": 19.78,
   "yaw": -42.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_688F8F04_707F_C8D1_41D9_23FDFD67E59F",
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.19,
   "yaw": -108.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B211FF2_7004_2F61_41BD_F97E313F7365, this.camera_6312E8F1_76BC_7F3E_41DC_4468A9DF7F71); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52160104_7011_D8D1_41D1_443699950781",
   "pitch": -56.38,
   "hfov": 18.19,
   "yaw": -108.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6957514B_7071_3B57_41C3_D675EF5E9152",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.96,
   "yaw": -173.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B2620E1_7004_7163_41D0_C541871224E4, this.camera_633C691C_76BC_7EE5_41D2_EEAEBE46F320); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5216B104_7011_D8D1_41D3_5507CB20C3E8",
   "pitch": -39.83,
   "hfov": 23.96,
   "yaw": -173.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_69B87D7C_7071_4B31_41D0_B16D633E0BB2",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.53,
   "yaw": -11.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 47.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE, this.camera_63086904_76BC_7EE5_41DB_DA7C33B029D1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_409645A8_7012_DBD1_41D7_720AD23B3FD0",
   "pitch": 47.11,
   "hfov": 8.53,
   "yaw": -11.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_50F7A3B4_7033_3F31_415D_6F6BBD6EDDEA",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.54,
   "yaw": -75.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 16, this.audio_40EE6A12_7013_48F1_41B8_F4343E0B1F21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0_HS_5_0.png",
      "width": 373,
      "class": "ImageResourceLevel",
      "height": 392
     }
    ]
   },
   "pitch": -9.09,
   "yaw": -75.38,
   "distance": 50
  }
 ],
 "id": "overlay_42C26F5C_70F1_4771_41CD_CB90B08887B2",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.73,
   "yaw": -33.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D, this.camera_63B75834_76BC_7F25_41DC_F761F1D5E4E2); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4093B5A8_7012_DBD1_41BE_F190665E0C9E",
   "pitch": -5.75,
   "hfov": 8.73,
   "yaw": -33.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_512C41B7_7031_DB3F_41B3_66BE5D26CFBD",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.63,
   "yaw": 20.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C, this.camera_638BF80B_76BC_7EE3_41D2_2F7AFDFE799A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_409345A8_7012_DBD1_41D8_6A4A50C9806E",
   "pitch": -11.82,
   "hfov": 18.63,
   "yaw": 20.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_51D16D8F_700F_4BEF_41BA_61CDFDE13369",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.76,
   "yaw": -82.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B210CD1_7004_31A2_41BE_088283ED903F, this.camera_63BEC81B_76BC_7EE3_41C2_B69E697DAB22); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408CF5A8_7012_DBD1_41C6_38AFB0945242",
   "pitch": -16.46,
   "hfov": 24.76,
   "yaw": -82.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5250AC1F_700F_48EF_4198_CD8D549E5D3F",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "y": "0.54",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.29",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "y": "0.62",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.70",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_63DF6E01_7251_F721_41DA_8E551AD85F58_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_63DF6E01_7251_F721_41DA_8E551AD85F58_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6333892C_76BC_7125_41C4_35E7A3B9855D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.48,
   "yaw": -20.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_526A8104_7011_D8D1_41D0_3D490A7E1360",
   "pitch": -54.34,
   "hfov": 28.48,
   "yaw": -20.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62A10982_7011_4BD1_41D5_282D2B65E695",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B26358D_7004_73A2_41B7_7DD26142E293_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63C1189D_76BC_7FE7_41BA_4A5BE71D631D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.91,
   "yaw": -108.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -58.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_409125A8_7012_DBD1_41D2_B6E92ED11AD1",
   "pitch": -58.62,
   "hfov": 13.91,
   "yaw": -108.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F632DAB_7033_4BD7_41B8_7C2E2A7FAE2A",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.09,
   "yaw": -6.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B262879_7004_7162_41DA_9F22050814F9, this.camera_627DE771_76BC_713E_41D9_50E00D31F730); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4092D5A8_7012_DBD1_41CE_3D5B8494B7CA",
   "pitch": -40.53,
   "hfov": 17.09,
   "yaw": -6.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6FF1D516_7033_58F1_41CD_B0C54EE3E1F5",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.06,
   "yaw": 168.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3, this.camera_62400761_76BC_715E_41C1_C56BB153C190); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_33571D1E_73F1_CBAB_41BA_90D4DB73259E",
   "pitch": -48.94,
   "hfov": 20.06,
   "yaw": 168.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_456DB55D_7031_5B73_41C7_F7FC4E8CC42B",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B2620E1_7004_7163_41D0_C541871224E4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_48855C99_7031_49F3_41D2_04E66CEC6278",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_62460749_76BC_716E_41DA_2E5AAB124274",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_631EA8DD_76BC_7F67_41D2_FC07028C22DF",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "right": 30,
 "width": 49,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": 8,
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_5CA68D22_7033_48D1_41BB_77832823285C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "12%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Harmanc\u0131k Kapal\u0131 Pazar Yeri</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText79459"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid6E69F4BE_76BC_7725_41DC_BA67D6875258_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_5C02F4FC_7033_5931_41D6_33EAD7F7AEF8.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": false,
 "height": "87%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10923"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.27,
   "yaw": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C, this.camera_6F0695C7_76BC_7162_41CE_BB673FB45232); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408EA5A8_7012_DBD1_41D6_72F211E96154",
   "pitch": -4.86,
   "hfov": 10.27,
   "yaw": 5.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_548BA5E9_7013_5B53_41D7_1236E5146E89",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.86,
   "yaw": 49.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408E35A8_7012_DBD1_413E_77D9BD2B77B0",
   "pitch": -13.77,
   "hfov": 18.86,
   "yaw": 49.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_559B6180_701E_FBD1_41D3_D48C1C9E65E2",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.04,
   "yaw": -32.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C, this.camera_6F13E5AF_76BC_7122_41C4_CFB157D8C286); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408FF5A8_7012_DBD1_41D6_ECEEF48E8E28",
   "pitch": -14.67,
   "hfov": 18.04,
   "yaw": -32.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_56B35627_701E_D8DF_41D2_B058614A1EE3",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B21B51C_7004_D0A1_41CF_228567471D83_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -27.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_46F64DC9_7011_4B53_41C5_9F4BCF8A6391, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_33446D15_73F1_CBB9_4188_F4280C671D63",
   "pitch": 5.9,
   "hfov": 7.21,
   "yaw": -27.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47A9AC32_7012_C931_41A0_19949E6F7210",
 "data": {
  "label": "Info Red 01"
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_627D9771_76BC_713E_419A_BC8DD949F8C7",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F0685C7_76BC_7162_4102_ACA43F07A930",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 58.52,
   "yaw": 3.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3, this.camera_635A395C_76BC_7166_4196_CDE37FFF5752); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4093F5A8_7012_DBD1_41DB_E96AF4871D0B",
   "pitch": -23.8,
   "hfov": 58.52,
   "yaw": 3.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_50D0F716_7033_58F1_41DC_0E61B0BEF975",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63279944_76BC_7165_41C0_47961050B2D5",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.15,
   "yaw": -33.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B213DF4_7004_5361_4191_449E83E3564C, this.camera_63CD2885_76BC_7FE7_41C6_C420850F445A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_52148104_7011_D8D1_41C0_31208430A68F",
   "pitch": -52.06,
   "hfov": 21.15,
   "yaw": -33.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_659DB489_7011_79D0_41D3_5B1A9D42442E",
 "data": {
  "label": "Circle Arrow 01c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.31,
   "yaw": -109.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27C51D_7004_50A3_4187_E804E3372D87, this.camera_63D7586C_76BC_7F26_41BE_DF9CDCEBA06F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_52153104_7011_D8D1_41DB_084FBEF20DF9",
   "pitch": -41.91,
   "hfov": 27.31,
   "yaw": -109.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65E83448_7011_3951_41C8_F9760487AA7F",
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.58,
   "yaw": -138.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3, this.camera_63F4C8AD_76BC_7F27_41D2_2BED5A7D04CD); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52105104_7011_D8D1_419E_D98F67B7A04C",
   "pitch": -56.86,
   "hfov": 15.58,
   "yaw": -138.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C9C0D9D_700E_CBF3_41D3_42752A5CD919",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.66,
   "yaw": -20.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B260765_7004_3F63_41A8_2586B2F3E074, this.camera_63EB08C5_76BC_7F67_4196_7E09AAAB981B); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5210F104_7011_D8D1_41CD_FA25CF33FCD3",
   "pitch": -13.06,
   "hfov": 8.66,
   "yaw": -20.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C5212A9_700F_D9D3_41A7_2A94D4F19FCF",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.31,
   "yaw": -32.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7, this.camera_62461749_76BC_716E_41D1_A74AC5798333); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408C85A8_7012_DBD1_41D3_399A8D54238D",
   "pitch": -18.1,
   "hfov": 37.31,
   "yaw": -32.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_52829E9D_7013_C9F3_41D8_FE865D849D0D",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.1,
   "yaw": 148.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C, this.camera_624AB731_76BC_713E_41BC_7B4201292597); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408C15A8_7012_DBD1_41BD_6D984DDAB7C9",
   "pitch": -32.52,
   "hfov": 33.1,
   "yaw": 148.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_534D4C5E_7013_C971_41C2_51B801FFD270",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.94,
   "yaw": -32.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_526B8104_7011_D8D1_41C9_7768A96739F2",
   "pitch": -33.65,
   "hfov": 23.94,
   "yaw": -32.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_62E2355D_7011_FB73_41C4_461A3103BE51",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.08,
   "yaw": 122.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C, this.camera_62544709_76BC_72EF_41CF_265349A5B7B9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52142104_7011_D8D1_41BA_7644EE45040A",
   "pitch": -23.62,
   "hfov": 13.08,
   "yaw": 122.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_644BCF20_7013_48D1_41D0_CCCFB365115D",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.43,
   "yaw": -60.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D, this.camera_62501719_76BC_72EF_41D8_BC1BB991CE75); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5214B104_7011_D8D1_41D2_34A9967505B0",
   "pitch": -20.86,
   "hfov": 11.43,
   "yaw": -60.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63DC03F5_7011_FF33_41D9_050E5D7A7B02",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B27C51D_7004_50A3_4187_E804E3372D87_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6277B789_76BC_71EE_41D4_0238A05684CB",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63081904_76BC_7EE5_41AC_32E697B47ABE",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_639D37DA_76BC_716D_41D0_A0E16E78BC0C",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_46F41DC9_7011_4B53_4184_CA6FAF71266D",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Zincir \u00e7at\u0131 su tahliye dekoratifi</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText120978"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid6E6094C6_76BC_7765_41D2_94A05022859F_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_47A78FBE_700E_C731_41C2_F91EE2423C80.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10927"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton29918"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "width": 165,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton27247"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.32,
   "yaw": -84.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27CD2D_7004_50E3_41D6_265046B601B5, this.camera_6F1E7597_76BC_71E2_41DD_7DBAE3E22077); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_31B80672_70F3_D931_41AA_D9DA904D8C89",
   "pitch": -36.23,
   "hfov": 29.32,
   "yaw": -84.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_600B62ED_7012_D953_4196_FFF5657D2F40",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.21,
   "yaw": -41.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7, this.camera_6FF2656F_76BC_7123_41BC_8809374B477A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_31B8E672_70F3_D931_41C5_20708300C688",
   "pitch": -52.81,
   "hfov": 36.21,
   "yaw": -41.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60C525F4_7011_5B31_41A5_9FB09042A0A9",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.1,
   "yaw": 97.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C, this.camera_6FC7C547_76BC_7163_41C8_9BF6078F4677); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_526A6104_7011_D8D1_41C8_46C82929C8F8",
   "pitch": -47.7,
   "hfov": 31.1,
   "yaw": 97.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_603E9368_7011_3F51_41D7_5E163FC54A9E",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.99,
   "yaw": -171.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00, this.camera_6FE9557F_76BC_7123_41D8_A5445D1D1232); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_526A2104_7011_D8D1_41D1_15123C7D42F5",
   "pitch": -54.41,
   "hfov": 30.99,
   "yaw": -171.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6169299B_7013_4BF7_41D9_ABE344A1FE9E",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.71,
   "yaw": -107.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_1_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26358D_7004_73A2_41B7_7DD26142E293, this.camera_6FFF2557_76BC_7163_41BE_E0AEB7D57FBD); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_526AC104_7011_D8D1_41D0_FCF7260AE5D1",
   "pitch": -43.5,
   "hfov": 20.71,
   "yaw": -107.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64B1A8F4_7011_C931_4183_797D54F5AC42",
 "data": {
  "label": "Circle Arrow 01b Left"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B213DF4_7004_5361_4191_449E83E3564C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_625B06E8_76BC_732E_41D3_8E94A1D2C9F7",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.49,
   "yaw": -30.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -51.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3, this.camera_6F3A05D7_76BC_7162_41B2_A4C94D22684D); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52179104_7011_D8D1_41A8_DAB969599CA8",
   "pitch": -51.39,
   "hfov": 24.49,
   "yaw": -30.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B0C045A_7071_D971_41D1_81046EABD905",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.97,
   "yaw": 31.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_409255A8_7012_DBD1_41D7_E523887C57C0",
   "pitch": -39.86,
   "hfov": 16.97,
   "yaw": 31.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5173F328_7037_38D1_41D5_FDDD706987F2",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B262879_7004_7162_41DA_9F22050814F9_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.31,
   "yaw": 3.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B213DF4_7004_5361_4191_449E83E3564C, this.camera_639D07DA_76BC_716D_41DD_3868CF801288); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_31B9D671_70F3_D933_41D5_F795F2EB5548",
   "pitch": -33.42,
   "hfov": 25.31,
   "yaw": 3.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7EC38C7B_7011_C937_41D6_6A272502B8F2",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.94,
   "yaw": -91.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -60.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83, this.camera_626567CA_76BC_716D_41CE_21880D0752C4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_31B9B671_70F3_D933_41C1_EECEFB169D9A",
   "pitch": -60.45,
   "hfov": 19.94,
   "yaw": -91.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7E6AD0AF_7011_592F_41C6_C92D552EAA69",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.71,
   "yaw": -41.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -14.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 8, this.audio_40F2E8F1_7013_4933_41D8_82E6C08E0D1B)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0_HS_2_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 491
     }
    ]
   },
   "pitch": -14.31,
   "yaw": -41.75,
   "distance": 50
  }
 ],
 "id": "overlay_40B92D10_7011_48F1_41D6_6AF3BC0C7547",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63AAB84C_76BC_7F66_41C8_7862421F1E7E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6FC7F547_76BC_7163_41CA_4B9D138975A7",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F505620_76BC_72DD_41D5_5033F7675D08",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.54,
   "yaw": -11.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D, this.camera_63A0F85C_76BC_7F66_41DC_B6D23FAB34BD); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "K\u0131\u015f bah\u00e7esine ilerleyin"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_526B1104_7011_D8D1_41C2_BE893F5F4DA0",
   "pitch": -19.85,
   "hfov": 17.54,
   "yaw": -11.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6319357B_7011_3B37_41D1_663ACDC497A5",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.88,
   "yaw": -39.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B213DF4_7004_5361_4191_449E83E3564C, this.camera_63AA884C_76BC_7F66_4142_86AB52BC3F50); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_526BD104_7011_D8D1_41D0_16ECC69B918E",
   "pitch": -27.18,
   "hfov": 14.88,
   "yaw": -39.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64942725_700E_D8D3_41C8_2183FF11B654",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F211607_76BC_72E2_41BA_8B3D8E5D12E2",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_48E94157_7071_5B7F_41D8_A9B4B655F7CC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bah\u00e7e sulama \u00e7e\u015fmesi</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText125626"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid6F9E24CE_76BC_7765_41DB_D4A79ADF1914_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_4796DE14_7011_48F1_41DA_34E9B16479A9.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10928"
 },
 "shadow": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F2EF5F7_76BC_7122_41C1_B0E4D12B3634",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_626517CA_76BC_716D_41C0_1FFCBEF4373F",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_633C091C_76BC_7EE5_41DC_273BCB0E2A57",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_49FBA632_7073_5931_41AF_B7EECA2882D6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Elektrikli ara\u00e7 \u015fart istasyonu</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText123916"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid6E6234C6_76BC_7765_41DB_6EEF47043C47_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_47998654_700E_F971_4146_D3CD3E11C7FC.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10926"
 },
 "shadow": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_62500719_76BC_72EF_41BD_F1D650157994",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6FE9457F_76BC_7123_4185_C6B380B92BFE",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F1E6597_76BC_71E2_41AA_C1FB4A55A1D9",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.95,
   "yaw": -8.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_0_1_0_map.gif",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -37.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7, this.camera_639497F3_76BC_7123_41CE_9008570725FC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sanal Tur i\u00e7in \u0130lerleyin"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.95,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_0_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 572
     }
    ]
   },
   "pitch": -37.28,
   "yaw": -8.25,
   "distance": 50
  }
 ],
 "id": "overlay_5A1D04E4_7011_5951_41D7_A3C6B7E5E159",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.65,
   "yaw": -54.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_5CA67D22_7033_48D1_41B7_5ECDF67ABDBA, 5000, false); this.playGlobalAudio(this.audio_47987324_7032_D8D1_41BF_CDFE66060C26)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Harmanc\u0131k kapal\u0131 pazar yeri"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A1D4850_7031_4971_41C7_D15DC2B9ACDF",
   "pitch": -48.83,
   "hfov": 7.65,
   "yaw": -54.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5A24EEDB_7031_4977_41DA_06A3580B8672",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.12,
   "yaw": 16.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_5D75BB53_700F_4F77_41A5_B700518A7FC2, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_491F7002_7031_38D1_41D9_04C7592ECE2D",
   "pitch": -16.29,
   "hfov": 6.12,
   "yaw": 16.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C53E028_700F_38D1_4182_12FCF8534382",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.87,
   "yaw": -5.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_40DF9E11_7011_C8F3_41D6_34E694CA41D9, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_49100003_7031_38D7_41DB_CEB08321C8FE",
   "pitch": -6.63,
   "hfov": 4.87,
   "yaw": -5.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41400D9A_7011_4BF1_41B6_D07B3AF11A5F",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.02,
   "yaw": -92.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_4_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_4_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "pitch": -36.1,
   "hfov": 19.02,
   "yaw": -92.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C97F976_700E_CB31_41D8_5DE65EC2981E",
 "data": {
  "label": "Hat\u0131p Caddesi"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.09,
   "yaw": -5.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_33428D12_73F1_CBBB_41DA_02AD5923BFD2",
   "pitch": -37.87,
   "hfov": 22.09,
   "yaw": -5.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C76DD0A_7031_48D1_41B3_1B32A5CE532A",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.75,
   "yaw": 103.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_6_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_6_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "pitch": -22.51,
   "hfov": 21.75,
   "yaw": 103.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5CFF7DA5_7033_4BD3_41CD_F2E0DDDAB177",
 "data": {
  "label": "Hat\u0131p Caddesi"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.54,
   "yaw": -95.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -51.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B2620E1_7004_7163_41D0_C541871224E4, this.camera_6F2EC5F7_76BC_7122_41DB_A0FF432B4F11); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_409045A8_7012_DBD1_41CE_D96EA12C26F4",
   "pitch": -51.61,
   "hfov": 17.54,
   "yaw": -95.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E40B6FA_7031_3931_41C4_FFDF637B6D27",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.65,
   "yaw": -3.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26C829_7004_50E3_41DA_E786D311DDA2, this.camera_6F216607_76BC_72E2_41A2_521DFE9FEEAA); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4091D5A8_7012_DBD1_41C5_E4450A4949A2",
   "pitch": -56.93,
   "hfov": 17.65,
   "yaw": -3.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E3F5B19_703F_C8F3_41D2_06057A49A4F4",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6FDB1516_76BC_76E2_41D5_57410EA1C73D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_40DC7E12_7011_C8F1_41C5_CA1BFFC2B137",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Necip Faz\u0131l K\u0131sak\u00fcrek \u0130mam Hatip Ortaokulu</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText92173"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid6E6644C6_76BC_7765_41DC_8FF9CCB29CDF_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_420E4621_7011_38D3_41C1_3D3E0CC2D30B.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "propagateClick": false,
 "height": "89%",
 "minWidth": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10925"
 },
 "shadow": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_639487F3_76BC_7123_41D4_455B61760FD9",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_638B980B_76BC_7EE3_41D0_AA674D31277C",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "items": [
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.66",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.57",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.68",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.66",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "y": "0.71",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_602F3CF3_7277_74E1_41DB_B51EF2EE8C8D_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.34,
   "yaw": 93.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0_HS_0_0.png",
      "width": 449,
      "class": "ImageResourceLevel",
      "height": 396
     }
    ]
   },
   "pitch": -54.98,
   "yaw": 93.1,
   "distance": 50
  }
 ],
 "id": "overlay_5C256F03_7033_48D7_41BB_E1436C9FCC17",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 93.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -63.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_65444EBB_7684_3322_41B1_2DD302271A2A",
   "pitch": -63.43,
   "hfov": 7.58,
   "yaw": 93.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6556276A_7684_5122_41B9_69C01246DCD8",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6270C79A_76BC_71ED_41DB_BC20EB0C9573",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6F729650_76BC_737D_41D4_AD6AAD61511B",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63A0E85C_76BC_7F66_41AE_D35300040606",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63B74834_76BC_7F25_41C5_5EC1BCC0AB81",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_63EB38C5_76BC_7F67_41B4_598EA766FB81",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_631298F1_76BC_7F3E_41DC_3D4B2BD4BEE0",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_6FD0552E_76BC_7122_41DD_65327DD08B55",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.17,
   "yaw": -54.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7, this.camera_6F72E650_76BC_737D_41CA_B7B94374387B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_49120005_7031_38D3_41DC_2FBC93308954",
   "pitch": -35.4,
   "hfov": 21.17,
   "yaw": -54.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_539B23A4_7011_5FD1_41C8_B09D74CAE71C",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.89,
   "yaw": -151.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7, this.camera_625B16E8_76BC_732E_41A6_6DD0CB1C021D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408D45A8_7012_DBD1_41D5_DAD5A6FB2E80",
   "pitch": -17.07,
   "hfov": 20.89,
   "yaw": -151.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5403940A_7017_F8D1_41B6_8290CDB26902",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.63,
   "yaw": 107.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83, this.camera_6F433637_76BC_7322_41D2_D4D7F88DF7E3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4913A006_7031_38D1_41BE_4FC07C04EF08",
   "pitch": -25.83,
   "hfov": 18.63,
   "yaw": 107.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54D23A88_7011_49D1_41CB_21E096435CC1",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.91,
   "yaw": 107.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_3_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ]
   },
   "pitch": -25.81,
   "yaw": 107.06,
   "distance": 50
  }
 ],
 "id": "overlay_5A4734C2_7013_7951_41DB_65C2038EB30C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.81,
   "yaw": 107.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_49130006_7031_38D1_41D1_C3A6D892909E",
   "pitch": -25.68,
   "hfov": 16.81,
   "yaw": 107.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AD005E2_7011_3B51_41BC_CF22D763BD1E",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.05,
   "yaw": -54.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_5_0_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_5_0.png",
      "width": 281,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -35.3,
   "yaw": -54.37,
   "distance": 50
  }
 ],
 "id": "overlay_5ABA9072_7013_F931_41B0_2F20F8B1D1A7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.48,
   "yaw": -54.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_6_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_49137006_7031_38D1_41D7_9CEF6E674C91",
   "pitch": -35.26,
   "hfov": 15.48,
   "yaw": -54.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AF7A513_7012_F8F7_41D2_6BBECF519952",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16,
   "yaw": -151.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_7_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_7_0.png",
      "width": 274,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": -17.21,
   "yaw": -151.3,
   "distance": 50
  }
 ],
 "id": "overlay_5D640381_7011_3FD3_41D5_27885303B904",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.83,
   "yaw": -150.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_8_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4914F007_7031_38DF_41C6_AA9964A0A8C3",
   "pitch": -17.04,
   "hfov": 17.83,
   "yaw": -150.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5D10EBC2_7011_4F51_41BE_8966FEC23444",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.82,
   "yaw": 113.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58236A4A_7016_C951_41D7_DCAAA1375696, this.camera_6F50B620_76BC_72DD_41DA_3FE15EB18B37); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_49142007_7031_38DF_41DB_1316421B851D",
   "pitch": 27.8,
   "hfov": 10.82,
   "yaw": 113.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5D9AA7BF_7031_472F_41AA_B2909B2F3792",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.29,
   "yaw": 149.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_47D9FA32_7031_C931_41D9_1A4E7C173F1B)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tan\u0131t\u0131m i\u00e7in T\u0131klay\u0131n\u0131z"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_11_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ]
   },
   "pitch": 1.35,
   "yaw": 149.59,
   "distance": 50
  }
 ],
 "id": "overlay_43B2A7AC_7011_C7D1_41B9_2EF21A19782D",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B210CD1_7004_31A2_41BE_088283ED903F_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.47,
   "yaw": 160.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_49F9F62E_7073_58D1_41C5_A6F068B8F205, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3346BD14_73F1_CBBF_41DB_DD9BECDF3F97",
   "pitch": -4.66,
   "hfov": 6.47,
   "yaw": 160.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_472E4141_7073_3B53_41D2_F9243B9E2F0F",
 "data": {
  "label": "Info Red 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.1,
   "yaw": -98.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5210A104_7011_D8D1_41CA_B72132181A68",
   "pitch": -46.49,
   "hfov": 16.1,
   "yaw": -98.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C32C789_7011_47D3_41DB_DCE52E7ED706",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B260765_7004_3F63_41A8_2586B2F3E074_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.12,
   "yaw": -11.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B21B51C_7004_D0A1_41CF_228567471D83, this.camera_6FDB6516_76BC_76E2_41CF_F7D820FA300A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_408F65A8_7012_DBD1_41B2_09463A5E71FB",
   "pitch": -32.45,
   "hfov": 33.12,
   "yaw": -11.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_576467DA_7012_C771_41D9_5AC37BF13A17",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.31,
   "yaw": -84.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE, this.camera_6FD0B52E_76BC_7122_41BD_BBCD39C8C4FE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_31B96671_70F3_D933_41DC_01C7F8F56C91",
   "pitch": -14.47,
   "hfov": 26.31,
   "yaw": -84.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58222CAF_7013_C92F_41A1_8A65C406D12F",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "inertia": false,
 "hfov": 28.5,
 "class": "TripodCapPanoramaOverlay",
 "distance": 49.17,
 "rotate": false,
 "id": "panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.05,
   "yaw": -31.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_48E8B157_7071_5B7F_41D3_5B7DCD34D0E3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_334ACD16_73F1_CBBB_41D2_BFEE73132F7C",
   "pitch": -9.09,
   "hfov": 6.05,
   "yaw": -31.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4619356A_7071_FB51_41AB_97F87174D67A",
 "data": {
  "label": "Info Red 04"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "verticalAlign": "middle",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.46,
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 5,
 "width": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#006699",
 "backgroundOpacity": 0.88,
 "overflow": "scroll",
 "shadowOpacity": 0.5,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.18,
  0.43,
  0.55,
  0.61,
  0.71,
  0.76
 ],
 "propagateClick": false,
 "class": "Container",
 "top": 20,
 "borderColor": "#2289B9",
 "scrollBarWidth": 10,
 "height": 90,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
 ],
 "borderSize": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "scrollBarColor": "#2289B9",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "green block"
 },
 "shadowBlurRadius": 10,
 "shadowSpread": 1
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Otama.ep",
 "horizontalAlign": "left",
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 28,
 "width": 481.6,
 "textShadowVerticalLength": 0,
 "textShadowColor": "#FFFFFF",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": "Aydın Satıyor",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": 5,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "height": 95.6,
 "minWidth": 1,
 "fontSize": 80,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#2289B9"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Otama.ep",
 "horizontalAlign": "left",
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 28,
 "width": 287,
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": "Villa Lavin",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Label",
 "top": 82,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "height": 37,
 "minWidth": 1,
 "fontSize": 30,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "10%",
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
  "this.Container_1813FA3E_1663_8BF1_4180_5027A2A87866"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "10%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer",
  "this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.01,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "right": "15%",
 "shadowOpacity": 0.02,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "10%",
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "10%",
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26C829_7004_50E3_41DA_E786D311DDA2_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_409195A8_7012_DBD1_41CF_9088A745451C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B267F4B_7005_F0A7_41CF_62DE45E79698_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_5217F104_7011_D8D1_41B1_BEC3029011EC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52154104_7011_D8D1_41D2_07AD4854A8E9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2636B8_7005_D1E1_41D9_C993498D9D00_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_52151104_7011_D8D1_41C7_CE034BD8FC2E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_4088B5A8_7012_DBD1_41D4_3AB4839A2D6C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B219006_7004_D0AE_41AB_20E7630F3EB7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_4912C005_7031_38D3_41C7_16A68D9F6703",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5215D104_7011_D8D1_41C8_0AE6F7985DA6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_52158104_7011_D8D1_41A0_0470E2D3C661",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27F5B0_7004_33E1_41CA_BC9477014A4D_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_52165104_7011_D8D1_41A2_61A0478D20A8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_5215C104_7011_D8D1_41DA_37F7ED4DE6A1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52167104_7011_D8D1_41C8_7EE743B0619D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52160104_7011_D8D1_41D1_443699950781",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_5216B104_7011_D8D1_41D3_5507CB20C3E8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B265ED5_7005_D1A3_41B4_643DF55333F3_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_409645A8_7012_DBD1_41D7_720AD23B3FD0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4093B5A8_7012_DBD1_41BE_F190665E0C9E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_409345A8_7012_DBD1_41D8_6A4A50C9806E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26CAAC_7004_51E1_41D3_2B0A42D514F7_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408CF5A8_7012_DBD1_41C6_38AFB0945242",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26358D_7004_73A2_41B7_7DD26142E293_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_526A8104_7011_D8D1_41D0_3D490A7E1360",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_409125A8_7012_DBD1_41D2_B6E92ED11AD1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_4092D5A8_7012_DBD1_41CE_3D5B8494B7CA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2620E1_7004_7163_41D0_C541871224E4_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_33571D1E_73F1_CBAB_41BA_90D4DB73259E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_408EA5A8_7012_DBD1_41D6_72F211E96154",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408E35A8_7012_DBD1_413E_77D9BD2B77B0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408FF5A8_7012_DBD1_41D6_ECEEF48E8E28",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21B51C_7004_D0A1_41CF_228567471D83_0_HS_3_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_33446D15_73F1_CBB9_4188_F4280C671D63",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26C0C2_7004_51A1_41A6_8051418F6CCE_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_4093F5A8_7012_DBD1_41DB_E96AF4871D0B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52148104_7011_D8D1_41C0_31208430A68F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27CD2D_7004_50E3_41D6_265046B601B5_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52153104_7011_D8D1_41DB_084FBEF20DF9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52105104_7011_D8D1_419E_D98F67B7A04C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B211FF2_7004_2F61_41BD_F97E313F7365_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5210F104_7011_D8D1_41CD_FA25CF33FCD3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408C85A8_7012_DBD1_41D3_399A8D54238D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B2683FB_7004_3767_41CA_A56EF5103BEE_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408C15A8_7012_DBD1_41BD_6D984DDAB7C9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_526B8104_7011_D8D1_41C9_7768A96739F2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_52142104_7011_D8D1_41BA_7644EE45040A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27C51D_7004_50A3_4187_E804E3372D87_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5214B104_7011_D8D1_41D2_34A9967505B0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_31B80672_70F3_D931_41AA_D9DA904D8C89",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_31B8E672_70F3_D931_41C5_20708300C688",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_526A6104_7011_D8D1_41C8_46C82929C8F8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_526A2104_7011_D8D1_41D1_15123C7D42F5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B213DF4_7004_5361_4191_449E83E3564C_1_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_526AC104_7011_D8D1_41D0_FCF7260AE5D1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26874E_7005_D0A1_41D1_8414C7CCFAB3_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_52179104_7011_D8D1_41A8_DAB969599CA8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B262879_7004_7162_41DA_9F22050814F9_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_409255A8_7012_DBD1_41D7_E523887C57C0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_31B9D671_70F3_D933_41D5_F795F2EB5548",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7BE8B62D_7004_50E3_41D8_9A89DCA7487C_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_31B9B671_70F3_D933_41C1_EECEFB169D9A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_526B1104_7011_D8D1_41C2_BE893F5F4DA0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B27ED84_7004_73A1_41CC_6D36D56E33D7_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_526BD104_7011_D8D1_41D0_16ECC69B918E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_1_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_5A1D4850_7031_4971_41C7_D15DC2B9ACDF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_491F7002_7031_38D1_41D9_04C7592ECE2D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_49100003_7031_38D7_41DB_CEB08321C8FE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5823D74C_7017_4751_41AE_5E434A6C643A_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_33428D12_73F1_CBBB_41DA_02AD5923BFD2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_409045A8_7012_DBD1_41CE_D96EA12C26F4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B26BFF9_7004_2F63_41CA_2246E73E422A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_4091D5A8_7012_DBD1_41C5_E4450A4949A2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_58236A4A_7016_C951_41D7_DCAAA1375696_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_65444EBB_7684_3322_41B1_2DD302271A2A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_49120005_7031_38D3_41DC_2FBC93308954",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408D45A8_7012_DBD1_41D5_DAD5A6FB2E80",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_4913A006_7031_38D1_41BE_4FC07C04EF08",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_49130006_7031_38D1_41D1_C3A6D892909E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_49137006_7031_38D1_41D7_9CEF6E674C91",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_4914F007_7031_38DF_41C6_AA9964A0A8C3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_49142007_7031_38DF_41DB_1316421B851D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B210CD1_7004_31A2_41BE_088283ED903F_0_HS_12_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_3346BD14_73F1_CBBF_41DB_DD9BECDF3F97",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B260765_7004_3F63_41A8_2586B2F3E074_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_5210A104_7011_D8D1_41CA_B72132181A68",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_408F65A8_7012_DBD1_41B2_09463A5E71FB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_31B96671_70F3_D933_41DC_01C7F8F56C91",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7B21ADDF_7004_D35F_41DA_C868A09F4D7C_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_334ACD16_73F1_CBBB_41D2_BFEE73132F7C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "width": 110,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "iconHeight": 0,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "B\u0130LG\u0130",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Gayrimenkul Hakk\u0131nda"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 130,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "SANAL TUR",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Sanal turlar"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "KONUM",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Konum"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "width": 103,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "KATPLANI",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "backgroundOpacity": 0,
 "width": 112,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "A\u0130 ALB\u00dcM ",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Alb\u00fcm"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "\u0130LET\u0130\u015e\u0130M",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "\u0130leti\u015fim"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 90,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "height": "83.342%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarColor": "#BBD149",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#A2B935",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "bold",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#A2B935",
 "itemLabelFontFamily": "Times New Roman",
 "rollOverItemLabelFontColor": "#A2B935"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "70%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1813FA3E_1663_8BF1_4180_5027A2A87866",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
  "this.Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
  "this.Container_18128A3F_1663_8BEF_41B6_51D1938FA48A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "30%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 40,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 350,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 90,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#CCCCCC",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#000099",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "rollOver": "this.setComponentVisibility(this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 26)",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#000099",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 200,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Otama.ep';\"><B>TUR L\u0130STES\u0130</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "75%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundOpacity": 0.9,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/place/Villa+Lavin/@37.8308295,32.4461252,19.75z/data=!4m6!3m5!1s0x14d081004269be3d:0x6437e90c136bcb3d!8m2!3d37.8307208!4d32.4465643!16s%2Fg%2F11n3_9strh?hl=tr-TR&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
 "backgroundColorRatios": [
  0.2
 ],
 "propagateClick": true,
 "minHeight": 1,
 "class": "WebFrame",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.openLink('https://www.google.com/maps/place/Villa+Lavin/@37.8307208,32.4465643,612m/data=!3m1!1e3!4m6!3m5!1s0x14d081004269be3d:0x6437e90c136bcb3d!8m2!3d37.8307208!4d32.4465643!16s%2Fg%2F11n3_9strh?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
  "this.HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
  "this.Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
  "this.HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
  "this.Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18128A3F_1663_8BEF_41B6_51D1938FA48A",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Otama.ep';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "75%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton54739"
 },
 "cursor": "hand"
},
{
 "id": "ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist",
 "class": "PlayList"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#CCCCCC",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000099",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "fade_out_fade_in",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "rollOver": "this.mainPlayList.set('selectedIndex', 26)",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#000099",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton54739"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_30F7AFD1_12F6_52B5_41AC_902D90554335",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "28%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.01vh;font-family:'Otama.ep';\">ViLLA</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:11.02vh;font-family:'Otama.ep';\"><B>LAV\u0130N</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "70%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 22,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "6.154%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.01vh;font-family:'Otama.ep';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:6.01vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText23803"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "15%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.87vh;font-family:'Otama.ep';\"><B>Adres:</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText24905"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2.15vh;font-family:'Antonio';\"><B>Lalebah\u00e7e mah, Harmanc\u0131k Sk. No:3, 42140 Meram/Konya</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:4.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#B3D237",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Antonio",
 "horizontalAlign": "center",
 "id": "Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 59,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#99BB1B"
 ],
 "fontSize": 30,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BOOK NOW",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_30F7AFD1_12F6_52B5_41AC_902D90554335",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "52%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.01vh;font-family:'Bahnschrift SemiBold';\">\u0130LET\u0130\u015e\u0130M;</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:6.01vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText24905"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "black line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#218abb;font-size:3.72vh;font-family:'Antonio';\"><B>AYDIN </B></SPAN><SPAN STYLE=\"color:#142645;font-size:3.72vh;font-family:'Antonio';\"><B>SATIYOR</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#b2d337;font-size:1.86vh;\">Ayd\u0131n Sat\u0131yor; gayrimenkul sekt\u00f6r\u00fcndeki hantal, \u015feffaf olmayan ve eski nesil al\u0131m-sat\u0131m s\u00fcre\u00e7lerini k\u00f6k\u00fcnden de\u011fi\u015ftirmek amac\u0131yla kurulmu\u015f yeni nesil bir gayrimenkul dan\u0131\u015fmanl\u0131k firmas\u0131d\u0131r. Klasik emlak\u00e7\u0131l\u0131k anlay\u0131\u015f\u0131n\u0131n aksine; bir m\u00fclk\u00fc sadece listelere ekleyip beklemeyi reddediyor, her portf\u00f6y\u00fc kendi dinamiklerine uygun modern sunum teknikleri ve stratejik pazarlama planlar\u0131ylay\u00f6netiyoruz. Al\u0131m, sat\u0131m ve kiralama s\u00fcre\u00e7lerinde zaman\u0131n ve do\u011fru fiyatlaman\u0131n kritik \u00f6nemini biliyor; s\u00fcreci ba\u015f\u0131ndan sonuna kadar veriyle, h\u0131zla ve mutlak \u015feffafl\u0131kla y\u00fcr\u00fct\u00fcyoruz.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:3.72vh;font-family:'Antonio';\"><B>Adres:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#b7b7b7;font-size:1.86vh;font-family:'Open Sans Semibold';\">www.aydinsehircilik.com/</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Open Sans Semibold';\"> 0 (546) 547 11 52 Ali eren</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Open Sans Semibold';\">Addres:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Open Sans Semibold';\"> Mengene Mah. Fetih Cad. 340/A Karatay/ Konya</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#B3D237",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B> V\u0130LLAMIZIN BULUNDU\u011eU MEVK\u0130 ;</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>KONYA LALEBAH\u00c7E MAHALLES\u0130NDE </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>HARMANCIK CADDES\u0130NE YAKIN</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>HATIP CADDES\u0130NE 1 PARSEL \u0130\u00c7ER\u0130DE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>HARMANCIK KAPALI PAZARININ ARKASINDA</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>ANTALYA \u00c7EVRE YOLUNA YAKIN</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>KONYANIN EN TEM\u0130Z HAVASININ OLDU\u011eU LALEBAH\u00c7EDED\u0130R.</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>OKUL,ECZANE,SA\u011eLIK OCA\u011eI,MARKET YAKIN</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2vh;\"> \u2022 </SPAN><SPAN STYLE=\"color:#99bb1b;font-size:2vh;font-family:'Antonio';\"><B>ULA\u015eIMI KOLAY </B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">M\u00dcLK\u00dcM\u00dcZ\u00dcN \u00d6ZELL\u0130KLER\u0130;</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">AKILLI EV S\u0130STEML\u0130 VE TEKNOLOJ\u0130S\u0130\u200b</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">4+1 300m2 BR\u00dcT 200m2 NET KULANIM ALANI </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">300m2 BAHCE PEYZAJ ALANI </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">S\u0130TE \u0130\u00c7\u0130NDE S\u0130TE \u00c7EVRES\u0130 Y\u00dcKSEK DUVAR VE \u00c7\u0130T ALANI \u0130LE \u00c7EVR\u0130L\u0130D\u0130R. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">2 KATLI KULLANIM ALANI </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">HER V\u0130LLANIN OTOPARKINDA ELEKTR\u0130KL\u0130 ARA\u00c7 \u015eARJ \u0130STASYONU VAR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">G\u0130R\u0130\u015e KATI:SALON,MUTFAK,VERANDA, WC,LAVABO MEVCUTTUR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">\u00dcST KATI: EBEVEYN ODASI,EBEBEYN BANYOSU,G\u0130Y\u0130NME ODASI,\u00c7OCUK ODALARI, \u00c7AMA\u015eIR ODASI, BALKON MEVCUTTUR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">EBEVEYN ODASINDA SOYUNMA ODASI VE EBEVEYN BANYOSU EKSTRALI OLARAK WC-LAVABOSU VARDIR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">B\u0130REYSEL YERDEN ISITMA</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">MOB\u0130LYALAR 1. SINIF AKR\u0130L\u0130K \u00c7\u0130Z\u0130LMEZ BOYALI LAKED\u0130R. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">SERAM\u0130KLER 60X120 K\u00dcTAHYA PORSELEND\u0130R.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">LEDL\u0130 ASMA TAVAN VE GECE SPOTLARI MEVCUTTUR </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">MUTFAKTA FRANKE 5'L\u0130 ANKASTRE SET BULUNMAKTADIR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">MUTFAK TEZGAHI DUBONT MARKA 1. SINIF MALZEMED\u0130R.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">MUTFAK BATARYALARI VE EVYELER FRANKE MARKADIR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">BANYODAK\u0130 G\u00d6MME BATARYA GROHE MARKADIR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">V\u0130LLAMIZDA KI\u015e BAH\u00c7ES\u0130 VVERANDASI VARDIR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">ASMA TAVAN VE DUVAR KAGITLARI VARDIR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">S\u0130TE G\u0130R\u0130\u015e\u0130 BLOK G\u0130R\u0130\u015eLER\u0130 KAMERALI VE \u015e\u0130FREL\u0130D\u0130R.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">G\u00d6R\u00dcNT\u00dcL\u00dc D\u0130AFONLARI VARDIR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">G\u00dcVENL\u0130K KAMERALARI VARDIR</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">7/24 G\u00dcVENL\u0130K MEVCUTTUR.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">S\u0130TAN\u0130N PEYZAJ \u00c7ALI\u015eMASI \u00d6ZENLE YAPILMI\u015eTIR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">PEYZAJ ALANI \u0130\u00c7\u0130N OTOMAT\u0130K SULAMA S\u0130STEMLER\u0130 MEVCUTTUR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">G\u0130R\u0130\u015eLERDE \u00d6ZEL \u00c7EL\u0130K KAPILARI MEVCUTTUR </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\">ODALARINDA \u00d6ZEL YAPIM LAKE S\u00dcP\u00dcRGEL\u0130KLER VARDIR. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0d374b;font-size:2vh;font-family:'Open Sans Semibold';\"> V\u0130LLAMIZ MARKET,CAM\u0130,PAZAR ALANI,SA\u011eLIK OCA\u011eI,ADL\u0130YE,\u00dcN\u0130VERS\u0130TE,\u015eEH\u0130R HASTANES\u0130 VE \u00c7EVRE YOLUNA \u00c7OK YAKIN B\u0130R MEVK\u0130DED\u0130R. </SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
