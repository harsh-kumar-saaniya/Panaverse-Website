import { StarIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import { BiRocket } from 'react-icons/bi'
import { RiMoonFoggyLine } from 'react-icons/ri'
import { FaPaintBrush } from 'react-icons/fa'
import { RxCode } from 'react-icons/rx'

const Features = () => {
    return (
        <Box py='50' as='section'>
            <Box textAlign={'center'}>
                <Text color={'blue.500'} fontWeight='bold'>Features</Text>
                <Heading fontWeight='semibold'>What you can expect?</Heading>
                <Text fontSize={20} py='3'>That the quick brown fox jumps over the lazy dog, if you want to get successfull you have to make your consistency</Text>
            </Box>
            <Container maxWidth={1200} mt="10" >
                <Box>
                    <SimpleGrid columns={2} spacing={10} >
                        <Box>
                            <HStack>
                                <StarIcon w={10} h={10} color={'blue'} />
                                <Box>
                                    <Heading fontSize={18}>220+ Components</Heading>
                                    <Text>All our components comes with a light and dark color mode</Text>
                                </Box>
                            </HStack>
                        </Box>
                        {/* second feature */}
                        <Box>
                            <HStack>
                                <BiRocket size={50} color={'blue'} />
                                <Box>
                                    <Heading fontSize={18}>Themable</Heading>
                                    <Text>All our components comes with a light and dark color mode</Text>
                                </Box>
                            </HStack>
                        </Box>
                        {/* third feature */}
                        <Box>
                            <HStack>
                                <RxCode size={50} color={'blue'} />
                                <Box>
                                    <Heading fontSize={18}>Developer family</Heading>
                                    <Text>All our components comes with a light and dark color mode</Text>
                                </Box>
                            </HStack>
                        </Box>
                        {/* fourth feature */}
                        <Box>s
                            <HStack>
                                <RiMoonFoggyLine size={50} color={'blue'} />
                                <Box>
                                    <Heading fontSize={18}>Dark & light </Heading>
                                    <Text>All our components comes with a light and dark color mode</Text>
                                </Box>
                            </HStack>
                        </Box>
                        {/* fivth feature */}
                        <Box>
                            <HStack>
                                <StarIcon w={10} h={10} color={'blue'} />
                                <Box>
                                    <Heading fontSize={18}>Accesibility</Heading>
                                    <Text>All our components comes with a light and dark color mode</Text>
                                </Box>
                            </HStack>
                        </Box>
                        {/* sixth feature */}
                        <Box>
                            <HStack>
                                <FaPaintBrush size={50} color={'blue'} />
                                <Box>
                                    <Heading fontSize={18}>Documentation</Heading>
                                    <Text>All our components comes with a light and dark color mode</Text>
                                </Box>
                            </HStack>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    )
}

export default Features;