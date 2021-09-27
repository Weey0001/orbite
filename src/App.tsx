import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
const { width, height } = Dimensions.get("window");

const AppStyle = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  subCont: {
    justifyContent: "center",
    alignItems: "center"
  },
  surfBody: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderColor: "#ffffff15",
    borderWidth: 1,
    borderRadius: 1000
  },
  noyau: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.5
  },
  electron: {
    width: 20,
    height: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    top: 100,
    backgroundColor: "white"
  }
});

let rotation0 = {
  0: {
    transform: [{ rotateZ: "180deg" }]
  },
  1: {
    transform: [{ rotateZ: "-180deg" }]
  }
};

let rotation1 = {
  0: {
    transform: [
      { rotateX: "60deg" },
      { rotateY: "10deg" },
      { rotateZ: "-180deg" }
    ]
  },
  1: {
    transform: [
      { rotateX: "60deg" },
      { rotateY: "10deg" },
      { rotateZ: "180deg" }
    ]
  }
};

const App: React.FC = () => (
  <View style={AppStyle.container}>
    <View style={AppStyle.subCont}>
      <Animatable.View
        style={[AppStyle.surfBody]}
        animation={rotation0}
        duration={5000}
        iterationCount="infinite"
        easing="linear"
      >
        <View style={[AppStyle.electron]} />
      </Animatable.View>
      <Animatable.View
        style={[AppStyle.surfBody]}
        animation={rotation1}
        duration={5000}
        iterationCount="infinite"
        easing="linear"
      >
        <View style={[AppStyle.electron]} />
      </Animatable.View>
      <Animatable.Image
        source={{
          uri: "https://www.freeiconspng.com/uploads/globe-earth-png-22.png"
        }}
        style={[AppStyle.noyau]}
        animation="rotate"
        duration={10000}
        iterationCount="infinite"
        easing="linear"
      />
    </View>
  </View>
);

export default App;
