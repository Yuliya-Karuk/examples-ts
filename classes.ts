//1
class CustomFile1 {
  name: string;
  size: number


  constructor(data: { name: string, size: number}) {
    this.name = data.name;
    this.size = data.size;
  }

  toString(): string {
    return `${this.name} (${this.size} bytes)`
  }
}

const file1 = new CustomFile1({ name: 'open-world.jpeg', size: 1000 });
console.log(file1.toString()); // open-world.jpeg (1000 bytes)

//2
type OptionName = string;
type OptionSize = number;
type CustomFileOptions2 = { name: OptionName, size: OptionSize };

class CustomFile2 {
  name: OptionName;

  size: OptionSize;

  private isCopy: boolean;

  constructor(options: CustomFileOptions2) {
    this.name = options.name;
    this.size = options.size;
    this.isCopy = (options instanceof CustomFile2);
  }

  toString(): string {
    const copyString = this.isCopy ? '(copy) ' : '';
    return `${copyString}${this.name} (${this.size} bytes)`;
  }
}

const file21 = new CustomFile2({ name: 'open-world.jpeg', size: 1000 });
console.log(file21.toString()); // open-world.jpeg (1000 bytes)

const file22 = new CustomFile2(file21);
console.log(file22.toString()); // (copy) open-world.jpeg (1000 bytes)

const file23 = new CustomFile2(file21);
console.log(file23.toString()); // (copy) open-world.jpeg (1000 bytes)


//3
type CustomFileOptions3 = {
  name: string;
  size: number;
};

class CustomFile3 {
  private name: string;

  private size: number;

  constructor(options: CustomFileOptions3) {
    this.name = options.name;
    this.size = options.size;
  }

  protected toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

class ImageCustomFile3 extends CustomFile3 {
  private width: number;

  private height: number;

  constructor(options: CustomFileOptions3 & { width: number; height: number }) {
    super(options);
    this.width = options.width;
    this.height = options.height;
  }

  toString() {
    return `${super.toString()} ${this.width}x${this.height}`;
  }
}

const imageCustomFile = new ImageCustomFile3({
  name: 'image.png',
  size: 100,
  width: 200,
  height: 300,
});
console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300


//4
class CustomFile4 {
  constructor(private name: string, private size: number) { }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

const file4 = new CustomFile4('open-world.jpeg', 1000);
console.log(file4); // open-world.jpeg (1000 bytes)


//5
class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(401, message);
  }
}

class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(403, message);
  }
}

const error = new NotFoundError('Not Found');
console.log(error.status); // 404
console.log(error.message); // Not Found

//6
class UserResponse {
  constructor(public user: string) { }

  static fromArray(users: string[]): UserResponse[] {
    return users.map((user) => new UserResponse(user));
  }
}

const response = UserResponse.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse); // true

//7
abstract class Clock {
  constructor(protected hours: number, protected minutes: number, protected seconds: number) { }

  tick(): void {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
  }

  abstract render(): string;
}

// 24-часовой формат
class Clock24 extends Clock {
  render(): string {
    const currentHour = this.hours % 24;
    const hours = currentHour.toString().padStart(2, '0');
    const minutes = this.minutes.toString().padStart(2, '0');

    return `${hours} : ${minutes}`;
  }
}

const clock24 = new Clock24(23, 59, 59);
console.log(clock24.render()); // => '23 : 59'
clock24.tick();
console.log(clock24.render()); // => '00 : 00'

// 12-часовой формат
class Clock12 extends Clock {
  render(): string {
    const timeType = this.hours > 12 ? 'PM' : 'AM';

    let currentHour = this.hours > 12 ? this.hours - 12 : this.hours;
    if (timeType === 'AM' && this.hours === 0) {
      currentHour = 12;
    }

    const hours = currentHour.toString().padStart(2, '0');
    const minutes = this.minutes.toString().padStart(2, '0');
    return `${hours} : ${minutes} ${timeType}`;
  }
}

const clock12 = new Clock12(23, 59, 59);
console.log(clock12.render()); // => '11 : 59 PM'
clock12.tick();
console.log(clock12.render()); // => '12 : 00 AM'