const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Volodya', 1, 'volodya@gmail.com', 3);
    expect(manager.oficeNumber).toEqual(expect.any(Number));
});