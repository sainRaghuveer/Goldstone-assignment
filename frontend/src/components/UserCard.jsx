import React from 'react';
import { Tr, Td, Image, Skeleton, Button } from "@chakra-ui/react";
import StatusMenu from './StatusMenu';
import UserUpdateModal from './UserUpdateModal';

const UserCard = ({ data, getData, loading }) => {
    return (
        <>
            <Tr style={{ border: "2px solid teal" }}>
                <Td>{data._id}</Td>
                <Td>{data.name}</Td>
                <Td>{data.email}</Td>
                <Td>{data.gender == "male" ? "Male" : "Female"}</Td>
                <Td>{<StatusMenu status={data.status} id={data._id} getData={getData} />}</Td>
                <Td><Button> <UserUpdateModal id={data._id} getData={getData} data={data} /> </Button></Td>
            </Tr>
        </>
    )
}

export default UserCard