//* CONSTRUCTOR FUNCTION

function Book(title, year, writer) {
  this.title = title;
  this.year = year;
  this.writer = writer;
}

//* getSummary
Book.prototype.getSummary = function () {
  console.log(
    `The book ${this.title} was written by ${this.writer} in ${this.year}.`
  );
};

//* getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  console.log(`${this.title} is ${years} years old.`);
};

//* revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book('Harry Potter', '2000', 'J.K. Rowling');
const book2 = new Book(
  'Harry Potter: Secret Of Chambers',
  '2002',
  'J.K. Rowling'
);
console.log(book2);

book1.getSummary();
book2.getSummary();
book2.getAge();
book2.revise('2018');
console.log(book2);
book2.getSummary();
