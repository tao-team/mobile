import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Список дел' }}
        />
        <Stack.Screen name="Takedown" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Заметка 1"
      onPress={() =>
        navigation.navigate('Takedown', { name: 'Ticker 1' })
      }
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
    <Text >
      Сходить за хлебом = минус 29 руб.
    </Text>
    </View>

  );
};

export default MyStack;


