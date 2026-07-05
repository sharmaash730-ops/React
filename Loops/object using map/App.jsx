import { useState } from "react";

function App() {
    const books = [
        { id: 1, title: "Book 1", author: "Author1" },
        { id: 2, title: "Book 2", author: "Author2" },
        { id: 3, title: "Book 3", author: "Author3" },
    ];

    return (
        <div>
            <h1>Map Loops</h1>
            <ul>
                {
                    books.map((book) => (
                        <li key={book.id}>
                            {book.title} by {book.author}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App;