import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { sendCode, verifyCode } from '../../api/auth';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  // const [contact, setContact] = useState('');
  // const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // if (res.data.access) {
    //   // localStorage.setItem('accessToken', res.data.access);
      
    // }
    navigate('/');
  };

  return (
    <div className="register-container">
      <h1 className='text-logo'>NUTRA.AI</h1>
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className='register-profile-item'>
          <h3>Логин</h3>
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
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
            required
          />
        </div>
        <button type="submit" className="register-button">
          Войти
        </button>
      </form>
    </div>
  );
}