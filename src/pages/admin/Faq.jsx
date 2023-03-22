import { PageHeader } from "../../components";
import { ActionIcon, Badge, Menu, Flex, Drawer, TextInput, Textarea, Button } from "@mantine/core";

import { VscEllipsis, VscSaveAs, VscTrash } from "react-icons/vsc";

function Faq() {
    return (
        <div>
            <PageHeader emoji={"🏠"} pageName={"Faq"} />

            {/* <Drawer size={"lg"} title={<h3>Add faq</h3>} position="right" withOverlay={false} opened={"true"} >
           <form action="">
                <TextInput size={"lg"} placeholder={"Question"} mb={15} />
                <Textarea placeholder="Anser" size={"lg"} mb={15} />
                <Button size="md">Add faq</Button>
           </form>
        </Drawer> */}

            <div className="faq_container">
                <Flex
                    mb={10}
                    justify="space-between"
                    align="center"
                    direction="row"
                    gap={10}>
                        <TextInput size={"md"} radius={20} placeholder="Search" />
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={5}>
                    </Flex>
                    <Button  radius={20} size="md">Add faq</Button>
                </Flex>
                <div className="faq_content">
                    <div className="card">
                        <Menu width={200} withArrow position="bottom-end" shadow="md">
                            <Menu.Target>
                                <div className="more_icon_container">
                                    <ActionIcon size={20} color={"gray"}>
                                        <VscEllipsis />
                                    </ActionIcon>
                                </div>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item icon={<VscSaveAs size={18} />}>Edit faq</Menu.Item>
                                <Menu.Item color="red" icon={<VscTrash size={18} />}>
                                    Delete faq
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>

                        <Badge color="gray" size="xs">Question</Badge>
                        <h2>Is Stakepro secure ?</h2>

                        <Badge color="gray" size="xs">Answer</Badge>
                        <p>
                            Stakepro is a secured and reliable staking platform use in more
                            than 20 countries in Africa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
