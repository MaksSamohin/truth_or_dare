import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import Layout from "../../components/Layout";
import Svg, { Text as TextSvg } from "react-native-svg";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  removeUser,
  selectAllusers,
  updateUser,
} from "../../store/usersSlice";
import {
  selectLanguage,
  toggleLanguage,
  t,
} from "../../store/localizationSlice";
import { localizedFontSize } from "../utils/helpers";
import { useFocusEffect } from "@react-navigation/native";

const MenuScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllusers);
  const [localNames, setLocalNames] = useState<{ [key: string]: string }>({});
  const [isGameStarted, setIsGameStarted] = useState(false);
  const icons = {
    boy: require("../../../assets/icons/icon_boy.png"),
    girl: require("../../../assets/icons/icon_girl.png"),
  };

  const language = useSelector(selectLanguage);

  const handleChangeLanguage = () => {
    dispatch(toggleLanguage());
  };

  const handleAdd = () => {
    const newId = uuid.v4().toString();
    setIsGameStarted(false);
    setLocalNames((prev) => ({ ...prev, [newId]: "" }));
    dispatch(addUser({ id: newId, username: "" }));
  };

  const handleDelete = (id: string) => {
    setLocalNames((prev) => {
      const newNames = { ...prev };
      delete newNames[id];
      return newNames;
    });
    dispatch(removeUser(id));
  };

  useEffect(() => {
    users.forEach((user) => {
      const newName = localNames[user.id];
      if (newName !== undefined && newName !== user.username) {
        dispatch(updateUser({ id: user.id, username: newName }));
      }
    });
  }, [localNames, users, dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        users.forEach((user) => {
          const newName = localNames[user.id];
          if (newName !== undefined && newName !== user.username) {
            dispatch(updateUser({ id: user.id, username: newName }));
          }
        });
      };
    }, [localNames, users, dispatch])
  );

  const handleStartGame = () => {
    setIsGameStarted(true);

    if (
      users.some((user) => !user.username || user.username.trim() === "") ||
      users.length === 0
    ) {
      return;
    }
    navigation.navigate("GameModes", { fromScreen: "Menu" });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Layout>
        <View style={styles.logo}>
          <Svg height="33" width="314">
            <TextSvg
              {...styles.outlinedText}
              fill="transparent"
              strokeWidth="1"
              stroke="#DDD8B8"
              x="10"
              y="30"
            >
              #TRUTHORDARE
            </TextSvg>
          </Svg>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={[styles.buttonText]}>{t("addPlayer", language)}</Text>
        </TouchableOpacity>

        <View style={styles.playerCards}>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            keyboardShouldPersistTaps="handled"
            removeClippedSubviews={false}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.playerCard,
                  isGameStarted && !item.username && styles.inputError,
                ]}
              >
                <View style={styles.playerCardLeft}>
                  <Image
                    source={item.username === "" ? icons.girl : icons.boy}
                    style={{ width: 40, height: 40, marginRight: 10 }}
                  />
                  <TextInput
                    style={styles.playerCardName}
                    placeholder={t("enterName", language)}
                    placeholderTextColor="#DDD8B8"
                    maxLength={32}
                    value={localNames[item.id] ?? item.username}
                    onChangeText={(text) =>
                      setLocalNames((prev) => ({ ...prev, [item.id]: text }))
                    }
                    onBlur={() => {
                      const newName = localNames[item.id];
                      if (newName !== item.username) {
                        dispatch(
                          updateUser({
                            id: item.id,
                            username: newName,
                          })
                        );
                      }
                    }}
                  />
                </View>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Text style={styles.playerDelete}>✕</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={handleStartGame}>
            <Text style={[styles.buttonText]}>{t("play", language)}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.changeLangButton}
            onPress={handleChangeLanguage}
          >
            <Text style={[styles.buttonText]}>
              {t("changeLanguage", language)}
            </Text>

            <Image
              source={
                language === "ru"
                  ? require("../../../assets/icons/russia.png")
                  : require("../../../assets/icons/en.png")
              }
            />
          </TouchableOpacity>
        </View>
      </Layout>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
  },
  outlinedText: {
    fontFamily: "Dongle-Regular",
    fontSize: 64,
  },
  button: {
    backgroundColor: "#72528A",
    width: 200,
    alignSelf: "center",
    height: 43,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    boxShadow: "0 2 10 -4 rgba(27, 27, 27, 0.64)",
  },
  buttonText: {
    fontFamily: "Nunito-Regular",
    color: "#DDD8B8",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    fontSize: 20,
  },
  playerCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playerCard: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
    maxWidth: 311,
    width: "100%",
    backgroundColor: "#696495",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  playerCardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  playerCardName: {
    width: 220,
    fontSize: 15,
    color: "#DDD8B8",
    fontFamily: "Nunito-Regular",
  },
  playerDelete: {
    color: "#542E71",
    fontSize: 18,
  },
  changeLangButton: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default MenuScreen;
