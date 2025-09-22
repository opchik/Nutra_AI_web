import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CalendarPage.css';

const MONTH_NAMES = [
  'января', 'февраля', 'марта', 'апреля',
  'мая', 'июня', 'июля', 'августа',
  'сентября', 'октября', 'ноября', 'декабря'
];

const FULL_MONTH_NAMES = [
  'Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

export default function CalendarPage() {
  const navigate = useNavigate();
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const currentDateString = `${today.getDate()} ${MONTH_NAMES[today.getMonth()]} ${today.getFullYear()}`;

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const days = Array.from({ length: offset + daysInMonth }, (_, i) => {
    if (i < offset) return null;
    return i - offset + 1;
  });

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}><p>←</p></button>
        <h2>{FULL_MONTH_NAMES[currentMonth]} {currentYear}</h2>
        <button onClick={handleNextMonth}><p>→</p></button>
      </div>

      <p className="current-date">Сегодня: {currentDateString}</p>

      <div className="weekdays">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d, i) => (
          <div key={i} className="weekday"><h3>{d}</h3></div>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day, i) =>
          day ? (
            <div
              key={i}
              className={`day-box ${isToday(day) ? 'today' : ''}`}
              onClick={() => navigate(`/day/${String(day).padStart(2, '0')}-${String(currentMonth + 1).padStart(2, '0')}-${currentYear}`)}
            >
              {String(day).padStart(2, '0')}
            </div>
          ) : (
            <div key={i} className="day-box empty"></div>
          )
        )}
      </div>
    </div>
  );
}
