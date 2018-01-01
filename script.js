TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31",
       "backwardYaw": 102.8,
       "distance": 1,
       "class": "AdjacentPanorama",
       "yaw": 75.76
      }
     ],
     "label": "\u0622\u0634\u067e\u0632\u062e\u0627\u0646\u0647",
     "hfovMin": 60,
     "hfov": 360,
     "vfov": 180,
     "hfovMax": 120,
     "frames": [
      {
       "right": {
        "levels": [
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_r_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_f_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_b_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_u_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_tcap0",
         "inertia": false,
         "hfov": 89.1,
         "angle": 0,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BBDFDCB5_B18C_2CEA_41DD_593A2A4EC8E1",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31, this.camera_BDEE00FC_B184_745A_41C4_0413777CA212); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_0_HS_0_0.png",
              "height": 274,
              "class": "ImageResourceLevel",
              "width": 160
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.55,
           "roll": 0,
           "pitch": -32.61,
           "yaw": 75.76
          }
         ],
         "maps": [
          {
           "hfov": 10.55,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_0_HS_0_1_0_map.gif",
              "height": 137,
              "class": "ImageResourceLevel",
              "width": 80
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -32.61,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 75.76
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BAD70624_B184_1FEA_41E5_15C7D773DB86",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_0_HS_1_0.png",
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 88
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.82,
           "roll": 0,
           "pitch": -14.45,
           "yaw": 163.9
          }
         ],
         "maps": [
          {
           "hfov": 5.82,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_0_HS_1_1_0_map.gif",
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14.45,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 163.9
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_d_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_l_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_t.jpg",
       "class": "CubicPanoramaFrame"
      }
     ],
     "id": "panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8",
     "thumbnailUrl": "media/panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_t.jpg",
     "pitch": 0,
     "class": "Panorama"
    },
    "backwardYaw": 75.76,
    "distance": 1,
    "class": "AdjacentPanorama",
    "yaw": 102.8
   },
   {
    "panorama": {
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": {
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
          "backwardYaw": -79.89,
          "distance": 1,
          "class": "AdjacentPanorama",
          "yaw": -130.87
         }
        ],
        "label": "\u062d\u0645\u0627\u0645",
        "hfovMin": 60,
        "hfov": 360,
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "right": {
           "levels": [
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_r_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_f_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_b_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_u_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_tcap0",
            "inertia": false,
            "hfov": 81,
            "angle": 0,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_BADAD3ED_B184_347A_41D8_FC7B28D81D65",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D, this.camera_BDC4406D_B184_747A_41C4_05F8A1BDDBFC); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_0_HS_0_0.png",
                 "height": 217,
                 "class": "ImageResourceLevel",
                 "width": 108
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.15,
              "roll": 0,
              "pitch": -39.22,
              "yaw": -130.87
             }
            ],
            "maps": [
             {
              "hfov": 7.15,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_0_HS_0_1_0_map.gif",
                 "height": 108,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -39.22,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -130.87
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_d_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_l_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_t.jpg",
          "class": "CubicPanoramaFrame"
         }
        ],
        "id": "panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077",
        "thumbnailUrl": "media/panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_t.jpg",
        "pitch": 0,
        "class": "Panorama"
       },
       "backwardYaw": -130.87,
       "distance": 1,
       "class": "AdjacentPanorama",
       "yaw": -79.89
      },
      {
       "panorama": {
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
          "backwardYaw": 32,
          "distance": 1,
          "class": "AdjacentPanorama",
          "yaw": -158.94
         }
        ],
        "label": "\u0627\u062a\u0627\u0642 \u062e\u0648\u0627\u0628 \u06f1",
        "hfovMin": 60,
        "hfov": 360,
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "right": {
           "levels": [
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_r_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_f_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_b_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_u_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_tcap0",
            "inertia": false,
            "hfov": 85.5,
            "angle": 2,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_BA12B57D_B1BC_3C5A_41CA_D1BC00CD4C36",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D, this.camera_BDE3D0EA_B184_747F_41C2_2AC9D9A7C1A7); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_0_HS_0_0.png",
                 "height": 258,
                 "class": "ImageResourceLevel",
                 "width": 129
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.51,
              "roll": 0,
              "pitch": -32.2,
              "yaw": -158.94
             }
            ],
            "maps": [
             {
              "hfov": 8.51,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_0_HS_0_1_0_map.gif",
                 "height": 129,
                 "class": "ImageResourceLevel",
                 "width": 64
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -32.2,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -158.94
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_d_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_l_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_t.jpg",
          "class": "CubicPanoramaFrame"
         }
        ],
        "id": "panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7",
        "thumbnailUrl": "media/panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_t.jpg",
        "pitch": 0,
        "class": "Panorama"
       },
       "backwardYaw": -158.94,
       "distance": 1,
       "class": "AdjacentPanorama",
       "yaw": 32
      },
      {
       "panorama": {
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
          "backwardYaw": -29.93,
          "distance": 1,
          "class": "AdjacentPanorama",
          "yaw": -109.2
         }
        ],
        "label": "\u0627\u062a\u0627\u0642 \u062e\u0648\u0627\u0628 \u06f2",
        "hfovMin": 60,
        "hfov": 360,
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "right": {
           "levels": [
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_r_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_f_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_b_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_u_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_tcap0",
            "inertia": false,
            "hfov": 80.1,
            "angle": 0,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_BAF2CAAD_B1BC_14FA_41E1_23884EAA3CAA",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D, this.camera_BDEAA10B_B184_75BE_41B0_0D3A7BDE3085); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_0_HS_0_0.png",
                 "height": 252,
                 "class": "ImageResourceLevel",
                 "width": 133
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.74,
              "roll": 0,
              "pitch": -34.06,
              "yaw": -109.2
             }
            ],
            "maps": [
             {
              "hfov": 8.74,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_0_HS_0_1_0_map.gif",
                 "height": 126,
                 "class": "ImageResourceLevel",
                 "width": 66
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -34.06,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -109.2
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_d_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_l_hq.jpeg",
             "height": 1736,
             "class": "ImageResourceLevel",
             "width": 1736
            },
            {
             "url": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_t.jpg",
          "class": "CubicPanoramaFrame"
         }
        ],
        "id": "panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5",
        "thumbnailUrl": "media/panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_t.jpg",
        "pitch": 0,
        "class": "Panorama"
       },
       "backwardYaw": -109.2,
       "distance": 1,
       "class": "AdjacentPanorama",
       "yaw": -29.93
      },
      {
       "panorama": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31",
       "backwardYaw": 16.93,
       "distance": 1,
       "class": "AdjacentPanorama",
       "yaw": 169.27
      }
     ],
     "label": "\u0631\u0627\u0647\u0631\u0648",
     "hfovMin": 60,
     "hfov": 360,
     "vfov": 180,
     "hfovMax": 120,
     "frames": [
      {
       "right": {
        "levels": [
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_r_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_f_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_b_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_u_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_tcap0",
         "inertia": false,
         "hfov": 90,
         "angle": 0,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BDFA9F04_B18C_2DAA_41BD_66E4BFFE2F87",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7, this.camera_BD8DC08D_B184_74BA_41D1_72F9E2C8B766); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_3_0.png",
              "height": 223,
              "class": "ImageResourceLevel",
              "width": 173
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.39,
           "roll": 0,
           "pitch": -28.28,
           "yaw": 32
          }
         ],
         "maps": [
          {
           "hfov": 11.39,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_3_1_0_map.gif",
              "height": 111,
              "class": "ImageResourceLevel",
              "width": 86
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -28.28,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 32
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BC9AF35C_B18C_145A_41CB_F44295BECEE8",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5, this.camera_BD89C09C_B184_74DA_41D5_85D34F6062F6); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_2_0.png",
              "height": 244,
              "class": "ImageResourceLevel",
              "width": 100
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.58,
           "roll": 0,
           "pitch": -34.27,
           "yaw": -29.93
          }
         ],
         "maps": [
          {
           "hfov": 6.58,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_2_1_0_map.gif",
              "height": 122,
              "class": "ImageResourceLevel",
              "width": 50
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -34.27,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -29.93
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BB22088C_B18C_34BA_41D0_6D1F3A475F5B",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077, this.camera_BDC1A07D_B184_745A_41B2_5F77A960C001); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_1_0.png",
              "height": 238,
              "class": "ImageResourceLevel",
              "width": 98
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.45,
           "roll": 0,
           "pitch": -35.71,
           "yaw": -79.89
          }
         ],
         "maps": [
          {
           "hfov": 6.45,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_1_1_0_map.gif",
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 49
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -35.71,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -79.89
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BAD0B893_B184_14AE_41DB_7811CE2EC8C1",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31, this.camera_BD9470AB_B184_74FE_41D0_D93F8D4DE697); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_0_0.png",
              "height": 334,
              "class": "ImageResourceLevel",
              "width": 175
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.54,
           "roll": 0,
           "pitch": -42.52,
           "yaw": 169.27
          }
         ],
         "maps": [
          {
           "hfov": 11.54,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_0_HS_0_1_0_map.gif",
              "height": 167,
              "class": "ImageResourceLevel",
              "width": 87
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -42.52,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 169.27
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_d_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_l_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_t.jpg",
       "class": "CubicPanoramaFrame"
      }
     ],
     "id": "panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
     "thumbnailUrl": "media/panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_t.jpg",
     "pitch": 0,
     "class": "Panorama"
    },
    "backwardYaw": 169.27,
    "distance": 1,
    "class": "AdjacentPanorama",
    "yaw": 16.93
   },
   {
    "panorama": {
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31",
       "backwardYaw": -39.43,
       "distance": 1,
       "class": "AdjacentPanorama",
       "yaw": -114.98
      }
     ],
     "label": "\u0627\u062a\u0627\u0642 \u062e\u0648\u0627\u0628 \u06f3",
     "hfovMin": 60,
     "hfov": 360,
     "vfov": 180,
     "hfovMax": 120,
     "frames": [
      {
       "right": {
        "levels": [
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_r_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_f_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_b_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_u_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_tcap0",
         "inertia": false,
         "hfov": 79.2,
         "angle": 0,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BAC3348C_B185_FCBB_41E0_5F20687B9D4C",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31, this.camera_BDF5311A_B184_75DE_41D6_6F8F16468FE3); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_0_HS_0_0.png",
              "height": 254,
              "class": "ImageResourceLevel",
              "width": 245
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.03,
           "roll": 0,
           "pitch": -29.72,
           "yaw": -114.98
          }
         ],
         "maps": [
          {
           "hfov": 16.03,
           "image": {
            "levels": [
             {
              "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_0_HS_0_1_0_map.gif",
              "height": 127,
              "class": "ImageResourceLevel",
              "width": 122
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -29.72,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -114.98
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_d_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_l_hq.jpeg",
          "height": 1736,
          "class": "ImageResourceLevel",
          "width": 1736
         },
         {
          "url": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_t.jpg",
       "class": "CubicPanoramaFrame"
      }
     ],
     "id": "panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4",
     "thumbnailUrl": "media/panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_t.jpg",
     "pitch": 0,
     "class": "Panorama"
    },
    "backwardYaw": -114.98,
    "distance": 1,
    "class": "AdjacentPanorama",
    "yaw": -39.43
   }
  ],
  "label": "\u067e\u0630\u06cc\u0631\u0627\u06cc\u06cc",
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_r_hq.jpeg",
       "height": 1736,
       "class": "ImageResourceLevel",
       "width": 1736
      },
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_f_hq.jpeg",
       "height": 1736,
       "class": "ImageResourceLevel",
       "width": 1736
      },
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_b_hq.jpeg",
       "height": 1736,
       "class": "ImageResourceLevel",
       "width": 1736
      },
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_u_hq.jpeg",
       "height": 1736,
       "class": "ImageResourceLevel",
       "width": 1736
      },
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_tcap0",
      "inertia": false,
      "hfov": 90,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BBC8ED66_B18C_6C77_41E4_3EDC11743B3D",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8, this.camera_BD9080BB_B184_74DE_41DD_2DA123D68857); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_0_HS_0_0.png",
           "height": 96,
           "class": "ImageResourceLevel",
           "width": 178
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.73,
        "roll": 0,
        "pitch": -23.74,
        "yaw": 102.8
       }
      ],
      "maps": [
       {
        "hfov": 11.73,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_0_HS_0_1_0_map.gif",
           "height": 48,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.74,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 102.8
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA967624_B18C_1FEA_41E0_D98CCEDC6299",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D, this.camera_BD9B10CA_B184_74BF_41D2_AE4E8577679D); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_0_HS_1_0.png",
           "height": 178,
           "class": "ImageResourceLevel",
           "width": 112
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.39,
        "roll": 0,
        "pitch": -19.4,
        "yaw": 16.93
       }
      ],
      "maps": [
       {
        "hfov": 7.39,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_0_HS_1_1_0_map.gif",
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 56
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 16.93
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BAFFF6FC_B184_1C5B_41D0_FE070817BC21",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4, this.camera_BDE760DA_B184_745E_41D9_4989414DABD0); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_0_HS_2_0.png",
           "height": 140,
           "class": "ImageResourceLevel",
           "width": 131
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.64,
        "roll": 0,
        "pitch": -16.51,
        "yaw": -39.43
       }
      ],
      "maps": [
       {
        "hfov": 8.64,
        "image": {
         "levels": [
          {
           "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_0_HS_2_1_0_map.gif",
           "height": 70,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.51,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -39.43
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_d_hq.jpeg",
       "height": 1736,
       "class": "ImageResourceLevel",
       "width": 1736
      },
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_l_hq.jpeg",
       "height": 1736,
       "class": "ImageResourceLevel",
       "width": 1736
      },
      {
       "url": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "id": "panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31",
  "thumbnailUrl": "media/panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_t.jpg",
  "pitch": 0,
  "class": "Panorama"
 },
 {
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
 {
  "id": "panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8",
 {
  "id": "panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7",
 {
  "id": "panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5",
 {
  "id": "panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077",
 {
  "id": "panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4",
 {
  "id": "panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 0,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "media": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9A570C3_B184_F4AD_41E4_DC0C05992C31_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6B4A927_B184_F5F6_41E1_38534265B74D_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6A09E5A_B184_EC5E_41D9_3ABB808379F8_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6A063B1_B184_14EA_41D3_B8C4F16C03C7_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6AF8907_B184_15B6_41E2_6DD9820E1FB5_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6AF8E5E_B184_2C57_41A0_31A44F1D3077_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B6AF8394_B184_34AA_41DE_E0259D55E2E4_camera",
    "begin": "this.setEndToItemIndex(this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55, 6, 0)",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "playList_B62A7D37_B18C_6DD6_41E0_238760553C55",
  "class": "PlayList"
 },
 {
  "id": "camera_BDC4406D_B184_747A_41C4_05F8A1BDDBFC",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 100.11,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BDC1A07D_B184_745A_41B2_5F77A960C001",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 49.13,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BD8DC08D_B184_74BA_41D1_72F9E2C8B766",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 21.06,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BD89C09C_B184_74DA_41D5_85D34F6062F6",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 70.8,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BD9470AB_B184_74FE_41D0_D93F8D4DE697",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": -163.07,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BD9080BB_B184_74DE_41DD_2DA123D68857",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": -104.24,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BD9B10CA_B184_74BF_41D2_AE4E8577679D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": -10.73,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BDE760DA_B184_745E_41D9_4989414DABD0",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 65.02,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BDE3D0EA_B184_747F_41C2_2AC9D9A7C1A7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": -148,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BDEE00FC_B184_745A_41C4_0413777CA212",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": -77.2,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BDEAA10B_B184_75BE_41B0_0D3A7BDE3085",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 150.07,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_BDF5311A_B184_75DE_41D6_6F8F16468FE3",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "yaw": 140.57,
   "class": "PanoramaCameraPosition"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "borderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowColor": "#000000",
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontSize": 12,
  "height": "100%",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "toolTipOpacity": 1,
  "minWidth": 100,
  "toolTipFontFamily": "Arial",
  "toolTipPaddingRight": 6,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "minHeight": 50,
  "playbackBarHeadShadow": true,
  "toolTipFontStyle": "normal",
  "class": "ViewerArea",
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadWidth": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBorderSize": 0,
  "progressBarOpacity": 1,
  "id": "MainViewer",
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "toolTipFontColor": "#606060",
  "paddingLeft": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "width": "100%",
  "progressBottom": 0,
  "toolTipBorderRadius": 3,
  "toolTipFontWeight": "normal",
  "playbackBarHeadHeight": 15,
  "progressHeight": 10,
  "borderSize": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderRadius": 0,
  "paddingTop": 0,
  "progressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingRight": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "progressBorderColor": "#000000",
  "playbackBarBorderSize": 0,
  "toolTipShadowSpread": 0
 },
 {
  "layout": "horizontal",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "children": [
   {
    "layout": "horizontal",
    "paddingLeft": 20,
    "itemBackgroundColor": [],
    "scrollBarWidth": 10,
    "itemVerticalAlign": "middle",
    "backgroundColorRatios": [
     0
    ],
    "borderSize": 0,
    "itemThumbnailShadowColor": "#000000",
    "maxWidth": 800,
    "maxHeight": 600,
    "itemLabelFontStyle": "normal",
    "itemThumbnailShadowHorizontalLength": 3,
    "backgroundColorDirection": "vertical",
    "itemPaddingTop": 3,
    "itemMode": "normal",
    "itemBackgroundColorDirection": "vertical",
    "itemLabelPosition": "bottom",
    "itemThumbnailShadowOpacity": 0.8,
    "verticalAlign": "top",
    "itemPaddingBottom": 3,
    "itemThumbnailShadowSpread": 1,
    "itemLabelFontFamily": "Arial",
    "paddingBottom": 10,
    "itemThumbnailShadowBlurRadius": 4,
    "itemOpacity": 1,
    "playList": "this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55",
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 5,
    "backgroundOpacity": 0.2,
    "itemBorderRadius": 0,
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowVerticalLength": 3,
    "minWidth": 0,
    "itemBackgroundColorRatios": [],
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "itemThumbnailShadow": true,
    "shadow": false,
    "minHeight": 0,
    "itemLabelTextDecoration": "none",
    "itemThumbnailHeight": 75,
    "class": "ThumbnailList",
    "paddingRight": 20,
    "itemThumbnailScaleMode": "fit_outside",
    "selectedItemLabelFontWeight": "bold",
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "gap": 10,
    "backgroundColor": [
     "#000000"
    ],
    "itemPaddingRight": 3,
    "itemPaddingLeft": 3,
    "itemThumbnailWidth": 100,
    "itemLabelFontSize": 14,
    "scrollBarVisible": "rollOver",
    "itemLabelFontWeight": "normal",
    "itemThumbnailBorderRadius": 5,
    "itemBackgroundOpacity": 0,
    "itemLabelFontColor": "#FFFFFF",
    "borderRadius": 5,
    "itemThumbnailOpacity": 1,
    "itemLabelHorizontalAlign": "center"
   }
  ],
  "borderSize": 0,
  "bottom": 0,
  "overflow": "visible",
  "verticalAlign": "bottom",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "shadow": false,
  "paddingTop": 0,
  "minHeight": 20,
  "left": 0,
  "class": "Container",
  "paddingRight": 0,
  "right": 0,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "height": 200,
  "borderRadius": 0
 }
], 
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "layout": "absolute",
 "start": "this.syncPlaylists([this.playList_B62A7D37_B18C_6DD6_41E0_238760553C55,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "minHeight": 20,
 "paddingRight": 0,
 "scripts": {
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){    return key in window; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audio.play();   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   else if(audio.get('id') in audios){       return;   }   audios[audio.get('id')] = audio;   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "unregisterKey": function(key){    delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){    window[key] = value; },
  "getKey": function(key){    return window[key]; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audio.pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); }
 },
 "class": "Player",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "height": "100%",
 "id": "rootPlayer",
 "borderRadius": 0
})