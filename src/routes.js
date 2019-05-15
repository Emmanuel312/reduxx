import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from './pages/login'
import Main from './pages/main'

const Screens = createSwitchNavigator(
{
    Login,
    Main
})

export default createAppContainer(Screens)