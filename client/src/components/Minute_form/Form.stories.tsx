/* eslint-disable import/no-anonymous-default-export */
import { JSX } from 'react';
import Form from './Form';

export default {
    title: 'Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
};

export const Template = (args: JSX.IntrinsicAttributes) => <Form {...args} />;
