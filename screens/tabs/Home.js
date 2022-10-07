import * as React from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  Stylesheet,
  Animated,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { drugsData, ImageItems, recentlyAdded } from "../../constants/utils";
import Styles, { COLORS } from "../../constants/styles";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../../components/Loading";

export default Index = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <View
      style={{
        flex: 1,
        marginTop: "10%",
        backgroundColor: "#fff",
      }}
    >
      <Loading loading={true} />
      <StatusBar barStyle="default" />
      <View
        style={{
          marginHorizontal: "5%",

          flexDirection: "row",

          justifyContent: "flex-end",
          marginTop: "5.6%",
          marginBottom: "6%",
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 50 }}>Menu</Text>
        </View>
      </View>

      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={drugsData}
        numColumns={2}
        contentContainerStyle={{
          flex: 0.8,
          justifyContent: "center",
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
              <View
                style={{
                  width: width / 2.5,
                  height: width / 2.6,
                  backgroundColor: "#f8f8fb",
                  borderRadius: 20,
                  margin: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: item.bgc,
                    borderRadius: 16,
                    width: 55,
                    height: 55,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={item.uri}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
                <Text>{item.dec}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
