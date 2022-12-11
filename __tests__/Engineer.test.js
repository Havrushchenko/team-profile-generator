const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Volodya', 1, 'volodya@gmail.com', 'volodya');
    expect(engineer.github).toEqual(expect.any(String));
});