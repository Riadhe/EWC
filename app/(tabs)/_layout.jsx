import { StatusBar } from "expo-status-bar";
import {Image, View, Text, SafeAreaView } from 'react-native'
import {Tabs, Redirect } from 'expo-router';
import { icons } from "../../constants";


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {

return (
  <>
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#FF4B4B',
      tabBarInactiveTintColor: "#CDCDE0",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#161622",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 84,
      },
    }}
  >
<Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
    <Tabs.Screen
          name="remotedrive"
          options={{
            title: "remotedrive",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.controllers}
                color={color}
                name="RemoteDriving"
                focused={focused}
              />
            ),
             }}
        />      
             
   <Tabs.Screen
          name="lockunlock"
          options={{
            title: "lockUnlock",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.padlock}
                color={color}
                name="lock-unlock"
                focused={focused}
              />
            ),
          }}
        />

      </Tabs>
      </>
  );
};

export default TabsLayout