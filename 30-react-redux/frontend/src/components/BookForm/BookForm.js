import { useState } from 'react';
import { useDispatch } from 'react-redux';
import createBookWithID from '../../utils/createBookWithID';
import { addBook, fetchBook } from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];
        dispatch(addBook(createBookWithID(randomBook, 'random')));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // чтобы браузер не выполнять дейстиве по умолчанию при сабмите формы

        if (title && author) {
            dispatch(addBook(createBookWithID({ title, author }, 'manual')));
            setTitle('');
            setAuthor(''); // сбрасуем поля 
        } else {
            dispatch(setError('You must fill title and author!'))
        }
    };

    const handleAddRandomBookViaAPI = () => {
        dispatch(fetchBook());
    };

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>Add Random</button>
                <button type="button" onClick={handleAddRandomBookViaAPI}>Add Random via API</button>
            </form>
        </div>
    );
};
export default BookForm;