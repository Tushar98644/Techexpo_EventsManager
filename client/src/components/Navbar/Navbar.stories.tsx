/* eslint-disable import/no-anonymous-default-export */
import Navbar from "./Navbar";

export default {
    title: "Navbar",
    component: Navbar,
    parameters: {
        layout: "centered",
    },
};

export const Template = (args: any) => <Navbar {...args} />;