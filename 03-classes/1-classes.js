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

const book1 = new Book('Memnoch', '1990', 'Anne Rice');

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.revise('1996'));
console.log(book1);
console.log(Book.topBookStore());
