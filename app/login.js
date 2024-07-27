import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const userData = { name, email };
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      router.push("/(tabs)/home");
    } catch (error) {
      console.error("Error saving user data", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        source={require("../assets/logo_wb.png")}
        style={{
          width: 150,
          height: 150,
          margin: 10,
          top: 75,
          position: "absolute",
        }}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
        autoCapitalize="none"
      />
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b74c5",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#FFF",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: "50%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
});

export default LoginScreen;
