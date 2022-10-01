import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { bgs, icons, items } from "../../constants/utils";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function Search({ navigation, route }) {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-BoldItalic.ttf"),
  });
  const { width, height } = Dimensions.get("screen");
  const [serach, setSearch] = useState("");
  const [filterData, setFilterData] = useState(items);

  useEffect(() => {
    // console.log(route.params?.doSearch);
    searchFilterFunction(route.params?.doSearch);
  }, [route]);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = items.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(items);
      setSearch(text);
    }
  };

  if (!loaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: "10%",
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{}}>
        <TextInput
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 25,
            marginVertical: 10,
            borderWidth: 3,
            // padding: 7,
            fontSize: 19,
            borderRadius: 10,
            borderColor: "#f1eded",
          }}
          value={serach}
          placeholder="Search"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={() => searchFilterFunction("")}
        />
        <View style={{ position: "absolute", right: 60, top: 30 }}>
          <Feather name="search" size={30} />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontFamily: "Montserrat" }}>
          Side Effects
        </Text>
      </View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={filterData}
        numColumns={2}
        renderItem={({ item }) => {
          const rbg = Math.floor(Math.random() * bgs.length);
          const ric = Math.floor(Math.random() * icons.length);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Profile", {
                  name: item.name,
                  description: item.dec,
                })
              }
            >
              <View
                style={{
                  width: width / 2.5,
                  height: width / 1.6,
                  backgroundColor: "#f8f8fb",
                  borderRadius: 20,
                  margin: 20,
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <ImageBackground
                  // resizeMode="cover"
                  source={bgs[rbg]}
                  style={{
                    //   borderTopEndRadius: 300,
                    width: width / 2.5,
                    height: width / 2.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={icons[ric]}
                    style={{ width: 60, height: 60 }}
                  />
                </ImageBackground>
                <View style={{ margin: 6, maxHeight: 40 }}>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={{ fontSize: 20, color: "tomato" }}>
                      {item.name}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 12, fontFamily: "Montserrat" }}>
                    {item.dec}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
