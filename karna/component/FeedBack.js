import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import axios from 'axios'
import localhost from '../confix'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';


function FeedBack({navigation}) {
    const [name,setName] = useState("");
    const [feedbackText, setfeedtext] = useState(" ");
    const [role,setrole] = useState(" ");
    const [rating,setrating] = useState(" ");
    
    const submitData = () => {
     
      axios.post(`http://${localhost}/api/v1/feedback`, {
       name:name,
       role:role,
       rating:rating,
       feedbackText:feedbackText
      }).then((res) => {
          alert("Product  uploaded successfully");
      }).catch((e) => {
          console.error(e);
          alert('Some error occurred while uploading recipes');
      });
  }




  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:"orange",borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
    <View style={{ flexDirection: "row", paddingHorizontal: 20,marginTop: 40, }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold",marginLeft:20 }}>FeedBack</Text>
    </View>
    <View style={{marginTop:10}}>
    </View>
</View>


    <View style={{marginTop:15}}>
    

    <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder='name'
        value={name}
        onChangeText={text => setName(text)}

      />
      </View>
      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>FeedBackText</Text>
      <TextInput
        style={styles.input}
        placeholder='FeedBackText'
        value={feedbackText}
       onChangeText={text => setfeedtext(text)}

      />
      </View>
      
      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Rating</Text>
      <TextInput
        style={styles.input}
        placeholder='Rating'
        value={rating}
        onChangeText={text => setrating(text)}

      />
      </View>

      <View style={{marginTop:5}}>
     <Text style={{fontSize:18,fontWeight:"bold",color:"black",marginLeft:10}}>Role</Text>
     <Picker
    selectedValue={role}
    onValueChange={(itemValue) => setrole(itemValue)}
    style={{ backgroundColor: 'white', zIndex: 9999, elevation: 1000, }}
>
        <Picker.Item label="Select role ?" value=""  style={{color:"black",fontSize:15}} />
        <Picker.Item label=" Reciver" value="Yes" style={{color:"black",fontSize:15}} />
        <Picker.Item label="selling" value="No" style={{color:"black",fontSize:15}} />
        <Picker.Item label="other" value="D" style={{color:"black",fontSize:15}} />
      </Picker>
      
      </View>
   
    
  <View style={{ width: 170, alignSelf: 'center',marginTop:10 }}>
                            <Button
                                color="green"
                                title="Submit"
                                onPress={submitData}
                            />
                        </View>
    
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      margin:10
    },
    modalView:{
  
      position:"absolute",
      bottom:2,
      width:"100%",
      backgroundColor:"white"
  
  },
  InputBox:{
    borderWidth:0,
    padding:10,
    borderRadius:10,
    marginBottom:10,
    backgroundColor:"#f3f2f1",
    },
  modalButtonView:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
  },btn:{
      backgroundColor:"blue",
      borderRadius:30,
  },
  textarea:{
      height:"30%",
      borderWidth:2,
      borderColor:"black",
      margin:"4%"
  },
  lable:{
    fontSize:25,
    paddingLeft:20
  },
  
  });
  

export default FeedBack
