import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterPage.css';

export default function EnterPage() {
    const navigate = useNavigate();
    return (
        <div className="main-container">
            <h1 className='text-logo'>NUTRA.AI</h1>
            <h2>Приложение, которое считает калории по фото за вас. И не только!</h2>
            <div className='enter-buttons'>
                <button onClick={() => navigate('/register')}>
                    <h1>Регистрация</h1>
                </button>
                <button onClick={() => navigate('/login')}>
                    <h1>Вход</h1>
                </button>
            </div>
        </div>
    );
}