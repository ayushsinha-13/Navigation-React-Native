import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('About')}>
        <View style={{width: 150, height: 50, backgroundColor: "#000000", borderRadius: 20,alignItems: "center", marginTop: 30}}>
            <Text style={{color:"#eee",fontSize: 30, fontWeight: "400"}}>About</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Home