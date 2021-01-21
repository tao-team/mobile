import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RadioGroup from 'react-native-radio-button-group';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>
        Привет! {'\n'} Давай начнем наш самый бесполезный психологический тест
        :3 {'\n'}
      </Text>
      <Button
        title="А давай!"
        onPress={() => navigation.navigate('Q1')}></Button>
    </View>
  );
};

const q1Options = [
  { id: 0, score: 4, label: 'Супер!' },
  { id: 1, score: 3, label: 'Нормас с:' },
  { id: 2, score: 2, label: 'Сойдет ._.' },
  { id: 3, score: 1, label: 'Совсем плохо :(' },
];

function Q1({ navigation }) {
  const [enabled, setEnabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Как твоё настроение?</Text>
      <RadioGroup
        options={q1Options}
        onChange={(option) => {
          console.log(option);
          setEnabled(true);
          setSelectedOption(option);
        }}
      />
      <Button
        title="Далее"
        disabled={!enabled}
        onPress={() =>
          navigation.navigate('Q2', { score: selectedOption.score })
        }></Button>
    </View>
  );
}

function Q2({ route, navigation }) {
  const [thisScore, setThisScore] = useState(5);
  const { score } = route.params;
  console.log(score)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Оцени еще своё состояние числом :3</Text>
      <Picker
        selectedValue={thisScore}
        style={{ height: 25, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setThisScore(itemValue)}>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
      <Button
        title="Далее"
        onPress={() =>
          navigation.navigate('FinalScreen', {  score: Number(score) + Number(thisScore)  })
        }></Button>
    </View>
  );
}

function FinalScreen({ route, navigation }) {
  let res;
  const { score } = route.params;
  if (score >= 8) {
    res = `Ты сегодня набрал(а) ${score} баллов позитива, так держать настрой!`;
  } else if (score >= 5) {
    res = `Целых ${score} баллов позитива, но можно и лучше :3 Держись!`;
  } else {
    res = `Всего ${score} балла позитива, что-то ты расклеился друг :с`;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>{res}</Text>
      <Button title="В начало" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Q1" component={Q1} />
        <Stack.Screen name="Q2" component={Q2} />
        <Stack.Screen name="FinalScreen" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingBottom: 30,
    textAlign: 'center',
  },
});

export default App;
