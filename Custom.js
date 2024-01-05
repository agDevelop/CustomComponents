import { Component, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// Функциональный stateless компонент, специально без деструктуризации пропов ({name, surname, group})
const Info = (props) => {
  return (
    <Text>
      <Text>Работу выполнил </Text>
      <Text style={{ fontWeight: "bold" }}>
        {props.surname} {props.name}
      </Text>
      <Text>, группа </Text>
      <Text style={{ fontStyle: "italic" }}>{props.group}</Text>
    </Text>
  );
};

// С деструктуризацией для многократного использования
const CustomizableText = ({ content }) => {
  let size = 10 + Math.floor(Math.random() * 10);
  let weight = Math.random() > 0.5 ? "bold" : "normal";
  let color =
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(6, "0");

  return (
    <Text
      style={{
        fontSize: size,
        fontWeight: weight,
        color: color,
        marginBottom: 12,
      }}
    >
      {content}
    </Text>
  );
};

// Stateful класс компонент
class RandomizableText extends Component {
  constructor() {
    super();
    this.state = {
      text: "Нажать, чтобы буквы перемешались",
    };
  }

  shuffle() {
    var a = this.state.text.split(""),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    this.setState({
      text: a.join(""),
    });
  }

  render() {
    return (
      <View style={{ marginVertical: 8 }}>
        <Button title={this.state.text} onPress={this.shuffle.bind(this)} />
      </View>
    );
  }
}

// Компонент, получающий и использующий дочерние элементы и функцию обратного вызова, а также получающий внешний компонент в качестве свойства
const LoggedInView = ({
  isLoggedIn = () => {
    return false;
  },
  loginButton = <Button title="Default" />,
  children,
}) => {
  if (isLoggedIn()) {
    return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 24 }}>
          <Text>Выполните </Text>
          {loginButton}
          <Text>, чтобы скрыть содержимое</Text>
        </Text>
        {children}
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          <Text>Выполните </Text>
          {loginButton}
          <Text>, чтобы увидеть содержимое</Text>
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inline: {
    display: "flex",
  },
});

export { Info, LoggedInView, CustomizableText, RandomizableText };
