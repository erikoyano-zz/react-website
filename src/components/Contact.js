import "./Contact.css";
import React from "react";
import { Form, Input } from "antd";
import {Button} from './Button'
const { TextArea } = Input;

function Contact() {
  return (
      <div className="contact">
        <div className="block-contactBlock">
          <div className="containter-fluid">
            <div className="titleHolder">
              <h2>Contact Me!</h2>
              <p>This is where you contact me</p>
            </div>
           <div className="input">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
             
            >
              <Form.Item
                name="fullname"
                rules={[
                  { required: true, message: "Please input your Full Name!" },
                ]}
              >
                <Input
                
                  placeholder="Full Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your　Email!" },
                ]}
              >
                <Input
                 
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Item>
              <Form.Item
                name="subject"
              >
                <Input
                
                  placeholder="Subject"
                />
              </Form.Item>
              <Form.Item
                name="message"
              >
                <TextArea
                
                  placeholder="Message"
                />
              </Form.Item>

              <Form.Item>
              <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        Send!
                    </Button>
              </Form.Item>
            </Form>
            </div>
          </div>
          </div>
          </div>

  );
}

export default Contact;
