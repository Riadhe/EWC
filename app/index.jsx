import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../components";
import { images } from "../constants";

export default function App() {
  return (
<SafeAreaView className ="bg-primary h_full">
  <ScrollView contentContainerStyle = {{height : '100%'}}>
  

  <View className="w-full flex justify-center items-center h-full px-4">  
          <Image
            source={images.logo}
            className="w-[380px] h-[200px]"
            resizeMode="contain"
          />
            <Image
            source={images.Componento2}
            className="max-w-[380px] w-full h-[200px]"
            resizeMode="contain"
          />
             <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
            Making Control,Mobility {"\n"}Taste Better
               {" "}
               </Text>
            </View>
      
            <Text className="text-sm font-pregular text-gray-100 mt-4 text-center">
            Drive remotely Lock ,Unlock and manage speed settings with{" "}
            <Text className="text-sm font-pregular text-backgroundcolor-100 mt-4 text-center">Wheel Chair Controller</Text>
          </Text>
          <CustomButton
            title="Get Started"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-5"
          />
          

    </View>
  </ScrollView>

</SafeAreaView>
);
};


