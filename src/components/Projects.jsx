import React, { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">진행한 프로젝트</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card clickable"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="card-header">
                                <Folder size={40} className="folder-icon" />
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        onClick={e => e.stopPropagation()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                        title="GitHub 저장소 보기"
                                    >
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <ul className="project-tags">
                                {project.tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>

                            <div className="card-footer">
                                <span className="learn-more">상세 정보 & 라이브 데모 <ExternalLink size={14} style={{ marginLeft: '4px', display: 'inline' }} /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
