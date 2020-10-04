const Engineer = require('../lib/Engineer')

test('sets office number constructor and pulls in employee constructers', () => {
    const engineer = new Engineer('Dave', 1, 'test@test.com', 'richardflores009')

    expect(engineer.gitHub).toBe('richardflores009')
});

test('makes sure getRole returns Engineer', () => {
    const enginner = new Engineer('Dave', 1, 'test@test.com', 'richardflores009')

    expect(enginner.getRole()).toBe('Engineer')
});

test('make sure getGithub return this.value', () => {
    const enginner = new Engineer('richardflores009')

    expect(enginner.getGithub()).toBe(enginner.gitHub)
})
