import React, { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const DemoComponent = project.demoComponent;

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="demo-section">
                        <div className="demo-wrapper">
                            {DemoComponent ? <DemoComponent /> : <div className="no-demo">데모를 불러올 수 없습니다.</div>}
                        </div>
                    </div>

                    <div className="info-section">
                        <h3>프로젝트 소개</h3>
                        <p>{project.longDescription}</p>

                        <div className="modal-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                        </div>

                        <div className="modal-actions">
                            <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                <Github size={18} style={{ marginRight: '8px' }} /> GitHub 저장소
                            </a>
                            <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={18} style={{ marginRight: '8px' }} /> 서비스 바로가기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
