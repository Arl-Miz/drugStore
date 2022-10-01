import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../../context/context-store";
import { AntDesign } from "@expo/vector-icons";

export default function Profile({ navigation, route }) {
  //   console.log(route.params.description);
  const { theme } = useContext(MainContext);

  return (
    <View
      key={route.params?.name}
      style={{
        flex: 1,
        marginTop: "10%",
        // backgroundColor: ,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ position: "absolute", left: 10, top: 15 }}>
          <AntDesign name="left" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View style={{ marginVertical: 30, alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />
        <Text style={{ fontSize: 30, color: "tomato" }}>
          {route.params?.name}
        </Text>
      </View>
      <ScrollView
        // horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          //   height: height / 2.25,
          //   backgroundColor: "blue",
          marginBottom: 30,
        }}
        // onScroll={scrollHandler}
        //   scrollEventThrottle={16}
      >
        {route.params?.description.map((src, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Search", { doSearch: src })}
            >
              <View
                key={index}
                style={{
                  margin: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ced2d5",
                  height: 40,
                  borderRadius: 30,
                }}
              >
                <Text>{src}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4343",
  },
});
