import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
  } from '@chakra-ui/react'

  import { GiHamburgerMenu } from "react-icons/gi";
const Menuu = () => {
  return (
    <div>
      <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<GiHamburgerMenu/>}
    variant='outline'
  
  ></MenuButton>
  <MenuList>
    <MenuItem icon={<GiHamburgerMenu/>} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<GiHamburgerMenu/>} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<GiHamburgerMenu/>} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<GiHamburgerMenu/>} command='⌘O'>
      Open File...
    </MenuItem>
   
  </MenuList>
</Menu>
    </div>
  )
}

export default Menuu
