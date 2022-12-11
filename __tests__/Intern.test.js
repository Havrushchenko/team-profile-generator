const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Volodya', 1, 'volodya@gmail.com', 'khodoriv3');
    expect(intern.school).toEqual(expect.any(String));
});