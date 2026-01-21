import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `[Portfolio Contact] Message from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
        window.location.href = `mailto:kimjungmin8976@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2 className="section-title">연락하기</h2>
                <p className="contact-intro">
                    프로젝트 의뢰, 채용 제안 등 어떤 이야기라도 환영합니다.<br />
                    아래 폼을 작성해주시면 제 메일로 바로 연결됩니다.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="홍길동"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">메시지</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="안녕하세요, 프로젝트 관련하여 문의드립니다..."
                            rows="5"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        메일 보내기 <Send size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
