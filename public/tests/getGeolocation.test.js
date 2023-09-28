import { getGeolocation } from "../src/js/modules/getGeolocation.js";

describe("getGeolocation", () => {
    test('getGeolocation is a function', () => {
        expect(getGeolocation).toBeInstanceOf(Function);
    });
})