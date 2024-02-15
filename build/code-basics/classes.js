"use strict";
//1
class CustomFile1 {
    constructor(data) {
        this.name = data.name;
        this.size = data.size;
    }
    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
const file1 = new CustomFile1({ name: 'open-world.jpeg', size: 1000 });
console.log(file1.toString()); // open-world.jpeg (1000 bytes)
class CustomFile2 {
    constructor(options) {
        this.name = options.name;
        this.size = options.size;
        this.isCopy = (options instanceof CustomFile2);
    }
    toString() {
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
class CustomFile3 {
    constructor(options) {
        this.name = options.name;
        this.size = options.size;
    }
    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
class ImageCustomFile3 extends CustomFile3 {
    constructor(options) {
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
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
const file4 = new CustomFile4('open-world.jpeg', 1000);
console.log(file4); // open-world.jpeg (1000 bytes)
//5
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
class NotFoundError extends HttpError {
    constructor(message) {
        super(404, message);
    }
}
class UnauthorizedError extends HttpError {
    constructor(message) {
        super(401, message);
    }
}
class ForbiddenError extends HttpError {
    constructor(message) {
        super(403, message);
    }
}
const error = new NotFoundError('Not Found');
console.log(error.status); // 404
console.log(error.message); // Not Found
//6
class UserResponse {
    constructor(user) {
        this.user = user;
    }
    static fromArray(users) {
        return users.map((user) => new UserResponse(user));
    }
}
const response = UserResponse.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse); // true
//7
class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    tick() {
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
}
// 24-часовой формат
class Clock24 extends Clock {
    render() {
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
    render() {
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
