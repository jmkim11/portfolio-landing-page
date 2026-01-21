import React from 'react';
import { Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="social-icons">
                    <a href="https://github.com/jmkim11" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={20} /></a>
                    <a href="mailto:hello@example.com" aria-label="Email"><Mail size={20} /></a>
                </div>
                <div className="copyright">
                    Designed & Built by Kim Jung Min
                </div>
            </div>
        </footer>
    );
};

export default Footer;
