import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity ,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import React from "react";
import { Circle, Svg } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const remotedrive = () => {
  
  let btnAColor = "#FF4B4B",
      btnBColor = "#FF4B4B",
      btnXColor = "#FF4B4B",
      btnYColor = "#FF4B4B"
  const onButtonAPress = () => {
    console.log('You clicked button Right');
  };
  const onButtonBPress = () => {
    console.log('You clicked button Back');
  };
  const onButtonXPress = () => {
    console.log('You clicked button Forward');
  };
  const onButtonYPress = () => {
    console.log('You clicked button turnLeft');
  };
  
  
  return (
<SafeAreaView className="bg-black-100 h_full">
  <ScrollView contentContainerStyle={{ height: '100%' }}>
    <ScrollView className="px-2 my-6">
      <Text className="text-3xl text-white font-psemibold"style={{ marginTop: 10 }}>Remote Control Driving</Text >
      <TouchableOpacity className="w-full h-24 px-4 bg-green-500 rounded-3xl border-2 border-gray-700 flex justify-between items-center flex-row ml-4"style={{ marginTop: 20, width: '90%', height: 50  }}>
        <Image
          source={icons.bluetoothsignal2}
          resizeMode="contain"
          alt="bluetoothsignal2"
          className="w-10 h-10"
        />
        <Text className="text-lg text-black-100 font-psemibold mr-6">
             Bluetooth is connected
        </Text>

        </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 1 }}>
            <View className="w-1/3 h-30 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-between items-center flex-row"style={{ marginTop: 10, width: '33%', height: 100 }}>
            <AnimatedCircularProgress style={{ marginLeft: -7  ,marginTop: 25}}
                   size={100}
                   width={10}
                   fill={33} // Pourcentage de remplissage du cercle de progression
                   tintColor="#FF4B4B" // Couleur de remplissage du cercle de progression
                   backgroundColor="#000" // Couleur de fond du cercle de progression
                   arcSweepAngle={240} // Angle du cercle complet (360 pour un cercle complet)
                   rotation={240} // Rotation initiale du cercle de progression (0 pour le démarrer à 12 heures)
                   lineCap="round" // Style de terminaison de la ligne du cercle ('butt', 'round' ou 'square'               
  />
                          <View style={{ position: 'absolute', top: 40, left: 35, zIndex: 1 }}>
                        <Text style={{ color: '#FFF', fontSize: 20 ,fontFamily: 'Poppins-Black' }}>{`Slow `}</Text>
                      </View>
            </View>
            
            <View className="w-1/3 h-30 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-between items-center flex-row"style={{ marginTop: 10, width: '33%', height: 100 }}>
                <AnimatedCircularProgress style={{ marginLeft: -8 ,marginTop: 25}}
                   size={100}
                   width={10}
                   fill={20} // Pourcentage de remplissage du cercle de progression
                   tintColor="#FF4B4B" // Couleur de remplissage du cercle de progression
                   backgroundColor="#000" // Couleur de fond du cercle de progression
                   arcSweepAngle={240} // Angle du cercle complet (360 pour un cercle complet)
                   rotation={240} // Rotation initiale du cercle de progression (0 pour le démarrer à 12 heures)
                   lineCap="round" // Style de terminaison de la ligne du cercle ('butt', 'round' ou 'square'               
  />  
                        <View style={{ position: 'absolute', top: 40, left: 22, zIndex: 1 }}>
                        <Text style={{ color: '#FFF', fontSize: 18 ,fontFamily: 'Poppins-Black' }}>{`${20}  Kmh`}</Text>
                      </View>
            </View>
            <View className="w-1/3 h-40 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-between items-center flex-row"style={{ marginTop: 10, width: '33%', height: 100 }}>
            <View style={{ flexDirection: 'row', marginTop: 5, width: '97%', height: 120, justifyContent: 'center', alignItems: 'center' }}>
                 <AnimatedCircularProgress style={{ marginLeft: 7 ,marginTop: 25}}
                   size={100}
                   width={10}
                   fill={100} // Pourcentage de remplissage du cercle de progression
                   tintColor="#FF4B4B" // Couleur de remplissage du cercle de progression
                   backgroundColor="#000" // Couleur de fond du cercle de progression
                   arcSweepAngle={240} // Angle du cercle complet (360 pour un cercle complet)
                   rotation={240} // Rotation initiale du cercle de progression (0 pour le démarrer à 12 heures)
                   lineCap="round" // Style de terminaison de la ligne du cercle ('butt', 'round' ou 'square'               
  />
                          <View style={{ position: 'absolute', top: 50, left: 15, zIndex: 1 }}>
                        <Text style={{ color: '#FFF', fontSize: 20 ,fontFamily: 'Poppins-Black' }}>{`${100} %`}</Text>
                      </View>
              </View>

            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 1 }}>
              <TouchableOpacity className="w-1/3  h-12 px-4 bg-black-100 rounded-2xl border-2 border-black-500 flex justify-between items-center flex-row"style={{ marginTop: 0 }} >
               <Image
                   source={icons.speed}
                   resizeMode="contain"
                   alt="Mode"
                    className="w-7 h-7"
             />
             <Text className="text-lg text-gray-100 font-psemibold ml-2">
                 Mode
            </Text>
           
               </TouchableOpacity>
               <TouchableOpacity className="w-1/3 h-12 px-4 bg-black-100 rounded-2xl border-2 border-black-500 flex justify-between items-center flex-row"style={{ marginTop: 0 }}>
                 <Image
                   source={icons.speedometer}
                   resizeMode="contain"
                   alt="speed"
                    className="w-7 h-7 "
                  />
                  <Text className="text-lg text-gray-100 font-psemibold mr-1">
                 Speed
                  </Text>
           
                </TouchableOpacity>
                <TouchableOpacity className="w-1/3 h-12 px-4 bg-black-100 rounded-2xl border-2 border-black-500 flex justify-between items-center flex-row"style={{ marginTop: 0 }}>
                         <Image
                   source={icons.energy}
                   resizeMode="contain"
                   alt="Battery"
                    className="w-7 h-7"
                  />
                      <Text className="text-lg text-gray-100 font-psemibold mr-1">
                               Battery
                       </Text>
           
                 </TouchableOpacity>
            </View>
                      <View style={{ flex: 1,justifyContent: "center", alignItems: "center" , top: "-30%"}}>
                    <View
                style={{
                  //flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  //backgroundColor:"green",
                  zIndex: 100,
                }} 
              >
                <TouchableOpacity
                  style={[styles.button, { bottom:"-250%",backgroundColor: `${btnXColor}` }]} //top:"30%", right:"1%", 
                  onPress={() => onButtonXPress()}
                >
                          <Image
                               source={icons.forward}
                               resizeMode="contain"
                               alt="bluetoothsignal2"
                               className="w-7 h-10"
                           />
                  <Text style={styles.buttonText}>Forward</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  //flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  //backgroundColor:"gold",
                }}
              >
                <TouchableOpacity
                  style={[styles.button, { top: "285%", right:"25%", backgroundColor: `${btnYColor}`,right:"30%",
                }]} //top:"2%", left:"10%",
                  onPress={() => onButtonYPress()}
                >
                          <Image
                               source={icons.left}
                               resizeMode="contain"
                               alt="bluetoothsignal2"
                               className="w-7 h-10"
                           />                  
                  <Text style={styles.buttonText}>Left</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  //flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  //backgroundColor:"blue",
                }}
              >
                <TouchableOpacity
                  style={[styles.button, { bottom:"-180%", left:"25%", backgroundColor: `${btnAColor}` ,left:"30%"}]} //bottom:"2%", 
                  onPress={() => onButtonAPress()}
                >
                          <Image
                               source={icons.right}
                               resizeMode="contain"
                               alt="bluetoothsignal2"
                               className="w-7 h-10"
                           />                  
                  <Text style={styles.buttonText}>Right</Text>
                </TouchableOpacity>
              </View>
            <View
                style={{
                  //flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  //backgroundColor:"red",
                }}
              >
                <TouchableOpacity
                  style={[styles.button, { bottom:"-218%", backgroundColor: `${btnBColor}` }]} //bottom:"30%", left:"1%",
                  onPress={() => onButtonBPress()}
                >
                          <Image
                               source={icons.back}
                               resizeMode="contain"
                               alt="bluetoothsignal2"
                               className="w-7 h-10"
                               style={{ marginBottom: -70 }} 
                           />                  
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
              </View>
              
          </View>
    </ScrollView>
  </ScrollView>
</SafeAreaView>


  )
}

export default remotedrive
let BACKGROUND_COLOR = "#161616"; //191A19
let BUTTON_COLOR = "#346751"; //1E5128
let ERROR_COLOR = "#C84B31"; //4E9F3D
let TEXT_COLOR = "#ECDBBA"; //D8E9A8
const styles = StyleSheet.create({
  mainBody: {
    flex:8,
    justifyContent: 'center ',
    alignItems: "center",
    color:TEXT_COLOR,
    backgroundColor: BACKGROUND_COLOR,
  },
  button: {
    height: 80,
    width: 130,
    borderRadius: 90/ 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 22,
    color: "#1E1E2D",
    fontWeight: "700",
    fontFamily: "Poppins-SemiBold",
  },
});

