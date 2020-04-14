import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Input(props) {
  return (
    <View>
      <TextInput
        style={styles.txtInputTitle}
        autoCapitalize="none"
        placeholder="Nhập tên đầy đủ"
        onChangeText={props.ipSetTitle}
      />

      <TextInput
        style={styles.txtInputContent}
        autoCapitalize="none"
        placeholder="Nhập email"
        onChangeText={props.ipSetContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({

    txtInputTitle: {
      fontSize: 20,
      width: "80%",
      color: "#000",
      height: hp("5%"),
      borderBottomColor: "#0FF",
      borderBottomWidth: 2,
      margin: 5,
    },

    txtInputContent: {
      fontSize: 16,
      height: 20,
      width: "80%",
      color: "#000",
      height: hp("5%"),
      borderBottomColor: "#0FF",
      borderBottomWidth: 2,
      margin: 5,
    },
  });