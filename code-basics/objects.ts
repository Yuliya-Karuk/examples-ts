//1
const extract = (obj: {}, keys: Array<string>): {} => {
  const entries = Object.entries(obj).filter(([key]) => keys.includes(key));

  return Object.fromEntries(entries);
};

const user = {
  name: 'Tirion',
  email: 'tirion@lanister.got',
  age: 35,
}

extract(user, ['name', 'age']); // { name: 'Tirion', age: 35 }

//2
interface SalaryStatistics {
  min: number;
  max: number;
  avg: number;
}

interface EmployeeSalary {
  [key :string] : number;

}

function buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics {
  const salaries = Object.values(employees);
  const min = Math.min(...salaries);
  const max = Math.max(...salaries);
  const avg = salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;

  return { min, max, avg };
}

const employees: EmployeeSalary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

employees.ironMan = 1000;

buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }


//3
const sanitize = <T extends object, K extends keyof T>(obj: T, keys: Array<K>) => {
  const entries = Object.entries(obj).filter(([key]) => !keys.includes(key as K));

  return Object.fromEntries(entries) as Omit<T, K>;
};

const user3 = sanitize({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
}, ['password', 'token']); // { name: string }

console.log(user3); // => { name: 'John' }


//4
type Property = string | number | symbol;

const createAccessChecker = (
  <Roles extends Property, Resource>(permissions: Record<Roles, Array<Resource>>) => (
    (role: Roles, resource: Resource) => permissions[role].includes(resource)
  )
);

type UserRole = 'admin' | 'user' | 'guest';
type UserResource = 'document' | 'user' | 'adminPanel';

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
  admin: ['document', 'user', 'adminPanel'],
  user: ['document', 'user'],
  guest: ['document'],
};

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed); // => true

const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed); // => false