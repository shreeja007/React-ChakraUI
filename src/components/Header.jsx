import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, 
  Button,
  useDisclosure,
  Stack
} from '@chakra-ui/react'
import { link } from 'react-router-dom'
import {BiMenu, BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
  <>
  <Button 
  position={'fixed'}
  left={'4'}
  top={'4'}
  colorScheme='purple'
  p={'0'}
  h={'10'}
  w={'10'}
  borderRadius={'full'}
  onClick={onOpen}
  >
    <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}> 
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Stack>sad</Stack>
          <Stack>sad</Stack>

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Header