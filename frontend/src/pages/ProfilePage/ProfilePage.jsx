import React from 'react';
import './ProfilePage.css';

export default function Profile() {
  const fields = [
    { label: 'Имя', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Логин', key: 'login' },
    { label: 'Телефон', key: 'phone' },
    { label: 'Цель', key: 'goal' },
    { label: 'Подписка', key: 'subscription' },
    { label: 'Пол', key: 'gender' },
    { label: 'Вес', key: 'weight' },
    { label: 'Рост', key: 'height' },
    { label: 'Дата рождения', key: 'birthDate' },
    { label: 'Телосложение', key: 'bodyType' },
    { label: 'Уровень активности', key: 'activityLevel' },
  ];

  const profile = {
    name: "Никита",
    email: "ivan@example.com",
    login: "ivan123",
    phone: "+7 900 000 00 00",
    goal: "Поддержание",
    subscription: "Активна ✅",
    gender: "",
    weight: "",
    height: "",
    birthDate: "",
    bodyType: "",
    activityLevel: ""
  };


  const handleSave = () => {
    // Здесь логика сохранения
    console.log('Сохранение профиля...');
  };

  return (
    <div className='profile'>
      <div className='profile-item'>
        <h2>Профиль</h2>
      </div>
      {fields.slice(1).map(({ label, key }) => (
      <div className='profile-item'>
        <div className='profile-cell'>
          <p key={key}><strong>{label}:</strong></p>
        </div>
        <div className='profile-cell'>
          <p>{profile[key]}</p>
        </div>
        <div className='profile-button'>
          <button onClick={handleSave}>Изменить</button>
        </div>
      </div>
      ))}
    </div>
  );
}

