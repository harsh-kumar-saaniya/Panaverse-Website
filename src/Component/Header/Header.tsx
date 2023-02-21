import React from 'react'
import { MoonIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, HStack, Image, Link, List, ListItem } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box p={5}>
            <Flex justifyContent={'space-around'} alignItems={'center'}>
                <Box>
                    <HStack>
                        <Image src="/Images/fulllogo.png" width={'100px'} alt="Panaverse logo" />
                        <List>
                            <HStack align={"center"} spacing={10} fontWeight="bold" ml={'40px'}>
                                <ListItem>Home</ListItem>
                                <ListItem>About</ListItem>
                                <ListItem>Contact</ListItem>
                            </HStack>
                        </List>
                    </HStack>
                </Box>
                <Box>
                    <Box pl='15' as="span" >
                        <SearchIcon w={'25px'} h={'25px'} />
                    </Box>
                    <Box px='15' as="span" >
                        <MoonIcon w={'25px'} h={'25px'} />
                    </Box>
                    <Link href="https://www.piaic.org/" >
                        <Button variant={'outline'}>Go to PIAIC</Button>
                    </Link>
                </Box>
            </Flex>
        </Box>


    )
}

export default Header