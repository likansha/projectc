import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image,SafeAreaView,Ionicon} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={styles.container }>
            <View style={styles.cardContainer}>
             <View style={styles.authorContainer}>
             <View style={styles.authorImageContainer}>   
             <Image
             source={require("../assets/profile_img.png")}
             style={styles.profileImage} >
             </Image>
             </View>
            <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>
            {this.props.post.author} 
            </Text>
            </View>
            </View>

            <Image 
            source={require("../assets/post.jpeg")} style={styles.postImage} />

            <View style={styles.captionContainer}>
            <Text style={styles.captionText}>
             {this.props.post.caption}
             </Text>

             </View>
             <View style={styles.actionContainer}>
             <View style={styles.likeButton}>
             <Ionicon name={"heart"} size= {RFValue(28)}  color = {"white"} />
             <Text style={styles.likeText}>12k</Text>
            </View>
            </View>
            </View>
            </View>
        )
    }
}



  const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  authorContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  authorImageContainer: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  profileImage: {
     justifyContent: "center",
    alignItems: "center"
   
  },
  authorNameText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});


