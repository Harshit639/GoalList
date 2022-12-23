import {StyleSheet,View,TextInput,Button, Modal, Image} from 'react-native'
import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';

function GoalInput(props){
    const [enteredgolatext,setgoaltext] = useState('');

    function goalinputhandler(enteredtext){
        setgoaltext(enteredtext);
      }

    function propsfunction(){
        props.addGoal(enteredgolatext);
        setgoaltext('');
    }
    return(
        <>
        
        <Modal visible={props.visible} animationTypea="slide">
        <StatusBar style='light'/>
        <View style={styles.textinputs}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textinputstyle} placeholder='whats your goal' value={enteredgolatext} onChangeText={goalinputhandler}/>
        <View style={styles.buttoncontainer}>
        <View style={styles.button}>
        <Button title='Submit'  onPress={propsfunction} color='#b180f0'></Button>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.oncancel} color='#f31282'></Button>
        </View>
        </View>
        </View>
        </Modal>
        </>
    )

    
};

const styles = StyleSheet.create({
    textinputs: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor: '#311b6b',
      },
    
    textinputstyle:{
        borderWidth: 2,
        borderColor: '#e4d0ff',
        padding: 13,
        backgroundColor: '#e4d0ff',
        width:'100%',
        borderRadius: 6,
      },

      buttoncontainer:{
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal:8,
      },
      button:{
        width: '30%',
        marginHorizontal: 8,
      },
      image:{
        width:100,
        height:100,
        margin:20,
      }
})

export default GoalInput;