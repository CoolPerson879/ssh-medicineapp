import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const WelcomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("userData");
        if (jsonValue != null) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking login status", error);
      }
    };

    const checkDarkModeStatus = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("isDark");
        if (jsonValue != null) {
          const darkMode = JSON.parse(jsonValue);
          setIsDarkMode(darkMode);
        } else {
          console.log("no theme settings found!");
        }
      } catch (error) {
        console.error("Error checking dark mode status", error);
      }
    };

    

    checkLoginStatus();
    checkDarkModeStatus();
  }, []);

  const handleContinue = () => {
    if (isLoggedIn) {
      router.navigate("/home");
    } else {
      router.push("/login");
    }
  };
const clearData = async () => {
      try {
        await AsyncStorage.clear();
        setIsLoggedIn(false);
      } catch (error) {
        console.error("Error clearing data", error);
      }
    };
  return (
    <>
      <View style={isDarkMode === false ? styles.container : styles.darkMode}>
        <Image
          source={require("../assets/logo_wb.png")}
          style={{
            width: 150,
            height: 150,
            margin: 10,
            position: "relative",
            top: -25,
          }}
        />

        <Text style={styles.title}>Welcome to Clinitime!</Text>
        <Text style={styles.subtitle}>Log your clinical hours easily</Text>
        <Pressable
          style={{
            backgroundColor: "#FFF",
            borderRadius: 25,
            padding: 10,
            paddingHorizontal: 40,
          }}
          onPress={handleContinue}
        >
          <Text style={{ fontSize: 18 }}>Continue to App</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#AA2222",
            borderRadius: 25,
            padding: 10,
            paddingHorizontal: 40,
            marginTop: 10,
          }}
          onPress={clearData}
        >
          <Text style={{ fontSize: 18 }}>Delete All Data</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b74c5",
    color: "white",
  },
  darkMode: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    color: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "#cfcfcf",
  },
  button: {},
});

export default WelcomeScreen;
