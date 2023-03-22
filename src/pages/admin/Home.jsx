import { ActionIcon, Table, Menu, Badge } from '@mantine/core';
import { OverviewCard, PageHeader } from '../../components';
import {
    VscOrganization,
    VscEllipsis,
    VscTelescope,
    VscPulse
} from "react-icons/vsc";
const Home = () => {

    const users = [
        { email: "jedidiahbasil@gmail.com", username: "Jedi", id: 124111414, status: "verified" },
        { email: "kingsley@gmail.com", username: "Jedi", id: 124111414, status: "not verified" },
        { email: "john@gmail.com", username: "Jedi", id: 124111414, status: "verified" },
        { email: "peter@gmail.com", username: "Jedi", id: 124111414, status: "verified" }
    ]

    const coin = [
        { email: "jedidiahbasil@gmail.com", coin: "Bitcoin", wallet: "Metamask", address: "AX1241442425" },
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

    const stakeTableRows = coin.map(({ address, coin, email, wallet }) => (
        <tr>
            <td>{coin}</td>
            <td>{email}</td>
            <td>{wallet}</td>
            <td><Badge>{address}</Badge></td>
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
            <PageHeader emoji={"🏠"} pageName={"Home"} />


            <div className='home_container'>

                <div className="welcome_container">
                    <div className="text">
                    <h2>Welcome Gloria</h2>
                    <p>gloria@gmail.com</p>
                    </div>
                </div>

                <div className='overview_container'>
                    <OverviewCard value={"700"} icon={<VscOrganization size={28} />} title={"Total Users"} color={'blue'} />
                    <OverviewCard value={"100"} icon={<VscTelescope size={28} />} title={"Total Countries"} color={'orange'} />
                    <OverviewCard value={"300"} icon={<VscPulse size={28} />} title={"Total Stakes"} color={'violet'} />
                    <OverviewCard value={"700eth"} icon={<VscOrganization size={28} />} title={"Total income"} color={'teal'} />
                </div>

                <div className='order_content'>
                    <h3>New stakes</h3>
                    <div className='table_container'>
                        <Table verticalSpacing={'md'}>
                            <thead>
                                <tr>
                                    <th>Coin</th>
                                    <th>Email</th>
                                    <th>Wallet</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>{stakeTableRows}</tbody>
                        </Table>
                    </div>
                </div>

                <div className='order_content'>
                    <h3>Recent users</h3>
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

export default Home;