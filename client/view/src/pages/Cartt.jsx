import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../Context/ContextApiProvider';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

const Cartt = () => {
  const { cart, setCart } = useContext(ContextApi);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quality, setQuality] = useState(1); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const newTotalPrice = cart.reduce((accumulator, ele) => accumulator + ele.price * quality, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);
  
  const handleDelete = (product_id) => {
    
    const updatedCart = cart.filter((ele) => ele.product_id !== product_id);
    setCart(updatedCart);
  };

  const handleIncrement = (product_id) => {
    const updatedCart = cart.map((item) => {
      if (item.product_id === product_id) {
        return { ...item, quantity: item.quantity + 1 }; 
      }
      return item;
    });
    setCart(updatedCart);
    setQuality(quality + 1); 
  };

  const handlePayment = () => {
    alert('Redirecting to payment page...');
    navigate("/pay");
  };

  return (
    <Box mt={10}>
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="20px"
        mb="4"
      >
        {cart.map((ele) => (
          <Box
            key={ele.product_id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            height="500px"
            width="100%"
          >
            <Image src={ele.thumbnails[0][6]} alt="" h="230px" w="100%" objectFit="cover" />
            <Box p="4">
              <Text fontSize="lg" fontWeight="bold">
                {ele.title}
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="blue.600">
                {`Price: $${ele.price}`}
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="blue.600">
                {`Quantity: ${quality}`}
              </Text>
              <Text fontSize="sm" mt="2">
                {ele.reviews}
              </Text>
              <Flex mt="2" alignItems="center" justify="space-around">
                <Button onClick={() => handleDelete(ele.product_id)} colorScheme="red" mr="2">
                  Delete
                </Button>
                <Button onClick={() => handleIncrement(ele.product_id)} color="purple">
                  +1
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Box>
      
      <Text fontSize="xl" fontWeight="bold" mb="2">
        Total Price: ${totalPrice}
      </Text>
      <Button onClick={handlePayment} color="purple" size="lg">
        Proceed to Payment
      </Button>
    
    </Box>
  );
};

export default Cartt;
