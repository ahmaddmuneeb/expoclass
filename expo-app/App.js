import React from "react";
import RootStackNavigation from "./src/navigation/RootStackNavigation";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     height: '100%',
    //     width: '100%',
    //     backgroundColor: 'red',
    //   }}>
    //   <View style={{flex: 1, backgroundColor: 'green'}}>
    //     <View
    //       style={{
    //         flex: 0.3,
    //         backgroundColor: 'yellow',
    //       }}></View>
    //     <View
    //       style={{
    //         flex: 0.3,
    //         backgroundColor: 'red',
    //       }}></View>
    //     <View
    //       style={{
    //         flex: 0.3,
    //         backgroundColor: 'pink',
    //       }}></View>
    //   </View>
    // </View>
    // <Splash />
    <>
      <RootStackNavigation />
      <Toast />
    </>
  );
};

export default App;
