import React from 'react'
import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


function TopContainer() {
    return (
        <Box backgroundImage={'/Images/background.jpg'} backgroundSize='cover' py={20} >
            <HStack>
                <Box w={'50%'} color={'white'} pl='44'>
                    <Heading fontSize={60}>Build Your next idea even fast</Heading>
                    <Text lineHeight={'8'}>One year panaverse dao Earn as you learn Program. Consolidating web 3.0, Metaverse Artificial Intelligence (AI), Cloud Edge, and Ambient Computing/Iot Technologies</Text>
                    <Box mt='5'>
                        <Button colorScheme={'blue'} mr='5'>Buy Now</Button>
                        <Button colorScheme={'blue'} variant='outline'>View Component</Button>
                    </Box>
                    <HStack>
                        <AvatarGroup size='md' max={2} mt='5'>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                        <Text>Create By Harish</Text>
                    </HStack>
                </Box>
                <Box w={'50%'}>
                    <Image src='/Images/Metaverse.webp' />
                </Box>
            </HStack >
        </Box >
    )
}

export default TopContainer;