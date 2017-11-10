import React, { Component } from 'react';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router'; 
import query from '../queries/fetchSongs'; 
import styled from 'styled-components';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title: ''};
    }
    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <FontPoiret>Create a New Song</FontPoiret>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <TitleLabel>Song Title:</TitleLabel>
                    <FontInput 
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    /> 

                </form>
            </div>
        );
    }
}

const FontPoiret = styled.h3`
        color: red;
        font-family: 'Poiret One', cursive;
        font-size: 30;
        text-shadow: 4px 4px 4px #aaa;
    }
`;

const TitleLabel = styled.label`
    color: red;
    font-family: 'Poiret One', cursive;
    fornt-size: 16;
`;

const FontInput = styled.input`
    font-family: 'Poiret One', cursive;
    font-family: 'Tangerine', cursive;
    font-family: 'Josefin Slab', serif;
`;


// the name that we call eg mutation it really doesn't matter bcoz we're going to pass it to the 
// graphQL heper down here at the bottom
const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title ) {
            title
        }
    }
`;
export default graphql(mutation)(SongCreate); 