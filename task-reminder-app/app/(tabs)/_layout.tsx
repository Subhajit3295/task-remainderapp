import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Interface',
          headerShown: false,
          tabBarStyle: { display: "none" }
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarStyle: { display: "none" }
        }}
      />

    </Tabs>
  )
}

export default _layout