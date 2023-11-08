import { View, StyleSheet, Image,Text } from "react-native";

export default function PostCard({singlePost, index}){

    return(
        <View style={styles.cardContainer} key={singlePost._id}>
        <View>
          <Image style={styles.avatarImage} source={{uri: `https://randomuser.me/api/portraits/men/${index}.jpg`}} />
          <Text>{singlePost.title}</Text>
        </View>
    
      <Image source={{uri: `https://source.unsplash.com/random/${index}` }} style={styles.image} />
     <Text> {singlePost.content}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
  
      display:'flex',
      height: '100%',
      width:'100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer:{
      marginVertical:20
    },
    avatarImage:{
      borderRadius:100,
      marginRight:10,
      width:50,
      height:50,
      marginLeft:10
  
    },
    image: {
      width:'100%',
      flex:1,
      aspectRatio:1,
      height:350,
      width:100
    }
  });
  