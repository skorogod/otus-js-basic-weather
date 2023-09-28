import { getWeather } from "../src/js/modules/getWeather";

global.fetch = jest.fn(() => 
    Promise.resolve({json: () => 
        Promise.resolve({
                        name: 'Moscow',
                        main: {temp: 20.34},
                        weather: [{icon: '2nd2x'}],
    })})
);

beforeEach(() => {
    fetch.mockClear();
})

describe("getWeather", () => {
    test('getWeather is a function', () => {
        expect(getWeather).toBeInstanceOf(Function);
    });
    
    test('getWeather for Moscow returns json', async () => {
        const weather = await getWeather('Moscow');
        expect(weather.name).toBe('Moscow');
        expect(weather.main.temp).toBe(20.34);
        expect(weather.weather[0].icon).toBe('2nd2x');
    })

    test('getWeather for Tillimilitryamdia returns null', async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));

        const weather = await getWeather('illimilitryamdia');
        expect(weather).toBeNull();
    })
})