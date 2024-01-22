//first
function multiply(a: number, b: number) {
  return a * b;
}

//2 - именованные функции
function repeat(text: string, count: number) {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += text;
  }
  return result;
}

//3 - именованные функции
function getHiddenCard(num: string, star = 4) : string {
  const stars = '*'.repeat(star);
  return stars + num.slice(-4);
}

//4 - массивы
function filterAnagrams(anagram: string, anagrams: string[]): string[] {
  const standard = anagram.split('').sort().join('');
  return anagrams.filter((item) => item.split('').sort().join('') === standard);
}

//5 - объекты
function isComplete(course: {name: string, lessons: string[]}) : boolean {
  return course.lessons.length >= 4;
}

//6 - enums
enum ModalStatus {
  Opened,
  Closed
}

function buildModal(text: string, statusGet: ModalStatus): { text: string, status: ModalStatus } {
  return { text: text, status: statusGet};
}

//7 - types = псевдонимы
type User = {
  firstName: string;
  age: number;
}

function getOlderUser(first: User, second: User) : User | null {
  if (first.age > second.age) {
    return first;
  }
  else if (first.age < second.age) {
    return second;
  }
  return null;
}

// 8 - any
function getParams(query: string): any {
  const parts = query.split('&');
  const init: any = {};
  const result = parts.reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, init);

  return result;
}

//9 - namespace
namespace Company {
  export function isEmployeeEmail(email: string, domen: string) :boolean {
    return email.includes(`@${domen}`);
  }
}

type User1 = {
  email: string
};

function authorize(user: User1 | null): boolean {
  const companyDomain = 'hexlet.io';

  const email = user?.email ?? '';

  return Company.isEmployeeEmail(email, companyDomain);
}

Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true

Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false
