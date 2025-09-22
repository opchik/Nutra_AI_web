import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoalSelectionPage.css';

export default function GoalSelectionPage() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/');
  };
  const goals = [
    ['Похудение', 'Рекомендации будут направлены на создание умеренного дефицита калорий и поддержание сбалансированного питания для безопасного снижения веса.'], 
    ['Набор массы', 'Рекомендации будут ориентированы на калорийный профицит и повышенное потребление белка для эффективного набора мышечной массы.'], 
    ['Поддержание', 'Рекомендации помогут сохранить текущий вес, обеспечивая стабильное и сбалансированное питание без дифицита или избытка калорий.'], 
    ['Контроль веса', 'Рекомендации будут направлены на удобный учет приемой пищи и калорий для осознанного контроля питания без строгих ограничений.']
  ];
  return (
    <div className="goal-selection">
      <h1 className='text-logo'>NUTRA.AI</h1>
      <h3>Выберите цель - это поможет нам дать более точные персональные рекомендации.</h3>
      <div className="goal-options">
        {goals.map((g, i) => (
          <button onClick={handleSubmit}  key={i} className="goal-box">
            <h2>{g[0]}</h2>
            <h3>{g[1]}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}