import {Text,View, StyleSheet} from 'react-native'


export default function DayListItem({day}) {
   return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   
    box:{
      backgroundColor:"#f9EDE3",
      flex:1,
      aspectRatio:1,
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:"#9b4521",
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
    },
  
    text:{
      color:"#9b4521",
      fontSize:70,
      fontWeight:"bold",
    }
  
  });