import React, { Component } from 'react';
import gql from 'graphql-tag'; 
import { graphql } from 'react-apollo'; 
import { Link } from 'react-router'; 
import query from '../queries/fetchSongs';
import styled from 'styled-components';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({ variables: { id } })
            .then(() => this.props.data.refetch());
    }

    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <FontList key={song.id} className="collection-item avatar">
                    <Link to={`/songs/${song.id}`}>
                        <i className="material-icons circle red">play_arrow</i>
                            {song.title}
                    </Link>
                   <i 
                    className="material-icons"
                    onClick={() => this.onSongDelete(song.id)}
                  >
                    delete
                  </i> 
                </FontList>
            );
        });
    }

    render() {
        if (this.props.data.loading) { return <div>Loading...</div>; }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul> 
                <Link
                    to="songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>      
        );
    }
}


const FontList = styled.li`
    font-family: 'Poiret One', cursive;
    font-family: 'Tangerine', cursive;
    font-size: 40;
`;

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;
// first part it return a function [ graphql(query)] which 
// second immediately called by set of the parentheses in the (Songlist)
export default graphql(mutation) (
    graphql(query)(SongList) 
);