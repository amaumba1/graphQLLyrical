import React, { Component } from 'react';
import gql from 'graphql-tag'; // allow to write graphQl code in our javascript code 
import { graphql } from 'react-apollo';  

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        // when user submit the form we need to make sure we call the mutation that we just 
        // associated with this component 
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        }).then(() => this.setState({ content: ''}));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input 
                    value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}
                /> 
            </form>
        );
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId:ID) {
        addLyricToSong(content: $content, songId: $songId) {
          id
          lyrics {
            id
            content
            likes
          }
        }
    }
`;
export default graphql(mutation)(LyricCreate); 