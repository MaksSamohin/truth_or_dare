import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import Icon from "react-native-vector-icons/Feather";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { gamemodes } from "../data/data";
import Svg, { Text as TextSvg } from "react-native-svg";
import { useDispatch } from "react-redux";
import { updateGamemode } from "../../store/gameSlice";

const GameModesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Layout>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={styles.backButton}
            name="chevron-left"
            size={24}
            color="#DDD8B8"
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Выберите режим игры</Text>
        </View>
        <FlatList
          data={gamemodes}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.gamemodeCard}
              onPress={() => {
                dispatch(updateGamemode(item.name));
                navigation.navigate("StartGame");
              }}
            >
              <View style={styles.gamemodeCardIcon}>
                <Image source={item.icon} />
              </View>
              <View style={styles.gamemodeCardTexts}>
                <Svg height="40" width="200">
                  <TextSvg
                    {...styles.gamemodeCardName}
                    x="0"
                    y="30"
                    fontSize="40"
                    stroke="#DDD8B8"
                    strokeWidth="2"
                    fill="none"
                  >
                    {item.name}
                  </TextSvg>
                  <TextSvg
                    {...styles.gamemodeCardName}
                    x="0"
                    y="30"
                    fontSize="40"
                    fill="#696495"
                  >
                    {item.name}
                  </TextSvg>
                </Svg>

                <Text style={styles.gamemodeCardDescription}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Layout>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 50,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 45,
  },
  backButton: {
    position: "absolute",
    left: -5,
    top: 50,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  titleText: {
    marginRight: 10,
    textAlign: "center",
    fontFamily: "Dongle-Regular",
    color: "#DDD8B8",
    fontSize: 24,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  gamemodeCard: {
    backgroundColor: "#696495",
    borderRadius: 15,
    width: 340,
    height: 60,
    marginBottom: 45,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  gamemodeCardIcon: {
    marginLeft: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  gamemodeCardTexts: {
    marginLeft: 18,
    marginBottom: 9,
    fontFamily: "Dongle-Regular",
    flexDirection: "column",
  },
  gamemodeCardName: {
    fontFamily: "Dongle-Regular",
  },
  gamemodeCardDescription: {
    fontFamily: "Dongle-Regular",
    color: "#DDD8B8",
    fontSize: 11,
  },
});
export default GameModesScreen;
