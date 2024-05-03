import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ProgressCircle = ({ progress }) => {
  const [circleAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(circleAnimation, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [progress, circleAnimation]);

  const rotate = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progressCircle,
          { transform: [{ rotate: rotate }] },
        ]}
      />
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#ccc',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProgressCircle;
