const Intern = require('../lib/Intern')

test('sets office number constructor and pulls in employee constructers', () => {
    const intern = new Intern('Dave', 1, 'test@test.com', 'schoolname')

    expect(intern.school).toBe('schoolname')
});

test('makes sure getRole returns Engineer', () => {
    const intern = new Intern('Dave', 1, 'test@test.com', 'schoolname')

    expect(intern.getRole()).toBe('Intern')
});

test('makes sure getSchool returns this.school value', () => {
    const intern = new Intern('Dave', 1, 'test@test.com', 'schoolname')

    expect(intern.getSchool()).toBe(intern.school)
})