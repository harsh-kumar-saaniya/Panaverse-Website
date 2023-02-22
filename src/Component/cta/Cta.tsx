import { Box, Container, Heading, Text, Button, HStack } from '@chakra-ui/react';
import React from 'react'

function Cta() {
    return (

        <Box >
            <Container maxW={1200} bg={'blue.50'} p='10'>
                <HStack>
                    <Box flex={3} >
                        <Heading>Try Free Component</Heading>
                        <Text fontSize={'20px'}>You don't have to buy a pig in poke - You can experiance our free community components before making a purchase decision</Text>
                    </Box>
                    <Box flex={1} alignSelf={'flex-start'}>
                        <Button colorScheme={'blue'} float={'right'}>View Component</Button>
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}

export default Cta;