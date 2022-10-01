import { StyleSheet } from "react-native";

//index
//export { default, assets } from "./index";

export const COLORS = {
  PRIMARY_COLOR: "#673ab7",
  SECONDARY_COLOR: "#8558d2",

  BLAXK: "#1a1917",
  gray: "#888888",
  BGC1: "#B721FF",
  BGC2: "#21D4FD",
  ITEM_BG_COLOR: "#2a2b2c",
  ITEM_BG_COLOR_FOCUSED: "#673ab7",
  BITCHY_PINK: "rgba(255, 25, 255, 0.92)",

  TEXT_COLOR: "#333",
  BACKGROUND_COLOR: "#151932",
  ITEMBG_COLOR: "#2a2b2c",
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.BLAXK,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollview: {
    flex: 1,
  },
  exampleContainer: {
    paddingVertical: 30,
  },
  exampleContainerDark: {
    backgroundColor: COLORS.BLAXK,
  },
  exampleContainerLight: {
    backgroundColor: "white",
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleDark: {
    color: COLORS.BLAXK,
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center",
  },
  slider: {
    marginTop: 15,
    overflow: "visible", // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 50,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});
