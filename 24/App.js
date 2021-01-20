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
          options={{ title: 'Контакты' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Пицца"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Pizza' })
      }
    />
    
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
    <Image source={{uri: 'https://www.patee.ru/r/x6/0d/22/88/960m.jpg'}}
       style={{height: 200}} />
      <Text>This is {route.params.name}s phone: 8 (915) 466-00-00</Text>
    
    </View>

  );
};

export default MyStack;
