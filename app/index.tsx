import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import beachImage from "../assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-4 mt-12 mb-8 justify-between">
            <View>
              <Text className="text-center text-white font-semibold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-gray-200 font-normal text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push("/NatureMeditate")}
                title="Get Started"
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
