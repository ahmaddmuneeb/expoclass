import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home/Home";
import Camera from "../screens/camera/Camera";
import VideoScreen from "../screens/video/Video";
import Settings from "../screens/settings/Settings";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="Video" component={VideoScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
