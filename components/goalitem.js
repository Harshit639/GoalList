import {StyleSheet,View,Text, Pressable} from 'react-native';


function GoalItem(props){

     return(
        <View style={styles.goalcontainter} >
        <Pressable android_ripple={{color: '#210644'}} onPress={props.del.bind(this,props.id)} style={({pressed}) => pressed && styles.presseditem}>
              <Text style={styles.goaltext}>{props.text}</Text> 
        </Pressable>
        </View>
     )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalcontainter:{
        
        margin:8,
        borderRadius:6,
        backgroundColor: '#00afef', 
      },
      goaltext:{
        padding:8,
        color: 'white',
      },
      presseditem:{
        opacity: 0.5,
      }
})