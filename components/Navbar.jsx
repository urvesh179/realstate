import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Switch,  useColorMode } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { themContext } from '../utils/context';
import { useContext } from 'react';

const Navbar = () => {
  const {  size } = useContext(themContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const deskTop = () => (
    <Box w='35%' fontSize='1xl' fontWeight='bold'>
      <Flex  >
        <Link href='/' passHref>
          <Box p='2'  >
            <Link href='/' passHref>
              Home
            </Link>
          </Box>
        </Link>
        <Box p='2' >
          <Link href='/search' passHref>
            Search
          </Link>
        </Box>
        <Box p='2' >
          <Link href='/search?purpose=for-sale' passHref>
            Buy Property
          </Link>
        </Box>
        <Box p='2' >
          <Link href='/search?purpose=for-rent' passHref>
            Rent Property
          </Link>
        </Box>
        <Box p='2' >
          <Switch size='sm' isChecked={colorMode === 'dark' ? true : false} ml={2} onChange={toggleColorMode} />
        </Box>
      </Flex>
    </Box>
  )
  const mobile = () => (
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem  icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
          <Link href=''>

            <Switch size='sm' ml={2} isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode}>{colorMode}</Switch>
          </Link>

        </MenuList>
      </Menu>
    </Box>
  )
  return (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
      <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/' paddingLeft='2'>Tvaste Estates</Link>
      </Box>
      <Spacer />
      {size.width <= 756 ? mobile() : deskTop()}
    </Flex>
  )
}

export default Navbar;
