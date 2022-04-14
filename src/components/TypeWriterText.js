import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button'


const Title = styled.h2`
    font-size: ${props => props.theme.fontxx1};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    align-self: flex-start;

    span{
        font-family: 'Akaya Telivigala', cursive;
        text-transform: uppercase;
    }
    .text-1 {
        color: blue;
    }
    .text-2 {
        color: red;
    }
    .text-3 {
        color: orange;
    }

  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontx1};

  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontx1};
  }

  @media (max-width: 40em) {
      width: 90%;
  }
`;


const Subtitle = styled.h3`
    font-size: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontmd};
    
      }
    
      @media (max-width: 48em) {
        align-self: center;
        text-align: center;
      }
     
`

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;


    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
      }

      button {
          margin: 0 auto;
      }
`


const TypeWriterText = () => {
  return (
    <>
    <Title>
      Discover a new era of cool

      <Typewriter options={{
          autoStart: true,
          loop: true,
      }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NFTs.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">Collectible Items.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">Ape Killers!</span>')
      .pauseFor(2000)
      .deleteAll()
      .start()

  }}
/>

    </Title>
    <Subtitle>Bored of Apes? Try something New.</Subtitle>
    <ButtonContainer>
    <Button text="Explore" link="#about" />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText
