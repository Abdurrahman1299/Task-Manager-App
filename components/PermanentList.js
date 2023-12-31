import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants/CONSTANTS";
import IconButton from "./UI/IconButton";

export default function PermanentList({ title, screen, color, name }) {
  const navigation = useNavigation();
  return (
    <Pressable
      android_ripple={{ color: COLORS.RIPPLE }}
      onPress={() => navigation.navigate(screen)}
      style={styles.list}
    >
      <IconButton
        iconName={name}
        size={SIZES.ICON}
        color={color}
        type="Feather"
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  list: {
    position: "relative",
    marginBottom: 2,
    paddingVertical: SIZES.PDV,
    paddingHorizontal: SIZES.PDH,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
  text: {
    fontSize: SIZES.FONT,
    color: COLORS.TEXT,
    marginLeft: SIZES.MGH,
  },
});
