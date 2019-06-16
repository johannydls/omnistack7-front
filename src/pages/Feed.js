import React, { Component } from 'react';
import io from 'socket.io-client';

import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

//Componente em formato de classe

class Feed extends Component {

    state = {
        feed: [],
    }

    //Chamada da API através do componentDidMount
    async componentDidMount() {

        this.registerToSocket();

        //Faz um get em http://localhost:3333/posts
        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    //Nos casos que precisa ser passado parametro em funcoes no onSubmit,
    //Usa-se um arrowfunction, passando a funcao de fato a ser executada com o parametro
    handleLike = id => {
        api.post(`posts/${id}/like`);
    }

    registerToSocket = () => {
        // Precisa passar o endereço da API como parametro do io
        const socket = io('http://localhost:3333');

        // Mensagens enviadas pelo back: post e like
        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        });

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post => {
                    //Percorre todo array de feed.
                    //Se o post alterado com like for igual ao
                    //post que esta sendo verificado, retorna o novo post com o like,
                    //senao, retorna o post ja existente
                    return post._id === likedPost._id ? likedPost : post;
                })
            })
        });

    }

    render() {
        return (
            <section id="post-list">
                { this.state.feed.map(post => (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img className="actions-btn" src={more} alt="Mais" />
                        </header>

                        <img src={`http://localhost:3333/files/${post.image}`} alt={`${post.place}`}/>

                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleLike(post._id)}>
                                    <img className="actions-btn" src={like} alt="Like" />
                                </button>
                                
                                <img className="actions-btn" src={comment} alt="Comment" />
                                <img className="actions-btn" src={send} alt="Send" />
                            </div>

                            <strong>{post.likes} curtidas</strong>

                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                )) }
            </section>
        );
    }
}

export default Feed;