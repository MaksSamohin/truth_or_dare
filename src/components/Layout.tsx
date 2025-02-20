import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
const statusBarHeight = getStatusBarHeight();

StatusBar.setHidden(true);
StatusBar.setBarStyle("light-content");
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      {children}
    </View>
  );
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
