import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  Info,
  LoggedInView,
  CustomizableText,
  RandomizableText,
} from "./Custom";

export default function App() {
  const [loggedInStatus, setStatus] = useState(false);

  function switchStatus() {
    setStatus(!loggedInStatus);
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Info name="Андрей" surname="Гончаров" group="224-372" />
      </View>
      <LoggedInView
        isLoggedIn={() => {
          return loggedInStatus;
        }}
        loginButton={
          <Button
            title={loggedInStatus ? "Выход" : "Вход"}
            onPress={() => switchStatus()}
          />
        }
      >
        <CustomizableText content="Просто текст" />
        <CustomizableText content="Разного размера" />
        <CustomizableText content="Разного цвета" />
        <CustomizableText content="Просто для примера" />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          =================
        </Text>
        <RandomizableText />
        <RandomizableText />
        <RandomizableText />
        <RandomizableText />
      </LoggedInView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    marginTop: 64,
  },
  info: {
    marginBottom: 24,
  },
});
