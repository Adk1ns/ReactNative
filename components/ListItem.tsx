import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface ListItemProps {
  item: {
    id: number
    text: string
  }
  deleteItem: (id: number) => void
}

const ListItem: React.FC<ListItemProps> = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.ListItem}>
      <View style={styles.ListItemView}>
        <Text style={styles.ListItemText}>{item.text}</Text>
        <Text onPress={() => deleteItem(item.id)}>❌</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ListItem: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  ListItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListItemText: {
    fontSize: 18,
  },
})

export default ListItem
