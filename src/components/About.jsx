import React from 'react';
import { Database, Server, Code } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        { name: 'Backend', icon: <Server size={24} />, items: ['Java', 'Spring Framework', 'Spring Boot', 'Spring Security', 'Python'] },
        { name: 'Frontend', icon: <Code size={24} />, items: ['JavaScript', 'Vue.js', 'React (Learning)'] },
        { name: 'Database / Etc', icon: <Database size={24} />, items: ['MySQL', 'MongoDB', 'Git'] },
    ];

    return (
        <section id="about" className="section bg-light">
            <div className="container">
                <h2 className="section-title">소개</h2>

                <div className="about-content">
                    <div className="bio">
                        <p className="bio-intro">
                            SW로 세상을 바꾸고 싶은, <strong>백엔드 개발자 김정민</strong> 입니다.
                        </p>
                        <ul className="bio-list">
                            <li>
                                <strong>설계가 탄탄한 소프트웨어</strong>를 만드는 것을 가장 중요하게 생각합니다.
                                <p className="bio-detail">복잡한 요구사항도 ERD·UML로 구조화해 안정적인 시스템으로 구현합니다.</p>
                            </li>
                            <li>
                                개발 과정에서 <strong>사용자가 실제로 겪는 흐름과 문제</strong>를 항상 먼저 고려합니다.
                                <p className="bio-detail">기능보다 “사용 경험”이 먼저라고 믿습니다.</p>
                            </li>
                            <li>
                                꾸준하게 공부하고 기록하며 성장합니다.
                                <p className="bio-detail">Notion, 책, 문서화를 통해 스스로 구조를 정리하는 스타일입니다.</p>
                            </li>
                            <li>
                                🖥 <strong>백엔드 개발에 집중하고 있으며</strong>,<br />
                                <strong>Spring · Security · 데이터베이스 모델링</strong>에 강점이 있습니다.
                            </li>
                            <li>
                                🌱 현재는 <strong>인증/인가 시스템</strong>, <strong>React 기반 프론트 연동</strong> 등을 학습·구현 중입니다.
                            </li>
                            <li>
                                😄 커피랑 음악 좋아하고, 문제 해결에 몰입할 때 즐거움을 느낍니다.
                            </li>
                        </ul>
                    </div>

                    <div className="skills-grid">
                        {skills.map((category) => (
                            <div key={category.name} className="skill-card">
                                <div className="skill-icon">{category.icon}</div>
                                <h3>{category.name}</h3>
                                <ul className="skill-list">
                                    {category.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
