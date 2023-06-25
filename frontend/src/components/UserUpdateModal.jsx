import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Input,
    FormControl,
    FormLabel,
    Select,
} from '@chakra-ui/react';
import { EditIcon } from "@chakra-ui/icons";
import axios from 'axios';
import UseToast from '../customHook/UseToast';


export default function UserUpdateModal({ id, getData, data }) {
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [gender, setGender] = useState(data.gender);
    const [status, setStatus] = useState(data.status);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState();
    const toastMsg = UseToast();

    const handleUserUpdate = async () => {
        //If user will not provide any updates then we will not make any api call
        if (name == data.name && email == data.email && gender == data.gender && status == data.status) {
            toastMsg({
                title: `Please provide any update in any of the following input fields`,
                status: "warning"
            });
            return;
        };
        if (name == "" || email == "" || gender == "" || status == "") {
            toastMsg({
                title: `Please fill input and try again`,
                status: "warning"
            });
            return;
        };

        let obj = {
            name: name,
            email: email,
            gender: gender,
            status: status,
        };

        axios.patch(`https://goldstone-assignment-backend.onrender.com/api/user${id}`, obj).then((res) => {
            console.log(res);
            toastMsg({
                title: `User data Updated successfully`,
                status: "success"
            });
            getData();
        }).catch((error) => {
            toastMsg({
                title: `${error.message}`,
                status: "error"
            });
        })
    }
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )
    return (
        <>
            <Box
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                <EditIcon /> Edit
            </Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Update items</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="gender">
                            <FormLabel>Select your Gender</FormLabel>
                            <Select placeholder='Select your gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>
                        </FormControl>
                        <FormControl id="status">
                            <FormLabel>Select your Status</FormLabel>
                            <Select placeholder='Status...' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="active">Active</option>
                                <option value="inactive">InActive</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => {
                            handleUserUpdate()
                            onClose()
                        }}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}