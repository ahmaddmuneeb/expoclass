import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Settings from "../screens/settings/Settings";

import Ionicons from "@expo/vector-icons/Ionicons";
import Camera from "../screens/camera/Camera";
import Video from "../screens/video/Video";
import CountryList from "../screens/countries/CountryList";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings";
          } else if (route.name === "Camera") {
            iconName = focused ? "camera" : "camera";
          } else if (route.name === "Video") {
            iconName = focused ? "videocam" : "videocam";
          } else if (route.name === "CountryList") {
            iconName = focused ? "flag" : "flag";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#707070",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CountryList" component={CountryList} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
