import React, { Component } from 'react';
//import {  Jumbotron,Button } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax'; 


class Welcome extends Component {
    render() {
        return (
              <Jumbotron>
                <FontPoiret>Welcome to AMAS Consultant</FontPoiret>
                <FontH2>This is a simple hero unit, a simple jumbotron-style.</FontH2>
                <p><Button bsStyle="primary">Coming Soon</Button></p>
            </Jumbotron>
           
        );
    }
}

const FontPoiret = styled.h1`
        color: red;
        font-family: 'Poiret One', cursive;
        font-size: 60;
        text-shadow: 4px 4px 4px #aaa;
    }
`;

const FontH2 = styled.h5`
    font-family: 'Poiret One', cursive;
    font-family: 'Tangerine', cursive;
    font-family: 'Josefin Slab', serif;
`;
export default Welcome; 