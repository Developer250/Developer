const {summa, kerto, jako, vahennys} = require('./aritmeettiset');
test('2 + 3 = 5', () => {
  expect(summa(2,3)).toBe(5);
});
test('2 * 3 = 6', () => {
  expect(kerto(2,3)).toBe(6);
});

test('4 / 2 = 2', () => {
  expect(jako(4,2)).toBe(2);
});
test('6 - 3 = 3', () => {
  expect(vahennys(6,3)).toBe(3);
  });
//Joukkotestit

test.each([[1,1,2],[-1,2,1],[2,1,3]])(
  '%i + %i equals %i', (a,b,expected) => {
    expect(summa(a,b)).toBe(expected);
  }
  });
//Joukkotestit (taulukoinnilla)
