import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="greeting">안녕하세요 👋</span>
                    <h1 className="name">저는 김정민입니다.</h1>
                    <h2 className="title">SW로 세상을 바꾸고 싶은<br />백엔드 개발자입니다.</h2>
                    <p className="description">
                        설계가 탄탄한 소프트웨어를 만들고, 사용자의 경험을 최우선으로 생각합니다.
                        복잡한 요구사항을 구조화하여 안정적인 시스템으로 구현하는 것에 열정이 있습니다.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            프로젝트 보기 <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </a>
                        <div className="social-links">
                            <a href="https://github.com/jmkim11" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                <Github size={24} />
                            </a>
                            <a href="mailto:hello@example.com" aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="abstract-shape"></div>
                    {/* Placeholder for user image or 3D element */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
