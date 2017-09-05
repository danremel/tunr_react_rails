import React from 'react';
import styled from 'styled-components';

const ArtistStyles = styled.div`
    box-shadow: 1px 1px 5px black;
    width: 30%;
    margin: 20px 0;
    img {
        width: 100%;
        max-height: 200px;
    }
    h3 {
        padding: 5px 0;
    }
    `;

const ArtistCard = (props) => {
    const artist = props.artist;
    return (
        <ArtistStyles>
            <img src={artist.photo_url} alt={artist.name}/>
            <h3>{artist.name}</h3>
        </ArtistStyles>
    );
};

export default ArtistCard;