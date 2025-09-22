import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    passwordMatch: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setErrors(prev => ({
        ...prev,
        passwordMatch: name === 'password' 
          ? value !== formData.confirmPassword 
          : value !== formData.password
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.passwordMatch) {
      return;
    }
    navigate('/start-data');
  };

  return (
    <div className="register-container">
      <h1 className='text-logo'>NUTRA.AI</h1>
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className='register-profile-item'>
          <h3>Как вас зовут?</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
          />
        </div>

        <div className='register-profile-item'>
          <h3>Логин</h3>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="Придумайте логин"
            required
          />
        </div>

        <div className='register-profile-item'>
          <h3>Электронная почта</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className='register-profile-item'>
          <h3>Пароль</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Не менее 8 символов"
            required
          />
        </div>

        <div className='register-profile-item'>
          <h3>Повторите пароль</h3>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Повторите пароль"
            required
            className={errors.passwordMatch ? 'error' : ''}
          />
        </div>

        <div className='register-profile-item'>
          <h3>Телефон</h3>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (XXX) XXX-XX-XX"
          />
        </div>
        <button type="submit" className="register-button">
          Создать
        </button>
      </form>
    </div>
  );
}