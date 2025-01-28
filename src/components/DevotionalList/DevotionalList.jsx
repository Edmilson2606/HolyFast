import React, { useState } from 'react';
import './DevotionalList.css';
import { useAppContext } from '../../contexts/AppContext';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import pages from '../../mocks/devotional';

function DevotionalList() {
    const { translate } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = pages.length;

    // Abrir e fechar o livro
    const toggleBook = () => setIsOpen(!isOpen);

    // Avançar para a próxima dupla de páginas
    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Voltar para a dupla de páginas anterior
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Fechar o livro ao clicar fora dele
    const closeBook = (e) => {
        if (e.target.className.includes('container')) {
            setIsOpen(false);
        }
    };

    return (
        <div className="devotional-container container" onClick={closeBook}>
            <div className={`book ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                {/* Capa do livro */}
                {!isOpen && (
                    <div className="cover" onClick={toggleBook}>
                        {/* <h2>{translate('devotional.month1')}</h2> */}
                    </div>
                )}

                {/* Páginas internas */}
                {isOpen && (
                    <div className="inner-pages">
                        {/* Página esquerda */}
                        <div className="page left" onClick={prevPage}>
                            {pages[currentPage]?.left && (
                                <article>
                                    <h3>{translate(pages[currentPage].left.title)}</h3>
                                    <p>{translate(pages[currentPage].left.prayer)}</p>
                                    <p>{translate(pages[currentPage].left.text)}</p>
                                </article>
                            )}
                        </div>

                        {/* Página direita */}
                        <div className="page right" onClick={nextPage}>
                            {pages[currentPage]?.right && (
                                <article>
                                    <h3>{translate(pages[currentPage].right.title)}</h3>
                                    <p>{translate(pages[currentPage].right.prayer)}</p>
                                    <p>{translate(pages[currentPage].right.text)}</p>
                                </article>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Link to="/contact" className="contact-button">
                <Button buttonStyle="primary" arrow>
                    {translate('devotional.cta')}
                </Button>
            </Link> 
        </div>
    );
}

export default DevotionalList;