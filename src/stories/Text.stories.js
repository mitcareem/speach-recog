import Text from "../components/Text";

export default {
    title: "Typography",
    component: Text,
    argTypes: {
        color: { control: "color" },
    },
};
const Template = (args) => <Text {...args}>{args.content}</Text>;

export const Small = Template.bind({});
Small.args = {
    color: "black",
    fontSize: "13px",
    content: "Describe your image",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};

export const Medium = Template.bind({});
Medium.args = {
    color: "black",
    fontSize: "16px",
    content: "Describe your image",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};

export const Large = Template.bind({});
Large.args = {
    color: "black",
    fontSize: "18px",
    content: "Describe your image",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};
