import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function UserItem(item) {
  return (
    <View style={styles.view}>
      <View style={styles.idContainer}>
        <Text style={styles.txtid}>{item.id}</Text>
      </View>
      <View style={{ marginLeft: wp("2%") }}>
        <Text style={styles.txtname}>{item.name}</Text>
        <Text style={styles.txtemail}>{item.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    idContainer: {
      alignSelf: "center",
      width: 25,
      alignItems: "center",
      height: 25,
      backgroundColor: "#F00",
      borderRadius: 65,
    },

    view: { flexDirection: "row", marginTop: hp("2%") },

    txtname: {
      fontSize: 18,
      color: "#F00",
    },

    txtemail: {
      fontSize: 16,
      marginTop: hp("1%"),
    },

    txtid: {
      fontSize: 18,
      color: "#FFF",
    }
  });
