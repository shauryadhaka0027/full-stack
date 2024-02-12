import React, { useContext, useEffect, useState } from 'react';
import { Box, Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { BsCart3 } from "react-icons/bs";
import { ContextApi } from '../Context/ContextApiProvider';
import { Link } from 'react-router-dom';

const Product = () => {
  const { query, setQuery, cart, setCart } = useContext(ContextApi);
  const [searchResults, setSearchResults] = useState([]);
  

  const addProduct = async (product) => {
    try {
      setCart([...cart, product]);
      
      await axios.post('http://localhost:3002/product/add', {
        products: product,
        Id: product.product_id,
        image: product.thumbnails[0][6]
      }, { withCredentials: true });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3002/api/search?q=${query}&engine=home_depot&api_key=b340071d5ae9a3562ce881a92f132a6247b9af3906ae5c70048e57d697a625ef`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSearchResults(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div style={{ paddingTop: "120px" }}>
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        {searchResults.map((ele, index) => (
          <Box
            bg="white"
            p={5}
            borderRadius="md"
            boxShadow="md"
            maxWidth="350px"
            minWidth="300px"
            textAlign="center"
            key={index}
          >
            <Image src={ele.thumbnails[0][6]} borderRadius="md" mb={4} w="100%" h="200px" objectFit="cover" />
            <Heading as="h3" size="md" mb={2}>
              {ele.title}
            </Heading>
            <Text fontSize="sm" mb={2}>
              Rating: {ele.rating}
            </Text>
            <Flex justifyContent="center" alignItems="center" mb={4}>
              <Text fontSize="lg" fontWeight="bold" color="purple" mr={2}>
                ${ele.price}
              </Text>
              <Text fontSize="sm" color="gray.500" textDecoration="line-through" mr={2}>
                ${ele.price}
              </Text>
              <Text fontSize="sm" color="teal.500">
                Review: {ele.reviews}
              </Text>
            </Flex>
            <Divider mb={4} />
            <Flex justifyContent="space-evenly">
              
                <Link to={`/user/${ele.product_id}`} color="purple" fontWeight="bold" textDecoration="underline">
                  Quickview
                </Link>
              
              <Flex justifyContent="space-around">
                <Text><BsCart3 /></Text>
                <Text onClick={() => addProduct(ele)} fontSize={15}><Link to="/cart"> Add to cart</Link></Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
