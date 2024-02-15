//1
type CustomType = null | undefined | number;


//2
function lastIndex(str: string, char: string): number | null {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}

const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null


//3
function formatPrice(price?: number | null): string {
  if (price === undefined || price === null) {
    return '$0.00';
  }

  return `$${price.toFixed(2)}`;
}

formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'


//4
type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  const makeTurn = (direction: 'left' | 'right'): void => {
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

makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]


//5
enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User = {
  login: string,
};

type AdminPermission = {
  permission: Permission,
};

type Admin = User & AdminPermission;
function addAdmin(user : User) : Admin {
  return { ...user, permission : Permission.READ }
}

export { User, Admin, Permission };
export default addAdmin;

const user: User = { login: 'login1' };
const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }


//6
type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
};

const form: Form = {
  name: {
    value: 'Kirill',
    validator: (val: string) => val.length > 1,
  },
  age: {
    value: 17,
    validator: (val: number) => val > 18,
  },
};

console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false


//7
type User2 = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

export type UserResponse = {
  users: User2[],
  friends: Friends[]
};

const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends = (UserResponseJSON: string, userId: number): User2[] => {
  const userResponse = JSON.parse(UserResponseJSON) as UserResponse;

  return userResponse.friends
    .map(([ownerId, friendId]: Friends): User2 => {
      if (!(userId === ownerId || userId === friendId)) return defaultUser;
      const searchId = (ownerId === userId) ? friendId : ownerId;
      const friend: User2 | undefined = userResponse.users.find(({ id }) => id === searchId);

      return friend === undefined ? defaultUser : friend;
    })
    .filter((user: User2) => user.id > 0);
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
enum LoadingStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error',
}

type DataState =
  | { status: LoadingStatus.Loading }
  | { status: LoadingStatus.Success; data: number }
  | { status: LoadingStatus.Error; error: Error };

const handleData = (dataState: DataState): string => {
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

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42


//9
type Transaction = {
    apply: (amount: number) => number;
};

type Wallet = {
    transactions: Transaction[];
    balance: number;
};

const applyTransactions = (wallet: Wallet) => {
  try {
    let { balance } = wallet;

    wallet.transactions.forEach((transaction) => {
      balance = transaction.apply(balance);
    });
    return balance;
  } catch (e) {
    return wallet.balance;
  }
};

const wallet: Wallet = {
  transactions: [
    {
      apply: (amount) => amount + 1,
    },
  ],
  balance: 0
}

console.log(applyTransactions(wallet)) // 1

