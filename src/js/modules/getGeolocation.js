export async function getGeolocation() {
  try {
    const endpoint = `http://ip-api.com/json/?fields=61439`;

    const response = await fetch(endpoint);

    const result = await response.json();

    console.log(result);

    return result;
  } catch (e) {
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
