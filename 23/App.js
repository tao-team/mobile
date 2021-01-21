import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions, StatusBar, SafeAreaView, ScrollView, Image} from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function  App(){
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <Image source={require('./Xavi.jpg')} style={styles.FootballImage} />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Xavi Hervandes</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./Iniesta.jpg')}
              style={styles.FootballImage}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Andreas Iniesta </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./Messi.jpg')}
              style={styles.FootballImage}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Leonel Messi</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./Busquets.jpeg')}
              style={styles.FootballImage}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Sergio Busquets</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./Pique.jpg')}
              style={styles.FootballImage}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Gerard Pique</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  FootballImage:{height:250,width: 270, justifyContent: 'center', alignItems: 'center'},
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
});


