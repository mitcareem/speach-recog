import Avatar from "../components/Avatar";

export default {
    title: "Avatar",
    component: Avatar,
    argTypes: {
        color: { control: "color" },
    },
};
const Template = (args) => <Avatar {...args}>{args.content}</Avatar>;

export const Small = Template.bind({});
Small.args = {
    height: "80px",
    width: "80px",
    src: "https://res.cloudinary.com/dpybjl3g3/image/upload/v1674976138/genrati/generated_images/ixlyuhuzs680way7aswf.jpg",
    alt: "Avatar",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};

export const Medium = Template.bind({});
Medium.args = {
    height: "120px",
    width: "120px",
    src: "https://res.cloudinary.com/dpybjl3g3/image/upload/v1674976138/genrati/generated_images/upsga8b6bh0jwg0kwyib.jpg",
    alt: "Avatar",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};

export const Large = Template.bind({});
Large.args = {
    height: "160px",
    width: "160px",
    src: "https://res.cloudinary.com/dpybjl3g3/image/upload/v1674976138/genrati/generated_images/fwilgdix9wtdmtskqbdo.jpg",
    alt: "Avatar",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};
