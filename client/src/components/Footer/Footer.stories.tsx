/* eslint-disable import/no-anonymous-default-export */
import { JSX } from "react";
import Footer from "./Footer";

export default {
    title: "Footer",
    component: Footer,
    parameters: {
        layout: "centered",
    },
};

export const Template = (args: JSX.IntrinsicAttributes) => <Footer {...args} />;