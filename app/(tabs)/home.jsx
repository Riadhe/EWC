import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";


const Home = () => {
  return (
<SafeAreaView className="bg-black-200 h_full">
  <ScrollView contentContainerStyle={{ height: '100%' }}>
    <ScrollView className="px-4 my-6">
      <Text className="text-4xl text-white font-psemibold"style={{ marginTop: 20 }}>Search for devices</Text >
      <View className="w-full h-24 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-between items-center flex-row"style={{ marginTop: 40 }}>
        <Image
          source={icons.wheelchair}
          resizeMode="contain"
          alt="wheelchair"
          className="w-10 h-10"
        />
        <Text className="text-lg text-gray-100 font-pextralight ml-1">
             Please gurantee the battery power, and main power on 
        </Text>

      </View>
      <TouchableOpacity>
      <Image
            source={images.search}
            className="max-w-[400px] w-full h-[200px]"
            resizeMode="contain"style={{ marginTop: 100 }}
          />
          </TouchableOpacity>
          
    </ScrollView>
  </ScrollView>
</SafeAreaView>


  )
}

export default Home