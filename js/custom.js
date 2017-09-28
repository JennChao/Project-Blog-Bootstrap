$(function() {
            // execute
            (function() {
                // map options
              var locations = [
                  ['Taipei', 25.105497, 121.597366, 1],
                  ['Hualien', 23.7569, 121.3542, 2],
                  ['Tainan', 22.9997, 120.2270, 3],
                  ['Hong Kong', 22.3964, 114.1095, 4],
                  ['Shandong', 35.8940, 117.9249, 5],
                  ['Frankfurt', 50.1109, 8.6821, 6],
                  ['Munich', 48.137154, 11.576124, 7],
                  ['Heidelberg', 49.40768, 8.69079, 8],
                  ['Munich', 48.137154, 11.576124, 9],
                  ['Vienna', 48.210033, 16.363449, 10],
                  ['Lucerne', 47.0502, 8.3093, 11],
                  ['St. Moritz', 46.4908, 9.8355, 12],
                  ['Zermatt', 46.0207, 7.7491, 13],
                  ['Salzburg', 47.8095, 13.0550, 14],
                  ['Hallstatt', 47.5622, 13.6493, 15],
                  ['Provence', 44.0145, 6.2116, 16],
                  ['Cinque Terre', 44.1281, 9.7124, 17],
                  ['Florence', 43.7696, 11.2558, 18],
                  ['Venice', 45.4408, 12.3155, 19],
                  ['Milan', 45.4642, 9.1900, 20],
                  ['London', 51.5074, 0.1278, 21],
                  ['Oxford', 51.7520, 1.2577, 22],
                  ['Cambridge', 52.2053, 0.1218, 23],
                  ['Strasbourg', 48.5734, 7.7521, 24],
                  ['Tokyo', 35.6895, 139.6917, 25],
                  ['Hakone', 35.2324, 139.1069, 26],
                  ['Osaka', 34.6937, 135.5022, 27],
                  ['Kyoto', 35.0116, 135.7680, 28],
                  ['Uji', 34.8845, 135.7999, 29],
                  ['Arashiyama', 35.0094, 135.6668, 30],
                  ['Kobe', 34.6901, 135.1955, 31],
                  ['Nara', 34.6851, 135.8050, 32],
                  ['Sapporo', 43.0621, 141.3544, 33],
                  ['Nikko', 36.7199, 139.6982, 34],
                  ['Otaru', 43.1907, 140.9947, 35],
                  ['Yoichi', 43.1952, 140.7835, 36],
                  ['Shakotan', 43.3741, 140.4786, 37],
                  ['Niseko', 42.8088, 140.6846, 38],
                  ['Chitose', 42.7570, 141.3246, 40],
                  ['Dallas', 32.7767, -96.7970, 41],
                  ['Plano', 33.0198, -96.6989, 42],
                  ['Houston', 29.7604, -95.3698, 43],
                  ['Southlake', 32.9412, -97.1342, 44],
                  ['Fort Worth', 32.768799, -97.309341, 45],
                  ['Flower Mound', 33.014568, -97.096954, 47],
                  ['Addison', 32.95778, -96.83500, 48],
                  ['Denton', 33.2148, -97.1331, 49],
                  ['Tyler', 32.3513, -95.3011, 50],
                  ['Hillsboro', 32.0110, -97.1300, 51],
                  ['Paris', 33.6609, -95.5555, 52],
                  ['Page', 36.9147, -111.4558, 53],
                  ['Grants', 35.1473, -107.8514, 54],
                  ['Church Rock', 35.5339, -108.5998, 55],
                  ['Gallup', 35.5281, -108.7426, 56],
                  ['Garland', 32.9126, -96.6389, 57],
                  ['San Juan', 18.466333, -66.105721, 58],
                  ['Yosemite', 37.8651, -119.5383, 59],
                  ['New Delhi', 28.6139, 77.2090, 60],
                  ['Rajasthan', 27.0238, 74.2179, 61]
                ];

                var map = new google.maps.Map(document.getElementById('google-travel-map'), {
                  zoom: 2,
                  center: new google.maps.LatLng(32.7767, -110.7970),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var infowindow = new google.maps.InfoWindow();

                var marker, i;

                for (i = 0; i < locations.length; i++) { 
                  marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                  });

                  google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                      infowindow.setContent(locations[i][0]);
                      infowindow.open(map, marker);
                    }
                  })(marker, i));
                }
            })();
        });


