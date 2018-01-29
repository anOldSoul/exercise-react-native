
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Detail from './views/detail';
import HealthyDocument from './views/healthyDocument';

const SimpleApp = StackNavigator({
    Home: {
        screen: HealthyDocument
    },
    Chat:{
        screen:Detail
    }

});

module.exports = SimpleApp;

