import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: gray;
`

export const InputName = styled.TextInput`
    padding: 10px;
    border-radius: 5px;
    height: 50px;
    width: 80%;
    border-color: black;
    background-color: #FFF;
`

export const Button = styled.TouchableOpacity`
    margin: 10px 0;
    border-radius: 5px;
    height: 50px;
    width: 100px;
    background-color: black;
    border-color: black;
    align-items: center;
    justify-content: center;
`
export const ButtonText = styled.Text`
    font-size: 20px;
    color: #FFF;
`
