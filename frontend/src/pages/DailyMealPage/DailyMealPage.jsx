import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DailyMealPage.css';

export default function DailyMealPage() {
  const navigate = useNavigate();

  const meals = [
    { name: 'Овсянка', cals: 250, protein: 10, fat: 5, carbs: 40 },
    { name: 'Рис с курицей', cals: 480, protein: 35, fat: 12, carbs: 45 },
  ];
  const total = meals.reduce((sum, m) => ({
    cals: sum.cals + m.cals,
    protein: sum.protein + m.protein,
    fat: sum.fat + m.fat,
    carbs: sum.carbs + m.carbs
  }), { cals: 0, protein: 0, fat: 0, carbs: 0 });

  return (
    <div className="daily-meals">
      <div className='date-row'>
        <button onClick={() => navigate("/calendar")}>
          <h2>←</h2>
        </button>
        <h2>15 июля</h2>
      </div>
      <p>Всего: {total.cals} ккал | Б: {total.protein} | Ж: {total.fat} | У: {total.carbs}</p>
      {meals.map((m, i) => (
        <div key={i} className="meal-card">
          <strong>{m.name}</strong>
          <p>{m.cals} ккал · БЖУ {m.protein}/{m.fat}/{m.carbs}</p>
        </div>
      ))}
    </div>
  );
}