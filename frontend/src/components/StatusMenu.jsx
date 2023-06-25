import React, { useState, useEffect } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons"
import axios from 'axios';
import { Spinner } from '@chakra-ui/react'
import UseToast from '../customHook/UseToast';

const StatusMenu = ({ status, id, getData }) => {
    const [newStatus, setNewStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const toastMsg = UseToast();

    useEffect(() => {
        if (newStatus !== "") {
            const obj = { status: newStatus };
            setLoading(true);
            axios.patch(`http://localhost:8080/api/user/${id}`, obj)
                .then((res) => {
                    getData();
                    setLoading(false);
                    toastMsg({
                        title: `Status updated successfully`,
                        status: "success"
                    });
                })
                .catch((error) => {
                    setLoading(false);
                    toastMsg({
                        title: `${error.message}`,
                        status: "error"
                    });
                    console.log(error);
                });
        }
    }, [newStatus]);

    const handleActive = (status) => {
        setNewStatus(status);
    }

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {loading ? <Spinner /> : status}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleActive("active")}>Active</MenuItem>
                    <MenuItem onClick={() => handleActive("inactive")}>Inactive</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default StatusMenu;
