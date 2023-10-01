
export async function getGeolocation () {
  try {
    let location;
    const API_KEY = "7e7029357504406bbc3e8823bd530163";

    const endpoint = `http://ip-api.com/json/?fields=61439`

    let response = await fetch(endpoint);

    let result = await response.json();

    console.log(result)

    return result;
  }

  catch(e) {
    return null;
  }
}

// export function getGeolocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     });
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// }
  
