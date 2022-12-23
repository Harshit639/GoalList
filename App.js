import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/goalitem';
import GoalInput from './components/goalinput';

export default function App() {
  
  
  const [goallist,setgoallist] = useState([]);

  
  function buttonfunc(enteredgolatext){
    setgoallist((goallist) => [...goallist,{text:enteredgolatext, id: Math.random().toString()}]);
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoal={buttonfunc}/>
      <View style={styles.textoutputs}>
      {/* x  <ScrollView> */}
        {/* {goallist.map((goal)=> <View style={styles.goalcontainter}  key={goal}>
           <Text style={styles.goaltext}>{goal}</Text>
           </View>)} */}
          <FlatList 
          data={goallist} 
          renderItem={(itemdata)=>
            {return <GoalItem text={itemdata.item.text}/>
            }}
            keyExtractor={(item,index) => {return(item.id)}}/>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,

    
  },

  textoutputs:{
    flex:5,
  },

  
  
});
