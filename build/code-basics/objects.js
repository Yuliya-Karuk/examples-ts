"use strict";
//1
const extract = (obj, keys) => {
    const entries = Object.entries(obj).filter(([key]) => keys.includes(key));
    return Object.fromEntries(entries);
};
const user = {
    name: 'Tirion',
    email: 'tirion@lanister.got',
    age: 35,
};
extract(user, ['name', 'age']); // { name: 'Tirion', age: 35 }
function buildSalaryStatistics(employees) {
    const salaries = Object.values(employees);
    const min = Math.min(...salaries);
    const max = Math.max(...salaries);
    const avg = salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;
    return { min, max, avg };
}
const employees = {
    mango: 100,
    poly: 50,
    ajax: 150,
};
employees.ironMan = 1000;
buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }
//3
const sanitize = (obj, keys) => {
    const entries = Object.entries(obj).filter(([key]) => !keys.includes(key));
    return Object.fromEntries(entries);
};
const user3 = sanitize({
    name: 'John',
    password: '1q2w3e',
    token: 'test',
}, ['password', 'token']); // { name: string }
console.log(user3); // => { name: 'John' }
const createAccessChecker = ((permissions) => ((role, resource) => permissions[role].includes(resource)));
const userRolePermissions = {
    admin: ['document', 'user', 'adminPanel'],
    user: ['document', 'user'],
    guest: ['document'],
};
const checkUserAccess = createAccessChecker(userRolePermissions);
const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed); // => true
const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed); // => false
