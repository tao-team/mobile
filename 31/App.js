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
          options={{ title: 'Галерея' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Робо-пылесос"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Robo' })
      }
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
    <Image source={{uri: 'https://img.mvideo.ru/Pdb/20059776b.jpg'}}
       style={{height: 200}} />
    <Text >
      3200 руб.
    </Text>
        <Text >
      8 495 535 55 55.
    </Text>
    </View>

  );
};

export default MyStack;


