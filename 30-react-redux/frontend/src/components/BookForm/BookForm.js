import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/actionCreactors';
import './BookForm.css';

const BookForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    //const [formDate, setformDate] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault(); // чтобы браузер не выполнять дейстиве по умолчанию при сабмите формы

        if (title && author) {

            const book = {
                title,
                author,
                id: uuidv4(),
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthor(''); // сбрасуем поля 
        }
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
            </form>
        </div>
    );
};
export default BookForm;