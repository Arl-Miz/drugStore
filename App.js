import { Pressable, StyleSheet, Text, View } from "react-native";
import Main from "./screens/Main";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#333" }}>
        <Main />
      </View>
    </>
  );
}
