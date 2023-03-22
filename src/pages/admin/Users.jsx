import { ActionIcon, Table, Menu, Badge, Flex, Button } from '@mantine/core';
import { VscBell } from "react-icons/vsc";
import { PageHeader } from '../../components';
import {
    VscOrganization,
    VscEllipsis,
} from "react-icons/vsc";

const Users = () => {
    const users = [
        { email: "jedidiahbasil@gmail.com", username: "Jedi", id: 124111414, status: "verified" },
        { email: "kingsley@gmail.com", username: "Jedi", id: 124111414, status: "not verified" },
        { email: "john@gmail.com", username: "Jedi", id: 124111414, status: "verified" },
        { email: "peter@gmail.com", username: "Jedi", id: 124111414, status: "verified" }
    ]

    const userTableRows = users.map(({ id, email, status, username }) => (
        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td><Badge>{status}</Badge></td>
            <td>
                <Menu width={200} withArrow position='bottom-end' shadow="md">
                    <Menu.Target>
                        <ActionIcon size={20} color={"gray"}>
                            <VscEllipsis />
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={() => console.log(id)} icon={<VscOrganization size={18} />}>
                            Update status
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </td>
        </tr>
    ))


    return (
        <>
            <PageHeader emoji={"👚"} pageName={"Users"} />
            <div className='order_container'>
                <div className='order_content'>
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={10}>

                        <Button radius={5} leftIcon={<VscBell size={18} />} variant='default'>Filter</Button>
                        <Flex
                            mb={10}
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={5}>

                            <ActionIcon size={30} variant={"default"} color={"gray"}>
                                <VscBell size={20} color={"gray"} />
                            </ActionIcon>
                            <ActionIcon size={30} variant={"default"} color={"gray"}>
                                <VscBell size={20} color={"gray"} />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                    <div className='table_container'>
                        <Table verticalSpacing={'md'}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>{userTableRows}</tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;