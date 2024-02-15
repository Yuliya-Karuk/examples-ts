"use strict";
//first
function multiply(a, b) {
    return a * b;
}
//2 - именованные функции
function repeat(text, count) {
    let result = '';
    for (let i = 0; i < count; i += 1) {
        result += text;
    }
    return result;
}
//3 - именованные функции
function getHiddenCard(num, star = 4) {
    const stars = '*'.repeat(star);
    return stars + num.slice(-4);
}
//4 - массивы
function filterAnagrams(anagram, anagrams) {
    const standard = anagram.split('').sort().join('');
    return anagrams.filter((item) => item.split('').sort().join('') === standard);
}
//5 - объекты
function isComplete(course) {
    return course.lessons.length >= 4;
}
//6 - enums
var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["Opened"] = 0] = "Opened";
    ModalStatus[ModalStatus["Closed"] = 1] = "Closed";
})(ModalStatus || (ModalStatus = {}));
function buildModal(text, statusGet) {
    return { text: text, status: statusGet };
}
function getOlderUser(first, second) {
    if (first.age > second.age) {
        return first;
    }
    else if (first.age < second.age) {
        return second;
    }
    return null;
}
// 8 - any
function getParams(query) {
    const parts = query.split('&');
    const init = {};
    const result = parts.reduce((acc, part) => {
        const [key, value] = part.split('=');
        acc[key] = value;
        return acc;
    }, init);
    return result;
}
//9 - namespace
var Company;
(function (Company) {
    function isEmployeeEmail(email, domen) {
        return email.includes(`@${domen}`);
    }
    Company.isEmployeeEmail = isEmployeeEmail;
})(Company || (Company = {}));
function authorize(user) {
    var _a;
    const companyDomain = 'hexlet.io';
    const email = (_a = user === null || user === void 0 ? void 0 : user.email) !== null && _a !== void 0 ? _a : '';
    return Company.isEmployeeEmail(email, companyDomain);
}
Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true
Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false
