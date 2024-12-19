import {
  View,
  Text,
  ImageBackground,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

// Get screen height
const { height: screenHeight } = Dimensions.get("window");
const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0 ,0,0,0.8)"]}
        >
          {/* <SafeAreaView className="flex-1 mx-5 my-8 justify-between"> */}
          <SafeAreaView
            style={
              Platform.OS === "ios"
                ? {
                    // flex: 1,
                    marginHorizontal: 20,
                    marginVertical: screenHeight * 0.37, // 10% of screen height
                    justifyContent: "space-between",
                  }
                : null
            }
            className={
              Platform.OS === "android"
                ? "flex-1 mx-5 my-8 justify-between"
                : undefined
            }
          >
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                title="Get Started"
                onPress={() => console.log("get started pressed")}
                textStyle="text-black"
                containerStyles="bg-white mt-5"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
