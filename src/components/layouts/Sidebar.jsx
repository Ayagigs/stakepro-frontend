import React from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion } from '@mantine/core';
import {
    VscOrganization,
    VscHome,
    VscMail,
    VscInbox,
    VscRocket,
    VscBell,
    VscChevronRight,
    VscFeedback,
    VscMilestone,
    VscWorkspaceTrusted,
    VscGraph,
    VscQuestion,
} from "react-icons/vsc";
import SidebarNavLink from './SidebarNavLink';

const Sidebar = ({ }) => {
    const location = useLocation()
    return (
        <>
            <nav className='admin_sidebar resize'>
                <div className='logo'>
                    <h2>Stakpro</h2>
                </div>
                <ul>
                    <menu>
                        <li>
                            <SidebarNavLink className={location.pathname !== "/admin" ? "inactive" : "active"} path={"/admin"} icon={<VscHome />} name={"Home"} color={"default"} variant={"transparent"} />
                        </li>
                        <li>
                            <SidebarNavLink path={"/admin/notifications"} icon={<VscBell />} name={"Notifications"} color={"default"} variant={"transparent"} />
                        </li>
                        <li>
                            <SidebarNavLink path={"/admin/stakes"} icon={<VscFeedback />} name={"Stakes"} color={"default"} variant={"transparent"} />
                        </li>

                        <li>
                            <SidebarNavLink path={"/admin/market"} icon={<VscGraph />} name={"Market"} color={"default"} variant={"transparent"} />
                        </li>

                    </menu>

                    <menu>
                        <li>
                            <Accordion
                                chevron={<VscChevronRight color={"gray"} size={18} />}
                                styles={{
                                    chevron: {
                                        '&[data-rotate]': {
                                            transform: 'rotate(90deg)',
                                        },
                                    },
                                }} defaultValue="products">
                                <Accordion.Item value="products">
                                    <Accordion.Control><h3>Pages</h3></Accordion.Control>
                                    <Accordion.Panel>
                                        <SidebarNavLink path={"/admin/pages/faq"} icon={<VscQuestion />} name={"Faq"} color={"default"} variant={"transparent"} />
                                        <SidebarNavLink path={"/admin/pages/blog"} icon={<VscMail />} name={"Blog"} color={"default"} variant={"transparent"} />
                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="users">
                                    <Accordion.Control><h3>USERS</h3></Accordion.Control>
                                    <Accordion.Panel>
                                        <SidebarNavLink path={"/admin/users"} icon={<VscOrganization />} name={"Users"} color={"teal"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/user/mail"} icon={<VscInbox />} name={"Mail notification"} color={"violet"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/user/settings"} icon={<VscFeedback />} name={"Supports"} color={"blue"} variant={"light"} />
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    </menu>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;