import React from "react";
import { StyleSheet, Text, TouchableOpacity, View ,Image } from "react-native";
import { icons, images } from "../../constants";

const GamePad = () =>  {
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
      <View style={styles.mainBody}>
          <View style={{ flex: 1,justifyContent: "center", alignItems: "center" , top: "-10%"}}>
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
                  style={[styles.button, { bottom:"-245%",backgroundColor: `${btnXColor}` }]} //top:"30%", right:"1%", 
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
                  style={[styles.button, { top: "290%", right:"25%", backgroundColor: `${btnYColor}` }]} //top:"2%", left:"10%",
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
                  style={[styles.button, { bottom:"-180%", left:"25%", backgroundColor: `${btnAColor}` }]} //bottom:"2%", 
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
                  style={[styles.button, { bottom:"-230%", backgroundColor: `${btnBColor}` }]} //bottom:"30%", left:"1%",
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
          
Il semble y avoir une confusion sur l'utilisation des fonctions en tant qu'enfants dans React. L'erreur "Functions are not valid as a React child" se produit lorsque vous essayez de rendre une fonction directement comme un enfant d'un composant React, ce qui n'est pas autorisé.

Pour corriger cette erreur, vous devez appeler la fonction dans le rendu plutôt que de la renvoyer comme une fonction.

Voici comment corriger le code :

javascript
Copy code
<View className="w-1/3 h-40 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-between items-center flex-row" style={{ marginTop: 5, width: '33%', height: 120 }}>
  <View style={{ flexDirection: 'row', marginTop: 5, width: '97%', height: 120, justifyContent: 'center', alignItems: 'center' }}>
    <AnimatedCircularProgress
      size={100}
      width={10}
      fill={50} // Pourcentage de remplissage du cercle de progression
      tintColor="#FF4B4B" // Couleur de remplissage du cercle de progression
      backgroundColor="#000" // Couleur de fond du cercle de progression
      arcSweepAngle={240} // Angle du cercle complet (360 pour un cercle complet)
      rotation={240} // Rotation initiale du cercle de progression (0 pour le démarrer à 12 heures)
      lineCap="round" // Style de terminaison de la ligne du cercle ('butt', 'round' ou 'square')
    >
      {() => (
        <View style={{ position: 'absolute' }}>
          <Text style={{ color: '#FFF', fontSize: 18 }}>50%</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  </View>
</View>
      </View>            
    );
}
export default GamePad;
//parameters
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