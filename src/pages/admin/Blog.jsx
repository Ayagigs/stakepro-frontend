import { PageHeader } from "../../components";
import post_img from "../../assets/img/about.svg";
import {
    ActionIcon,
    Menu,
    Drawer,
    TextInput,
    Textarea,
    Button,
    Flex,
} from "@mantine/core";
import { VscEllipsis, VscSaveAs, VscTrash } from "react-icons/vsc";
import { useState } from "react";

function Blog() {
    const [drawerControl, setDrawerControl] = useState({
        createDrawer: false,
        editDrawer: false,
        previewDrawer: false,
    });

    const switchDrawer = (drawer, value) => {
        setDrawerControl({ ...drawerControl, [drawer]: value });
    };

    return (
        <div>
            <PageHeader emoji={"🏠"} pageName={"Blog"} />

            <Drawer
                onClose={() => switchDrawer("editDrawer", false)}
                size={"1000px"}
                title={<h2>Edit post</h2>}
                position="right"
                withOverlay={false}
                opened={drawerControl["editDrawer"]}
            >
                <form action="">
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={10}
                    >
                        <div></div>
                        <Flex
                            mb={10}
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={5}
                        >
                            <Button>Create post</Button>
                            <Button variant="light">Preview</Button>
                        </Flex>

                    </Flex>

                    <TextInput
                        styles={{
                            input: {
                                border: "none",
                                fontWeight: "800",
                                fontSize: "22px"
                            }
                        }}
                        size={"lg"} placeholder={"Title"} mb={15} />
                    <Textarea
                        styles={{
                            input: {
                                border: "none",
                            }
                        }}
                        placeholder="Body" size={"lg"} mb={15} />
                </form>
            </Drawer>

            <Drawer
                onClose={() => switchDrawer("createDrawer", false)}
                size={"1000px"}
                title={<h2>Create post</h2>}
                position="right"
                withOverlay={false}
                opened={drawerControl["createDrawer"]}
            >
                <form action="">
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={10}
                    >
                        <div></div>
                        <Flex
                            mb={10}
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={5}
                        >
                            <Button>Create post</Button>
                            <Button variant="light">Preview</Button>
                        </Flex>

                    </Flex>

                    <TextInput
                        styles={{
                            input: {
                                border: "none",
                                fontWeight: "800",
                                fontSize: "22px"
                            }
                        }}
                        size={"lg"} placeholder={"Title"} mb={15} />
                    <Textarea
                        styles={{
                            input: {
                                border: "none",
                            }
                        }}
                        placeholder="Body" size={"lg"} mb={15} />
                </form>
            </Drawer>

            <div className="blog_container">
                <Flex
                    mb={10}
                    justify="space-between"
                    align="center"
                    direction="row"
                    gap={10}
                >
                    <TextInput size={"md"} radius={20} placeholder="Search" />
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={5}
                    ></Flex>
                    <Button
                        onClick={() => switchDrawer("createDrawer", true)}
                        radius={20}
                        size="md"
                    >
                        Add faq
                    </Button>
                </Flex>
                <div className="blog_content">
                    <div className="card">
                        <Menu width={200} withArrow position="bottom-end" shadow="md">
                            <Menu.Target>
                                <div className="more_icon_container">
                                    <ActionIcon variant="light" size={30} color={"gray"}>
                                        <VscEllipsis />
                                    </ActionIcon>
                                </div>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item
                                    onClick={() => switchDrawer("editDrawer", true)}
                                    icon={<VscSaveAs size={18} />}
                                >
                                    Edit post
                                </Menu.Item>
                                <Menu.Item color="red" icon={<VscTrash size={18} />}>
                                    Delete post
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>

                        <img src={post_img} alt="" />
                        <h2>What's staking ?</h2>
                        <p>
                            Crypto staking refers to the act of holding a certain amount of
                            cryptocurrency in a wallet or other designated account, which is
                            then used to validate... <span>Read more</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
