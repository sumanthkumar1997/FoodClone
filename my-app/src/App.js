import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
<header className="App-header">
  <img className="Logo" src={logo}/>

  <ul className='nav'>
     <li>Home</li>
     <li>About Us</li>
     <li>More</li>
  </ul>
  
</header>
  );
} 

const resData =  [
    {
      info: {
        id: "10575",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Shanti Nagar",
        
       
        cuisines: [
          "Pizzas"
        ],
        "avgRating": 4.2,
      }, 
    },
    {
      "info": {
        "id": "43836",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-18 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23847",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Rest House Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 22:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "51835",
        "name": "Aubree",
        "cloudinaryImageId": "65faa4b5046cb2215fe285a8b96c9bd7",
        "locality": "Timmaiah Road",
        "areaName": "Shivajinagar",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "3807",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 21:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
              "shortDescription": "Perfect Cake Delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "D",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                    "shortDescription": "Perfect Cake Delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aubree-timmaiah-road-shivajinagar-bangalore-51835",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "12808",
        "name": "A2B - Adyar Ananda Bhavan",
        "cloudinaryImageId": "pdod4o1em9potwsd22rs",
        "locality": "Wilson Garden",
        "areaName": "Shanti Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets",
          "Chinese"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "22",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹449",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-wilson-garden-shanti-nagar-bangalore-12808",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86443",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
        "locality": "Pulikeshi Nagar",
        "areaName": "Frazer Town",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Ratnesh_Badges/test2.png",
              "shortDescription": "Perfect ice cream delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Ratnesh_Badges/test2.png",
                    "shortDescription": "Perfect ice cream delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-pulikeshi-nagar-frazer-town-bangalore-86443",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66590",
        "name": "Havmor Havfunn Ice Cream",
        "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
        "locality": "Vanivilas road",
        "areaName": "Basavanagudi",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Ice Cream",
          "Ice Cream Cakes",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "94570",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 23:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-vanivilas-road-basavanagudi-bangalore-66590",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "160120",
        "name": "Asha Sweet Center - Since 1951",
        "cloudinaryImageId": "egm3aym4fa73hst2tv9b",
        "locality": "Gandhi Bazaar",
        "areaName": "Basavanagudi",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Sweets",
          "Snacks",
          "Fast Food",
          "Bakery",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "472555",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 21:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-bangalore-160120",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "48230",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
        "locality": "Brigade Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.6,
        "parentId": "4700",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-11 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kanti-sweets-brigade-road-central-bangalore-bangalore-48230",
        "type": "WEBLINK"
      }
    }
  ];


const Card = (props) => {
  const {restoData} = props;
  const imgSrc = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const { name, locality, cuisines, avgRating, cloudinaryImageId } = restoData?.info;
  console.log(name);

   // console.log(props.restoData.name);
  return (
      <div className='cardContainer'>
        <img className='res-img' alt='res-logo' src= {imgSrc+cloudinaryImageId}/>
        <div className='res-name'>
          <h3>{name}</h3>
          <h4>⭐️{avgRating}</h4>
        </div>
        <h4 className='cuisines'>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
      </div>
  );
}

const BodyComponent = () => {
  return (
    <div className='bodyContainer'>

      {resData.map((resto) => (
        <Card
        restoData = {resto}
      />
      ))}
      {/* <Card 
      restoData = {resData[2]}
      /> */}
      
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <BodyComponent/>
      
    </div>
  );
}

export default App;
