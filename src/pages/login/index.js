import React, { Component } from 'react'
import { Container,InputName,Button,ButtonText } from './styles'
import { connect } from 'react-redux'
import {action} from '../../redux/actions/name'

class Login extends Component
{
    state =
    {
        name : ''        
    }
    handleText = (name) =>
    {
        this.setState({name})
    }
    handleOkButton = () =>
    {
        this.props.onName({...this.state})
        this.props.navigation.navigate('Main')
    }
    render() {
        return (
            <Container>
                <InputName placeholder="digita seu nome" value={this.state.name} onChangeText={this.handleText}/> 
                <Button onPress={this.handleOkButton}> 
                    <ButtonText>ok</ButtonText>
                </Button>
            </Container>
        )
    }
}

const mapDispatchOnProps = dispatch =>
{
    return {
        onName: (name) => dispatch(action(name))
    }
}

export default connect(null,mapDispatchOnProps)(Login)
