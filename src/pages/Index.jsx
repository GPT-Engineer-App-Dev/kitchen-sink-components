// Complete the Index page component here
// Use chakra-ui and react-icons for UI components
import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaSort } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex justify="space-between" align="center" p={4}>
        <Heading size="lg">MyApp</Heading>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaBars />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Grid Layout */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="green.500" />
        <GridItem w="100%" h="10" bg="red.500" />
      </Grid>

      {/* Form Elements */}
      <Box p={4}>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Checkbox defaultChecked>Remember me</Checkbox>
        <RadioGroup defaultValue="1">
          <Stack direction="row">
            <Radio value="1">Option 1</Radio>
            <Radio value="2">Option 2</Radio>
          </Stack>
        </RadioGroup>
        <Button mt={4} colorScheme="blue" type="submit">
          Submit
        </Button>
      </Box>

      {/* Cards */}
      <Flex wrap="wrap" justify="center" p={4}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2}>
          <Heading size="md">Card Title</Heading>
          <Text mt={4}>This is a card with some content.</Text>
        </Box>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2}>
          <Heading size="md">Card Title</Heading>
          <Text mt={4}>This is another card with some content.</Text>
        </Box>
      </Flex>

      {/* Modal */}
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This is the modal content.</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              Name <IconButton aria-label="Sort" icon={<FaSort />} />
            </Th>
            <Th>
              Age <IconButton aria-label="Sort" icon={<FaSort />} />
            </Th>
            <Th>
              Email <IconButton aria-label="Sort" icon={<FaSort />} />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John Doe</Td>
            <Td>30</Td>
            <Td>johndoe@example.com</Td>
          </Tr>
          <Tr>
            <Td>Jane Doe</Td>
            <Td>25</Td>
            <Td>janedoe@example.com</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Footer */}
      <Flex as="footer" justify="center" p={4} borderTop="1px" borderColor="gray.200">
        <Link href="#" p={2}>
          <FaFacebook />
        </Link>
        <Link href="#" p={2}>
          <FaTwitter />
        </Link>
        <Link href="#" p={2}>
          <FaInstagram />
        </Link>
      </Flex>
    </Container>
  );
};

export default Index;
