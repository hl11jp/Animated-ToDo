import React, { useCallback, useState } from 'react'
import { Box, Center, Text, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../components/ThemeToggle'
import { Pressable } from 'react-native'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import TaskItem from '../components/TaskItem'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={100}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
