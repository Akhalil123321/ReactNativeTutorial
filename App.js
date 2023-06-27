import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const goalInputHandler = (textData) => {
    setText(textData)
  }
  const addGoalHandler = () => {
    setList((currentList) => [...currentList, text])
  }
  return (
    <View style={styles.cont}>
      <View style={styles.ch1}>
        <TextInput 
          style={styles.ch2} 
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <ScrollView style = {styles.ch3}>
        {list.map((goal) =>(
          <View key={goal} style = {styles.goal}>
            <Text style = {styles.goalCh1}>{goal}</Text>
            if 
          </View>
          ))}
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    alignItems: 'stretch',
    flex : 1,
    flexDirection : 'column',
    gap : 50,
    marginHorizontal :20,
    marginTop : '20%',
  },
  ch1 : {
    display : 'flex', 
    flexDirection : 'row',
    gap: 10,
    justifyContent : 'space-around',
    alignItems : 'center',
  },
  ch2 : {
    borderWidth : 1,
    borderColor : '#cccccc',
    paddingHorizontal : 10,
    paddingVertical : 5,
    flex : 1,
  },
  ch3 : {
    borderTopWidth : 2,
    borderTopColor : '#cccccc',
    display : 'flex',
    paddingTop : 10,    
  },
  goal : {
    margin : 6,
    padding : 10,
    borderRadius : 6,
    backgroundColor : '#468CF9'
  },
  goalCh1 : {
    color : '#fff'
  }
});
