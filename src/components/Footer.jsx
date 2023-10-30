import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai' // Icon from react-icons/ai 

const Footer = () => {
  return <Box bgColor={'blackAlpha.900'} minH={'40'} color={'white'} p={'16'}>
      <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to our newsletter
          </Heading>
          <HStack borderBottom={' 2px solid white '} py={'2'}>
            <Input placeholder={'Your email'} borderRadius={"none"} p={'0'}  border={'none'} outline={'none'} focusBorderColor='none'/>
            <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={"0 20px 20px 0"}>
              <AiOutlineSend size={20}/>
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
          <Heading textAlign={'center'} textTransform={'uppercase'}>Video Hub</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'} >
          <Heading textAlign={'center'} textTransform={'uppercase'} size={'md'}>Social Media</Heading>
          <Button colorScheme={'whiteAlpha'} variant={'link'}>
            <a href="https://www.youtube.com/" target='_blank'>Youtube</a>
          </Button>
          <Button colorScheme={'whiteAlpha'} variant={'link'}>
            <a href="Instagram.com" target='_blank'>Instagram</a>
          </Button>
          <Button colorScheme={'whiteAlpha'} variant={'link'}>
            <a href="github.com" target='_blank'>Github</a>
          </Button>
        </VStack>
      </Stack>
  </Box>
}

export default Footer