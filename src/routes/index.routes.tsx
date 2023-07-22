import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import { NewTeam } from '../screen/NewTeam';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='NewTeam'
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="NewTeam" component={NewTeam} />
      </Navigator>
    </NavigationContainer>
  )
}