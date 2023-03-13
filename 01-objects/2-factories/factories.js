//* FACTORY FUNCTION

const book = {
  writer: 'Anne Rice',
  date: '1985',
  title: 'Memnoch',

  getSummary: function () {
    console.log(
      `The book ${this.title} was written by ${this.writer} in ${this.date}.`
    );
  },
};

book.getSummary();

/**
 **if the key and the value are same, we can remove value
 ** if you return an object, it's a factory object
 ** if we use this keyword along with new operator, we refer to that function as a constructor function
 */

//* CONSTRUCTOR FUNCTION

function Book(title, year, writer) {
  this.title = title;
  this.year = year;
  this.writer = writer;

  this.getSummary = () => {
    console.log(
      `The book ${this.title} was written by ${this.writer} in ${this.year}.`
    );
  };
}

const book1 = new Book('Harry Potter', '2000', 'J.K. Rowling');
const book2 = new Book(
  'Harry Potter: Secret Of Chambers',
  '2002',
  'J.K. Rowling'
);
console.log(book1);

book1.getSummary();
book2.getSummary();
