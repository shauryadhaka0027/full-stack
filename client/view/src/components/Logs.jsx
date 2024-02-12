import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { FaBoxOpen } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";
import { TbClockStar } from "react-icons/tb";
import { MdOutlineStars } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { LiaGiftsSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { TbMapDollar } from "react-icons/tb";
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    IconButton,
    Flex,
    Button
  } from '@chakra-ui/react'

const Logs = () => {
  return (
    <div>
      <Menu>
   <MenuButton
     h={{ base: '2rem', md: '2.5rem' }} 
     w={{ base: '6rem', md: '8rem' }}
      transition='all 0.2s'
      borderRadius="5px"
      borderWidth='1px'
      border="1px solid white"
      _hover={{ bg: 'purple' }}
      _expanded={{ bg: 'purple' }}
      _focus={{ boxShadow: 'outline' }}
      as={Flex}
      alignItems="center"
    >
      Signup <VscAccount style={{ marginTop: "-1.4rem", marginLeft:"-1rem", fontSize: "1.1rem" }} />
    </MenuButton>
  <MenuList>
    <MenuItem>
    <Button style={{margin:"auto",backgroundColor:"purple",color:"white",width:"100%"}}><Link to="/Login">Sign in</Link></Button>
    </MenuItem>
    <MenuItem ><span style={{textAlign:"center"}}><Link to="/register">create account</Link></span></MenuItem>
    <MenuDivider />
    <MenuItem><VscAccount style={{margin:"5px"}}/>My account</MenuItem>
    <MenuItem><FaBoxOpen style={{margin:"5px"}} />My order</MenuItem>
    <MenuItem><LuLayoutList style={{margin:"5px"}} />My List</MenuItem>
    <MenuItem><MdOutlineStars  style={{margin:"5px"}} />Recently Viewed</MenuItem>
    <MenuItem><TbClockStar style={{margin:"5px"}} />Review my Purchase</MenuItem>
    <MenuItem>  <MdHelpOutline style={{margin:"5px"}} />Help & Contact</MenuItem>
    <MenuItem> <FiBookOpen style={{margin:"5px"}}  />3D Room Planer</MenuItem>
    <MenuDivider />
    <MenuItem> <LiaGiftsSolid  style={{margin:"5px"}}  />Gift Card</MenuItem>
    <MenuItem> <CiCreditCard1 style={{margin:"5px"}}  />Wayfair Credit Card</MenuItem>
    <MenuItem> <TbMapDollar style={{margin:"5px"}}  />Wayfair Finacing</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}

export default Logs
