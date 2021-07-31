import React from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends React.Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    // Carregar os dados do localStorage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }

    }

    // Salvar os dados do localStorage
    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const response = await api.get(`/repos/${this.state.newRepo}`);

        console.log(response);

        const data = {
            name: response.data.full_name,
        };

        this.setState({
            repositories: [...this.state.repositories, data],
            newRepo: '',
            loading: false,
        });

    };

    render() {
        const { newRepo, repositories, loading } = this.state;
        return (
            <Container>
                <h1>
                    <FaGithub/>
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar Repositório"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14}/>
                        ) : (
                            <FaPlus color="#FFF" size={14}/>
                        )}

                    </SubmitButton>
                </Form>

                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
