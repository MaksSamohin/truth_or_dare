import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const statusBarHeight = getStatusBarHeight();

StatusBar.setHidden(true);
StatusBar.setBarStyle("light-content");
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top + 5, paddingBottom: insets.bottom + 15 },
      ]}
    >
      {children}
    </SafeAreaView>
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
