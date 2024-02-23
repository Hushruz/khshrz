import {Text,View, StyleSheet,Pressable} from 'react-native'
import { Link } from 'expo-router';


export default function DayListItem({day}) {
   return (
    <Link href={`/days/day${day}`} asChild>
    <Pressable style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </Pressable>
  </Link>
   );
}
const styles = StyleSheet.create({
   
    box: {
        
        flex: 1,
        aspectRatio: 1,
    
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#605e5c',
        borderRadius: 20,
        backgroundColor:'#1b1a18',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#bebbb8',
        fontSize: 75,
        fontFamily: 'AmaticBold',
      },
  });