import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import { NewTeam } from '../screen/NewTeam';
import { Team } from '../screen/Team';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="NewTeam" component={NewTeam} />
      <Screen name="Team" component={Team} />
    </Navigator>
  )
}