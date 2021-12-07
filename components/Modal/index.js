import React from 'react'
import { Modal, View, Text, Button, StyleSheet } from 'react-native'

export default function ModalQuestion(props) {
    
    const { modalVisible, setModalVisible, onDelete, itemSelected } = props

    return (
        <Modal visible={modalVisible} transparent animationType='fade' onRequestClose={() => setModalVisible(false)}>
            <View style={styles.containerModal}>
            <View style={styles.infoContainer}>
                <Text>Estas seguro que deseas borrar {itemSelected.value}?</Text>
                <View style={styles.containerButton}>
                    <Button style={styles.button} title='Si' onPress={() => onDelete(itemSelected.id)}/>
                    <Button style={styles.button} title='No' onPress={() => setModalVisible(false)}/>
                </View>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: 'rgba(0,0,0,0.5)', 
        height: '100%',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    infoContainer: {
        backgroundColor: 'white', 
        width: '60%', 
        height: '25%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '20%'
    },
    button: {
        width: '80%',
        height: '10%'
    }
})