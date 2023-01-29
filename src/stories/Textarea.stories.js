import Textarea from "../components/Textarea";

export default {
    title: "Textarea",
    component: Textarea,
    argTypes: {
        height: { control: "select", options: ["100px", "150px", "250px"] },
        width: { control: "select", options: ["200px", "300px", "500px"] },
        resize: { control: "select", options: ["none", true] },
        border: { control: "select", options: ["none", "1px solid black"] },
        borderRadius: { control: "select", options: ["none", "10px"] },
        outline: { control: "select", options: ["none", true] },
        backgroundColor: { control: "color" },
    },
};
const Template = (args) => <Textarea {...args} />;

export const Input = Template.bind({});
Input.args = {
    height: "100px",
    width: "500px",
    resize: "none",
    fontSize: "16px",
    placeholder: "Portrait of gardener in a greenhouse",
    pt: "12px",
    pr: "0px",
    pb: "0px",
    pl: "10px",
    border: "none",
    borderRadius: "8px",
    outline: "none",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
    backgroundColor: "#bbc5b6",
};
