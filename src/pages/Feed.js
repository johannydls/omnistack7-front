import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

//Componente em formato de classe

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Johanny LS</span>
                            <span className="place">Campina Grande</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/profile_500.jpg" />
                    
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comment" />
                            <img src={send} alt="Send" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Uma foto legal
                            <span>#casamento #diziaejohanny</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Johanny LS</span>
                            <span className="place">Campina Grande</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/profile_500.jpg" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comment" />
                            <img src={send} alt="Send" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Uma foto legal
                            <span>#casamento #diziaejohanny</span>
                        </p>
                    </footer>
                </article>

            </section>
        );
    }
}

export default Feed;