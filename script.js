
const book_name = document.getElementById("book_name");
const writter_name = document.getElementById("writter_name");
const date = document.getElementById("date");
const bookList = document.getElementById("book-list");
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    event.preventDefault();

    // console.log(book_name, writter_name, date)

    if (book_name.value == '' || writter_name.value == '' || date.value == '') {
        // console.log('a')
        alert('Please Input Your Information.');

    } else {
        const newRow = document.createElement('tr');

        const newBook = document.createElement('td');
        newBook.innerHTML = book_name.value;
        newRow.appendChild(newBook);

        const newWritter = document.createElement('td');
        newWritter.innerHTML = writter_name.value;
        newRow.appendChild(newWritter);

        const newDate = document.createElement('td');
        newDate.innerHTML = date.value;
        newRow.appendChild(newDate);

        const deleteIcon = document.createElement('td');
        deleteIcon.innerHTML = '<i class="fa fa-trash delete-btn"></i>';
        newRow.appendChild(deleteIcon);

        bookList.appendChild(newRow);

        // Clear input fields after adding the book
        book_name.value = '';
        writter_name.value = '';
        date.value = '';
    }
});

bookList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const row = event.target.closest('tr');
        row.parentNode.removeChild(row);
    }
});
