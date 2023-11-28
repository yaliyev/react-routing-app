import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { addCategory } from '../services/categories_request'


const AddCategory = () => {
    const navigateTo = useNavigate();
    let nameRef = useRef("");
    let descriptionRef = useRef("");

    function submitCategory() {
        // e.preventDefault();
        const category = {
            name: nameRef.current.input.value,
            description: descriptionRef.current.input.value
        }

        addCategory(category);
        navigateTo('/admin/categories');

    }
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600, marginBlock: '20px'
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={() => { submitCategory() }}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input category name!',
                    },
                ]}
            >
                <Input ref={nameRef} />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input category description!',
                    },
                ]}
            >
                <Input ref={descriptionRef} />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddCategory