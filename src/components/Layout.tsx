import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84A9C0",
    padding: 17,
    position: "relative",
  },
});
export default Layout;
