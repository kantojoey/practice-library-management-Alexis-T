// Scenario:
// You are tasked with designing a library management system. The library
// lends out various types of items such as books, DVDs, and magazines. While
// all items share some common properties (e.g., title, id, isAvailable), each
// type has unique properties and behaviors. For example:
// ● Books have an author and a genre.
// ● DVDs have a director and duration.
// ● Magazines have an issueNumber and publisher.
// Tasks
// 1. Step 1: Create a Base Class
// ○ Define a class LibraryItem to represent shared properties
// (title, id, isAvailable) and methods (e.g., checkOut() and
// returnItem()).
class LibraryItem{
    constructor(title, id, isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        if(this.isAvailable){
            this.isAvailable = false;
            console.log(`You have checked out a copy of ${this.title}.`);
        } else{
            console.log(`Sorry, ${this.title} is currently unavailable for checkout.`);
        }
    }
    returnItem() {
        this.isAvailable = true;
        console.log(`You have successfully returned a copy of ${this.title}.`);
    }
}
// 2. Step 2: Extend the Base Class
// ○ Create child classes Book, DVD, and Magazine that inherit from
// LibraryItem.
// ○ Add unique properties and methods for each child class:
// ■ Book: Add properties like author and genre.
// ■ DVD: Add properties like director and duration.
// ■ Magazine: Add properties like issueNumber and publisher.
class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
    describe() {
        console.log(`${this.title} is a ${this.genre} book, written by ${this.author}.`)
        if (this.isAvailable) {
            console.log(`${this.title} is currently available for checkout.`);
        } else{ 
            console.log(`${this.title} is currently unavailable.`);
        }
    }

}

class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration, genre) { 
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
        this.genre = genre;
    }
    isScary(){
        if (this.genre === "horror"){
            console.log(`Warning! ${this.title} is a scary movie! Watch if you dare.`);
        } else if (this.genre === "thriller"){
            console.log(`${this.title} may be intimidating for some audiences. Watch at your own risk!`);
        } else{
            console.log(`No need to be scared when watching ${this.title}. Enjoy the movie!`);
        }
    }

}

class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    describe(){
        console.log(`This is ${this.title} issue #${this.issueNumber}, published by ${this.publisher} for your enjoyment.`);
    }
}
// 3. Step 3: Instantiate Objects
// ○ Create instances of each class and test the shared and unique
// methods.
let myBook = new Book("One Hundred Years of Solitude", 743, true, "Gabriel García Márquez", "fantasy");
console.log(myBook);
myBook.describe();


let myDVD = new DVD("Some Like It Hot", 7329, true, "Billy Wilder", "150 minutes", "comedy");
console.log(myDVD);
myDVD.isScary();

let myScaryMovie = new DVD("Paranormal Activity", 7238, true, "Oren Peli", "86 minutes", "horror");
myScaryMovie.isScary();

let myMagazine = new Magazine("Time", 275, true, 275, "Time, INC.");
console.log(myMagazine);


// 4. Step 4: Test the Inheritance
// ○ Use inherited methods like checkOut() and returnItem() to
// manage the availability of items.
// ○ Test accessing and displaying unique properties of each child
// class.

myBook.checkOut();
myBook.describe();
// console.log(myBook.author);

myDVD.checkOut();
// console.log(myDVD.genre);

myMagazine.checkOut();
myMagazine.returnItem();