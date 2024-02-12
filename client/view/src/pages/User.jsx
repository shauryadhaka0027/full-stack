import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Spinner ,Flex,Button, Badge } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Bottom from '../components/Bottom';

const User = () => {
  const { product_id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [task, setTask] = useState([]);
  const[image,setImage]=useState("")

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3002/product/search/${product_id}`,{withCredentials:true});
        setTask(res.data.msg.products[0]);
        setImage(res.data.msg.image)
        console.log("img",image)
     
        console.log("my",res.data.msg.products[0])
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [product_id]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    

<div>
<Flex  justifyContent="center">
<Box
display="flex"
justifyContent="space-between"
alignItems="flex-start"
maxWidth="100%"
boxShadow="md"
p="4"
mb="4"
borderRadius="md"
>
  
<Box  >
  <Image src={image} alt={task.title} h="600px" w="100%" objectFit="cover" />
</Box>

<Flex flexDirection="column" justifyContent="space-between" >
<Box  ml="4">
  <Text as="h2" fontSize="30px" fontWeight="bold" mb="2" pt={10 } textAlign="center">
    {task.title}
  </Text>
  <Text>{task.description}</Text>
  <Text fontSize="md" mt="2">
    {task.salePrice ? (
      <>
        <del>${task.price}</del> <Badge colorScheme="green">${task.salePrice} ({task.salePercentage}% Off)</Badge>
      </>
    ) : (
      `Price: $${task.price}`
    )}
    <Text fontSize="45px" color="purple">Price:{task.price}</Text>
  </Text>
  <Text fontSize="30px" mt="2">
    {task.reviews} {task.reviews === 1 ? 'Review' : 'Reviews'}
  </Text>
  <Button variant="solid" color="purple" mt="2" w="100%" >
    Add to Cart
  </Button>
</Box>
<Box  ml="4">
  <Text as="h3" fontSize="lg" fontWeight="bold" mb="2">
    What We Offer
  </Text>
  <ul textAlign="center">
    <li>3-Day Delivery</li>
    <li>FREE Shipping</li>
    <li>Get it by Wed. Feb 14! Order within 10 hrs. and 28 min. to Grenola - 67346 ✓</li>
    <li>3 Year Protection Plan for ${task.protectionPlanPrice}</li>
  </ul>
  <Text as="h3" fontSize="lg" fontWeight="bold" mt="4">
    What's Covered
  </Text>
  <Text>{task.protectionPlanDescription}</Text>
  <Button variant="solid" color="purple"  w="100%"  mt="2">
    Buy Protection Plan
  </Button>
</Box>
<Box  ml="4">
  <Text as="h3" fontSize="lg" fontWeight="bold" mb="2">
    On Sale
  </Text>
  <Text>$40 OFF your qualifying first order of $250+¹ with a Wayfair credit card</Text>
  <Text as="h3" fontSize="lg" fontWeight="bold" mt="4">
    Pro Price
  </Text>
  <Text>Businesses Only Enroll your business for FREE to save on select items.</Text>
</Box>
</Flex>

</Box>
</Flex>





{<Bottom/>}


</div>

  );
};

export default User;
