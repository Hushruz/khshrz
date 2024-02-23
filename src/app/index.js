import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from '@Components/core/DayListItem';

const days=[...Array(30)].map((val,index)=>index+1);
export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
    <FlatList 
      data={days}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      numColumns={2}
      renderItem={({item})=><DayListItem day={item} />}
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a19',
  },
  content:{
  },
  column:{
    gap:10,
    padding:10,
  },
});
