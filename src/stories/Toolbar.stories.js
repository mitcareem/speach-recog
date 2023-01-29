import Toolbar from "../components/Toolbar";

export default {
    title: "Toolbar",
    component: Toolbar,
};
const Template = (args) => <Toolbar {...args}>{args.content}</Toolbar>;

export const Flex = Template.bind({});
Flex.args = {
    height: "100px",
    width: "600px",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
    content: "Describe your image",
};
