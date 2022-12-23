import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Button, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import GoalItem from './components/goalitem';
import GoalInput from './components/goalinput';

export default function App() {
  
  
  const [goallist,setgoallist] = useState([]);
  const [modalstatre,setmodalstate] = useState(false);

  
  function buttonfunc(enteredgolatext){
    setgoallist((goallist) => [...goallist,{text:enteredgolatext, id: Math.random().toString()}]);
    closemodal()
  }
  function deletegoal(id){
    setgoallist((goallist)=> {return ( goallist.filter((goal)=> goal.id!==id))})
  }

  function setmodal(){
    setmodalstate(true)
  }

  function closemodal(){
    setmodalstate(false)
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <View style={styles.addbuttton}>
      <Button  title="Add A Goal" onPress={setmodal} color={'#a065ec'} />
      </View>
      <GoalInput visible={modalstatre} addGoal={buttonfunc} oncancel={closemodal}/>
      <View style={styles.textoutputs}>
      {/* x  <ScrollView> */}
        {/* {goallist.map((goal)=> <View style={styles.goalcontainter}  key={goal}>
           <Text style={styles.goaltext}>{goal}</Text>
           </View>)} */}
          <FlatList 
          data={goallist} 
          renderItem={(itemdata)=>
            {return <GoalItem text={itemdata.item.text} id={itemdata.item.id} del={deletegoal}/>
            }}
            keyExtractor={(item,index) => {return(item.id)}}/>
        {/* </ScrollView> */}
      </View>
    </View>
    </>
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

  addbuttton:{
    margin: 20
  },

  
  
});
