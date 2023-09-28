
export async function getGeolocation () {
  try {
    let cityName;

    let result = await ymaps.geolocation.get({ provider: "yandex" });

    let data = result.geoObjects.get(0).properties.get("metaDataProperty")
      .GeocoderMetaData.AddressDetails.Country.AdministrativeArea;

    if ("SubAdministrativeArea" in data) {
      cityName = data.SubAdministrativeArea.Locality.LocalityName;
    } else if (data.Locality) {
      cityName = data.Locality.LocalityName;
    } else {
  
      cityName = data.AdministrativeAreaName;
    }

    return cityName;
  }

  catch(e) {
    return null;
  }
}
  
