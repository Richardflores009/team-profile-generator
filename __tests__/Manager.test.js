const Manager = require('../lib/Manager')

test('sets office number constructor and pulls in employee constructers', () => {
    const manager = new Manager('Dave', 1, 'test@test.com', 100)

    expect(manager.officeNum).toBe(100)
});

test('makes sure getRole returns Manager', () => {
    const manager = new Manager('Dave', 1, 'test@test.com', 100)

    expect(manager.getRole()).toBe('Manager')
});

test('makes sure get office number returns this.', () => {
    const manager = new Manager('Dave', 1, 'test@test.com', 100)

    expect(manager.officeNumber()).toBe(manager.officeNum)
})