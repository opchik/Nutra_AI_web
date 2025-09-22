import React, { useState } from 'react';
import './HomePage.css';

export default function HomePage() {
  const [photo, setPhoto] = useState(null);
  const [dish, setDish] = useState(null);
  const [history, setHistory] = useState([]);
  const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric'});

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgUrl = URL.createObjectURL(file);
    const mock = {
      name: 'Цезарь',
      description: 'Отличный выбор! Поке с лососем - сбалансированное блюдо, которое поможет поддерживать вес и насыщает без лишних калорий.',
      calories: 420,
      protein: 30,
      fat: 18,
      carbs: 22,
      image: imgUrl
    };
    setPhoto(imgUrl);
    setDish(mock);
    setHistory(prev => [...prev, mock]);
  };

  return (
    <div className="homepage">
      <h2 className='today-date'>{today}</h2>
      <label className="upload-btn">
        <h2>Добавить фото</h2>
        <h2>+</h2>
        <input type="file" accept="image/*" onChange={handleFile} hidden />
      </label>
      {dish && (
        <div className="dish-card">
          <img src={dish.image} alt="блюдо" />
          <div className='dish-card-item'>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
          <div className='dish-card-calories'>
            <h4>Калорийность: {dish.calories}</h4>
            <h4>Белки: {dish.protein}</h4>
            <h4>Жиры: {dish.fat}</h4>
            <h4>Углеводы: {dish.carbs}</h4>
          </div>
        </div>
      )}
      {history.length > 0 && (
        <div className="history">
          <h4>Сегодняшние блюда:</h4>
          {history.map((m, i) => (
            <div key={i} className="dish-item">
              <img src={m.image} alt="" />
              <p>{m.name} — {m.calories} ккал</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
