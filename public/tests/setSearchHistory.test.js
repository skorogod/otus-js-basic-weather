import { setSearchHistory } from "../src/js/modules/setSearchHistory.js";

const cities = [
    'Moscow', 'Berlin', 'Krasnodar', 'Anapa', 'Vena',
    'St.-Petersburg', 'Perm', 'Sochi', 'Anapa', 'Vladivostok',
    'Madrid', 'Dublin'      
]

beforeEach(() => {
    localStorage.clear();
})

describe("setSearchHistory", () => {
    test('setSearchHistory is a function', () => {
        expect(setSearchHistory).toBeInstanceOf(Function);
    })
    test('add 1 city to cities Array in localStorage', () => {
        expect(localStorage.getItem('cities')).toBeNull();
        setSearchHistory('London');
        expect(localStorage.getItem('cities')).toBeTruthy();
    });
    test('cities can contain maximum 10 elements', () => {
        cities.forEach(el => {
            setSearchHistory(el);
        })

        const citiesArray = JSON.parse(localStorage.getItem('cities'));
        console.log(citiesArray)

        expect(citiesArray.length).toBe(10);
    })
})