import {StyleSheet,View,TextInput,Button} from 'react-native'
import {useState} from 'react'

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
        <View style={styles.textinputs}>
        <TextInput style={styles.textinputstyle} placeholder='whats your goal' value={enteredgolatext} onChangeText={goalinputhandler}/>
        <Button title='Submit' onPress={propsfunction}></Button>
        </View>
    )

    
};

const styles = StyleSheet.create({
    textinputstyle:{
        borderWidth: 2,
        borderColor: '#CCCCCC',
        padding: 8,
        marginRight: 8,
        width:'80%',
      },

      textinputs: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:2,
        borderBottomColor: '#cccccc',
        marginBottom: 10,
      },
})

export default GoalInput;