import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams<{ itemId: string }>();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmatinArray = affirmationToStart.text.split(".");
        //remove the last element if its an empty string
        if (affirmatinArray[affirmatinArray.length - 1] === "") {
          affirmatinArray.pop();
        }
        setSentences(affirmatinArray);
        return;
      }
    }
  }, [itemId]);

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        source={affirmation?.image}
        resizeMode="cover"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0 ,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, idx) => (
                  <Text className="text-white text-3xl mb-12 font-bold text-center">
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
