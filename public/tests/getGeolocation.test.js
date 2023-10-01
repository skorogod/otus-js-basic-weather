import { getGeolocation } from "../src/js/modules/getGeolocation.js";


global.fetch = jest.fn(() => 
    Promise.resolve({json: () => 
        Promise.resolve({coord: { lon: 18.0649, lat: 59.3326 },
                        name: 'Stockholm'})
    }));


describe("getGeolocation", () => {
    test('getGeolocation is a function', () => {
        expect(getGeolocation).toBeInstanceOf(Function);
    });

    test('get geolocation', async () => {
        const geolocation = await getGeolocation();
        expect(geolocation.name).toBe('Stockholm');
        expect(JSON.stringify(geolocation.coord)).toEqual(JSON.stringify({ lon: 18.0649, lat: 59.3326 }));
    })
})

