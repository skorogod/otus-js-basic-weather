import { getWeather } from "../modules/getWeather";

describe("getWeather", () => {
    test('getWeather is a function', () => {
        expect(getWeather).toBeInstanceOf(Function);
    })
})