import styled from "styled-components"
import {Container} from "react-bootstrap"
import ModalComponent from "../Modal/Modal"

const HeroComponent = styled.header`
    padding: 5rem 0;
    height: 60vh;
    background-image: url('https://images.unsplash.com/photo-1662622842908-ea6c4f23cc90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    background-size: cover;
    backgroud-position: center;
`
const ContainerComponent = styled.div`
    background-color: rgb(5, 148, 112);
    padding: 3rem;
    color: white;
    width: 32.5rem; 
`
const Heading = styled.h1`
    font-size: 4rem;
`
const SubHeading = styled.h3`
    margin: 1rem;
    font-weight: 40;
`

const Hero = () => {
    return(
        <HeroComponent>
            <Container>
                <ContainerComponent>
                    <Heading>Feed your mind with the best</Heading>
                    <SubHeading>Grow, Learn, and became mere successful by reading some of the top articles by highly reputable individuals.</SubHeading>
                    <ModalComponent text="Signuuup" modelHeading="Sign Up" variant="primary" />
                    <ModalComponent text="Logiiiin" modelHeading="Sign In"  variant="danger" />
                </ContainerComponent>
            </Container>
        </HeroComponent>
    )
} 

export default Hero;