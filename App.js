import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import PostCard from './components/PostCard';


export default function App() {

const [blogPosts, setBlogPosts] = useState([])





useEffect(() => {
  fetch('http://192.168.10.150:8080')
  .then(res => res.json())
  .then(data => setBlogPosts(data))
  .catch(err => console.error(err))
},[])
  

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      
      <ScrollView>
        
      {blogPosts.map((singlePost, index) => {
        console.log(singlePost)
        return(
          <PostCard singlePost={singlePost} key={singlePost._id} index={index} />
        )
      })}
      </ScrollView>
      
    </SafeAreaView>
  );
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
