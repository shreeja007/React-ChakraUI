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
  VStack,
  HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenu, BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
  <>
  <Button 
  zIndex={'overlay'}
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
          <VStack align={'flex-start'}>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
              <Link to={'/'} >Home</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
              <Link to={'/videos'} >Video</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
              <Link to={'/videos?category=free'} >Free Videos</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
              <Link to={'/upload'} >Upload Video</Link>
            </Button>
          </VStack>

          <HStack pos={"absolute"} bottom={'10'} left={"0"} width={'full'} justifyContent={"space-evenly"}>
            <Button onClick={onClose} colorScheme='purple' >
              <Link to={'/login'}>Login</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
              <Link to={'/signup'}>SignUp</Link>
            </Button>
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Header