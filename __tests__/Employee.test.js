const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

// jest.mock('../lib/Employee')

test('sets name constructor', () => {
    const employee = new Employee("Dave")

    expect(employee.name).toBe("Dave")
})

test("Can set id via constructor argument", () => {
    const testValue = 30;
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);
  });

test('sets email constructor', () => {
    const employee = new Employee("Dave", 1, "test@test.com")

    expect(employee.email).toBe("test@test.com")
})

test("get Employees name", () => {
    const employee = new Employee('Dave')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("get Employees id", () => {
    const employee = new Employee('Dave')

    expect(employee.getId()).toEqual(employee.id);
});

test("get Employees email", () => {
    const employee = new Employee('Dave')

    expect(employee.getEmail()).toEqual(employee.email);
});
