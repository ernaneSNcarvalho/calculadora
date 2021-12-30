const calc = require('./calc');

test('calculo de juros', () =>{
    expect(calc.calc(1000, 1, 12)).toBe(1126.83)
})