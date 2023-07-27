import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Define the type of props that the Header component will accept
interface HeaderProps {
  title?: string
}

// Define the Header component
const Header: React.FC<HeaderProps> = ({ title }) => {
  // Define a function to generate a random number
  //   const uuid: any = () => {
  //     Math.floor(Math.random() * 100000000)
  //   }

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

// Default props if none are passed in
Header.defaultProps = {
  title: 'Shopping List',
}

// Stylesheet for the Header component
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#888888',
  },
  text: {
    color: 'coral',
    fontSize: 23,
    textAlign: 'center',
  },
})

export default Header
