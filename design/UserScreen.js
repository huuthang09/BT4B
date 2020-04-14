import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  FlatList,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import UserItem from '../components/UserItem';
import { useDispatch, useSelector } from "react-redux";
import { getDataRequest } from "../actions/UserActions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../components/InfoInput"

export default function Home(props) {
  const user = useSelector((state) => state.getUser);
  
  const dispatch = useDispatch();

  const [txtname, setName] = useState("");

  const [txtemail, setEmail] = useState("");

  useEffect(() => {
    dispatch(getDataRequest());
  }, []);

  const setNewNote = () => {
    if (txtname.length > 0 && txtemail.length > 0 && txtemail.includes('@') == true) {
      let jsondata = user.data;
      let obj = {
        id: jsondata.length+1,
        name: txtname,
        email: txtemail
      };
    props.onAdd(obj, jsondata);
    dispatch(getDataRequest());
    Alert.alert("Thêm thành công");
    } else {
      Alert.alert("Nhập đủ thông tin");
    }
  };
  const styles = StyleSheet.create({

    container: {
      flexDirection: "column",
      flex:1,
      marginTop:hp("5%")
    },

    itemContainer: { margin: 10, flex:1 },

    infoContainer: {
      height: hp("20%"),
      flexDirection: "column",
      margin: 15,
    },

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

  return (
    <View style={styles.container}>
    <Text style={{fontSize:22, color:'#00F', alignSelf:'center'}}>THÊM NGƯỜI DÙNG</Text>
    <View style={styles.infoContainer}>
        <Input
        ipSetTitle= {(title) => setName(title)}  
        ipSetContent= {(content) => setEmail(content)}  
        />
        <Button title="Lưu" 
        onPress={
              setNewNote} />
      </View>

      <View style={styles.itemContainer}>
      <Text style={{fontSize:22, color:'#00F', alignSelf:'center'}}>DANH SÁCH NGƯỜI DÙNG</Text>
        <FlatList
          data={user.data}
          renderItem={({item}) => UserItem(item)}
          keyExtractor={(item) => item.id + ""}
        />
      </View>
    </View>
  );
}
