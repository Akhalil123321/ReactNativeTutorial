import { useState } from 'react';
import {
  Button, 
  FlatList, 
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native';
import GoalItem from './Components/Goalitem';
export default function App() {
  const [newGoal, setNewGoal] = useState('')
  const [list, setList] = useState([])
  let i = 1
  const goalInputHandler = (textData) => {
    setNewGoal(textData)
  }
  const addGoalHandler = () => {
    setList((currentList) => [
      ...currentList,
      {text: newGoal, id: Math.random().toString()}
    ])
    clearText()
  }
  const clearText = () => {
    setNewGoal('')
  }
  return (
    <View style={styles.cont}>
      <View style={styles.ch1}>
        <TextInput 
          style={styles.ch2} 
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={newGoal}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <FlatList 
      data={list}
      renderItem={itemData => {
        return<GoalItem text = {itemData.item.text}/>
      }}
      alwaysBounceVertical={false} 
      keyExtractor={(item, index) => {
        return item.id
      }}
      />
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
  
});
