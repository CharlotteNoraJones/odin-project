function Book(title, author, page_count, read) {
    this.title = title;
    this. author = author;
    this.page_count = page_count;
    this.read = read;
    this.info = function(){
        let info = title + " by " + author + ", " + page_count + " pages, ";
        if (read){
            info += "already read."
        } else {
            info += "not read yet."
        }
        return info;
    }
}

let my_book = new Book("The Hobbit", "J. R. R. Tolkien", 295, false);
console.log(my_book.info());