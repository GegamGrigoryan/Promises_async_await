import {Validator} from '../src/index.js'
import {numberValidator} from '../src/phone_validator.js'

describe("Валидация", () => {
    test('sochi/true"]', () => {
        const bowerman = new Validator('sochi');
        expect( bowerman.validateUsername('sochi')).toEqual(true);
    })
    test('bowerman/false"]', () => {
        const bowerman = new Validator('-bowerman');
        expect( bowerman.validateUsername()).toEqual(false);
    })
    test('sochi/false"]', () => {
        const bowerman = new Validator('1bowerman');
        expect( bowerman.validateUsername()).toEqual(false);
    })
    test('bowerman/false"]', () => {
        const bowerman = new Validator('bowerman-');
        expect( bowerman.validateUsername()).toEqual(false);
    })
    test('bowerman/false"]', () => {
        const bowerman = new Validator('bowerman_');
        expect( bowerman.validateUsername()).toEqual(false);
    })
    test('bowerman/false"]', () => {
        const bowerman = new Validator('bowerman12');
        expect( bowerman.validateUsername()).toEqual(false);
    })
     test('BOWERMAN/true"]', () => {
        const bowerman = new Validator('BOWERMAN');
        expect( bowerman.validateUsername()).toEqual(true);
    })
    test('BOWERMAN/true"]', () => {
        const bowerman = new Validator('BOWE123RMAN');
        expect( bowerman.validateUsername()).toEqual(true);
    })
    test('BOWE1234RMAN/false"]', () => {
        const bowerman = new Validator('BOWE1234RMAN');
        expect( bowerman.validateUsername()).toEqual(false);
    })
    test('BOWE12-_RMAN/true"]', () => {
        const bowerman = new Validator('BOWE_RMAN');
        expect( bowerman.validateUsername()).toEqual(true);
    })
    test('BOWE12-RMAN/true"]', () => {
        const bowerman = new Validator('BOWE-RMAN');
        expect( bowerman.validateUsername()).toEqual(true);
    })
    test('BOWE1-1RMAN/true"]', () => {
        const bowerman = new Validator('BOWE1-1RMAN');
        expect( bowerman.validateUsername()).toEqual(true);
    })
});

describe("Валидация номера", () => {
    test("+79270000000", () => {
        expect(numberValidator('8 (927) 000-00-00')).toBe('+79270000000');
    })
    test("+7 960 000 00 00", () => {
        expect(numberValidator('8 (927) 000-00-00')).toEqual('+79270000000');
    })
    test("+860000000000 china", () => {
        expect(numberValidator('+86 000 000 0000')).toEqual('+860000000000');
    })
    test("1 234 567-89-00 usa", () => {
        expect(numberValidator('1 234 567-89-00')).toEqual('+12345678900');
    })
    test("+374 (10) 98-76-54 arm", () => {
        expect(numberValidator('37410 9876 54')).toEqual('+37410987654');
    })
})