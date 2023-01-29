import Button from "../components/Button";

export default {
    title: "My Buttons",
    component: Button,
    argTypes: {
        height: { control: "select", options: ["40px", "45px"] },
        width: { control: "select", options: ["120px", "130px"] },
        label: { control: "select", options: ["Primary", "Secondary"] },
        border: {
            control: "select",
            options: ["none", "1px solid black", "2px solid black"],
        },
        borderRadius: { control: "select", options: ["none", "10px"] },
        backgroundColor: { control: "color" },
        hover: { control: "color" },
    },
};
const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    height: "35px",
    width: "100px",
    border: "none",
    fontSize: "1em",
    fontColor: "white",
    borderRadius: "9px",
    backgroundColor: "",
    label: "Primary",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
    hover: "lightblue",
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    height: "35px",
    width: "100px",
    border: "none",
    fontSize: "1em",
    borderRadius: "9px",
    backgroundColor: "",
    label: "Secondary",
    mt: "0px",
    mr: "0px",
    mb: "0px",
    ml: "0px",
};
