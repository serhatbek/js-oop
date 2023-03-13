class Book {
  constructor(title, year, author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  getSummary() {
    return `The book ${this.title} was written by ${this.author} in ${this.year}.`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return 'D&R';
  }
}

// Magazine Subclass

class Magazine extends Book {
  constructor(title, year, author, month) {
    super(title, year, author);
    this.month = month;
  }
}

const mag1 = new Magazine('Blue Jean', '1996', 'social', 'June');

console.log(mag1);
console.log(mag1.getSummary());
