const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

test('creates employee object', () => {
    const employee = new Employee('Dave')
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});