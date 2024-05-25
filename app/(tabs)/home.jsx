import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { icons, images } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerText: {
    marginTop: 20,
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '600',
  },
  infoBox: {
    marginTop: 40,
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2c2c2c',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#aaaaaa',
  },
  imageButton: {
    marginTop: 100,
  },
  image: {
    maxWidth: 400,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showInfo, setShowInfo] = useState(true);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setShowMap(true);
      setShowInfo(false); // hide the info and button when location is fetched
    } catch (error) {
      setErrorMsg('Error fetching location');
    }
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ padding: 16 }}>
          <Text style={styles.headerText}>Search for Location</Text>
          <View style={styles.infoBox}>
            <Image
              source={icons.wheelchair}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.infoText}>
              Please guarantee the battery power, and main power on
            </Text>
          </View>
          {showInfo ? (
            <View>
              <TouchableOpacity style={styles.imageButton} onPress={fetchLocation}>
                <Image
                  source={images.search}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.infoText}>{text}</Text>
            </View>
          ) : showMap && location && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="My Location"
              />
            </MapView>
          )}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
export default Home;
