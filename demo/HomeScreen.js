import {
    StackNavigator,
  } from 'react-navigation';
  
  const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  });
  
  class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile')
          }
        />
      );
    }
  }