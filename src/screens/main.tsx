import React from 'react'
import {
  Box,
  Center,
  Text,
  VStack,
  useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/ThemeToggle'
import AnimatedCheckbox from '../components/AnimatedCheckbox'

export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={100}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w='100px' h='100px'>
          <AnimatedCheckbox />
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
