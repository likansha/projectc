import React, { Component } from 'react';
import { Text, 
View ,
StyleSheet,
SafeAreaView,
Image,
StatusBar,
Platform,
FlatList
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import CreatePost from "./CreatePost";

let posts = require("./CreatePost.js");


export default class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                <View style={styles.appIcon}>
            <Image
                Source={require("../assets/logo.png")} 
                style={styles.imageIcon}
             ></Image>
            </View>

            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
            </View>

            <View style={styles.cardContainer}>
            <FlatList
            keyExtractor={ this.keyExtractor}
            data={posts}
            randerItem={this.randerItem} 
            />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"black"
  },
  droidSafeArea:{
    marginTop : Platform.OS === "android"? StatusBar.currentHeight : RFValue(35)
  },
  appTitle:{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.2,
    justifyContent:"center",
    alinItems:"center"
  },
  imageIcon:{
    weight:"100%",
    height:"100%",
    resizeMode:"contain"
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
     color:"white",
     fontsize:RFValue(28)
  },
  cardContainer:{
    flex:0.85
  }

})

