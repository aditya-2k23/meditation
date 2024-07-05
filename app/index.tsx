import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import beachImage from "../assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 pt-2 justify-between">
            <View>
              <Text className="text-center text-white font-semibold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-gray-200 font-normal text-2xl mt-3 font-smono">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/NatureMeditate")}
                title="Get Started"
                textStyles="font-smono text-xl"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
