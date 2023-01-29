import Box from "../components/Box";

export default {
    title: "Box",
    component: Box,
    argTypes: {
        border: { control: "select", options: ["none", "1px solid black"] },
    },
};
const Template = (args) => <Box {...args}>{args.content}</Box>;

export const Small = Template.bind({});
Small.args = {
    height: "100px",
    width: "300px",
    fontSize: "13px",
    content: "Describe your image",
    border: "none",
};

export const Medium = Template.bind({});
Medium.args = {
    height: "200px",
    width: "400px",
    fontSize: "18px",
    content: "Describe your image",
    border: "none",
};

export const Large = Template.bind({});
Large.args = {
    height: "300px",
    width: "600px",
    fontSize: "14px",
    content: "Describe your image",
    border: "none",
};
