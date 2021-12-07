import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import ModalQuestion from './components/Modal';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  
  const [list, setList] = useState([])
  const [textInput, setTextInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const onAdd = () => {
    setList([...list, {id: Math.floor(Math.random() * 100) + 1, value: textInput, state: false}])
  }
  const onHandlerModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }
  const onDelete = (id) => {
    setList(list.filter(item => item.id != id))
    setModalVisible(false)
  }


  return (
    <View style={styles.container}>
      <ModalQuestion 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDelete={onDelete}
        itemSelected={itemSelected}
      />
      <AddItem 
        setTextInput={setTextInput}
        onAdd={onAdd}
      /> 
      <ListItem 
        list={list}
        onHandlerModal={onHandlerModal}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
 