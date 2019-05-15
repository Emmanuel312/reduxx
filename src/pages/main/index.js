import React, { Component } from 'react';
import { Container,ButtonText} from './styles';
import { connect } from 'react-redux'

class Main extends Component
{
    render()
    {
        console.log(this.props.name)
        return (
            <Container>
                <ButtonText>{this.props.name}</ButtonText>
            </Container>
        )
    }
}

const mapStateToProps = state =>
{
    return {
        name: state.names.name
    }
}

export default connect(mapStateToProps,null)(Main)