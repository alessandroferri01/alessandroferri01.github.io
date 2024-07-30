'use client'

import React from "react";
import { Button, Input, Link } from "@nextui-org/react";

//Form
import { Formik, Form } from "formik";


export default function FormContact() {
    return (
        <Formik
            initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            }}
            onSubmit={async (values) => {
            console.log('submit')
            }}
        >
            <Form>
                <Input type="email" required={true} label="Email" />
                <Button type="submit" color="primary" variant="flat">Say Hello 😎</Button>
            </Form>
        </Formik>
    )
}