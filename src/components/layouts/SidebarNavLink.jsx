import { NavLink } from 'react-router-dom';
import { ActionIcon } from '@mantine/core';


const SidebarNavLink = ({color,name,path,icon,variant,className }) => {
    return (
        <>
            <NavLink to={path} className={className}>
                <ActionIcon size={25} color={color} variant={variant}>
                    {icon}
                </ActionIcon>
                <span>{name}</span>
            </NavLink>
        </>
    );
};

export default SidebarNavLink;