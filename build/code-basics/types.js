"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
//2
function lastIndex(str, char) {
    const index = str.lastIndexOf(char);
    return index === -1 ? null : index;
}
const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null
//3
function formatPrice(price) {
    if (price === undefined || price === null) {
        return '$0.00';
    }
    return `$${price.toFixed(2)}`;
}
formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'
const startGame = () => {
    const state = ['turtle', null, null, null, null];
    const makeTurn = (direction) => {
        const turtleIndex = state.indexOf('turtle');
        const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;
        if (nextIndex < 0 || nextIndex > 4) {
            throw new Error('Out of bounds');
        }
        state[turtleIndex] = null;
        state[nextIndex] = 'turtle';
    };
    return { makeTurn, state };
};
const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]
makeTurn('left'); // ERROR
makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
//5
var Permission;
(function (Permission) {
    Permission[Permission["READ"] = 0] = "READ";
    Permission[Permission["WRITE"] = 1] = "WRITE";
    Permission[Permission["DELETE"] = 2] = "DELETE";
})(Permission || (exports.Permission = Permission = {}));
function addAdmin(user) {
    return Object.assign(Object.assign({}, user), { permission: Permission.READ });
}
exports.default = addAdmin;
const user = { login: 'login1' };
const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }
const form = {
    name: {
        value: 'Kirill',
        validator: (val) => val.length > 1,
    },
    age: {
        value: 17,
        validator: (val) => val > 18,
    },
};
console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false
const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends = (UserResponseJSON, userId) => {
    const userResponse = JSON.parse(UserResponseJSON);
    return userResponse.friends
        .map(([ownerId, friendId]) => {
        if (!(userId === ownerId || userId === friendId))
            return defaultUser;
        const searchId = (ownerId === userId) ? friendId : ownerId;
        const friend = userResponse.users.find(({ id }) => id === searchId);
        return friend === undefined ? defaultUser : friend;
    })
        .filter((user) => user.id > 0);
};
const userJson = JSON.stringify({
    users: [
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Mary', age: 21 },
    ],
    friends: [
        [1, 2],
    ],
});
getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 3); // []
//8
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["Loading"] = "Loading";
    LoadingStatus["Success"] = "Success";
    LoadingStatus["Error"] = "Error";
})(LoadingStatus || (LoadingStatus = {}));
const handleData = (dataState) => {
    switch (dataState.status) {
        case LoadingStatus.Loading:
            return 'loading...';
        case LoadingStatus.Success:
            return String(dataState.data);
        case LoadingStatus.Error:
            return dataState.error.message;
        default:
            return 'unknown';
    }
};
const loading = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...
const error = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error
const success = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42
const applyTransactions = (wallet) => {
    try {
        let { balance } = wallet;
        wallet.transactions.forEach((transaction) => {
            balance = transaction.apply(balance);
        });
        return balance;
    }
    catch (e) {
        return wallet.balance;
    }
};
const wallet = {
    transactions: [
        {
            apply: (amount) => amount + 1,
        },
    ],
    balance: 0
};
console.log(applyTransactions(wallet)); // 1
