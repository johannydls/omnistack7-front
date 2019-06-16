import React, { Component } from 'react';

import api from '../services/api';

import './New.css';

//Componente em formato de classe

class New extends Component {

    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    };

    handleChange = e => {
        // e.target.name pega o nome do input (atributo name)
        // e.target.value pega o valor digitado
        // e por fim, atualiza o state com o novo valor
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImageChange = e => {
        // O valor de imagem vem em array, por isso
        // foi preciso criar uma funcao customizada
        this.setState({ image: e.target.files[0] });
    }

    handleSubmit = async e => {
        // preventDefault() evita que a pagina seja atualizada
        // ou envie o user pra outra pagina ao submeter
        e.preventDefault();
        //console.log(this.state);

        //Usado para enviar arquivos binários junto dos outros dados
        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        // Formato Multipart form data, quando precisa
        // enviar uma imagem
        await api.post('posts', data);

        /*
        Para enviar dados em formato JSON,, sem imagem
        usaria essa estrutura:

        await api.post('posts', {
            author,
            description,
            place,
            hashtags,
            image
        })*/

        //Envia o usuário para a rota inicial 
        this.props.history.push('/');

    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />

                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange = {this.handleChange}
                    value = {this.state.author}
                />

                <input 
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange = {this.handleChange}
                    value = {this.state.place}
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange = {this.handleChange}
                    value = {this.state.description}
                />

                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange = {this.handleChange}
                    value = {this.state.hashtags}
                />

                <button type="submit">Enviar</button>

            </form>
        );
    }
}

export default New;