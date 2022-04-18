import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='m-5 p-4'>
            <h1 className='title text-center m-4'>Some essential concepts of React!</h1>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between Authentication and Authorization</Accordion.Header>
                    <Accordion.Body>
                        Authentication means one's identity. If any user want to access in a website website ask the identity of that identity. Trough this website verify weather the user is valid or not. User can verify them in two ways. One is using Email and Password and the other is using the third party verification like Google, Github and Facebook etc. <br />
                        On the other hand, Authorization means the ability of a user. Suppose in a website an admin has higher ability than a normal user.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        I use firebase mostly for the authentication purposes. I use it because it is popular and safest for authentication. Also it is easier to authenticate through email-password, phone numbers, google, github and facebook etc. using firebase. Sometimes I use it to deploy my project. <br />
                        Rather than firebase there are many authentication sites like Okta, OneLogin, JumpCloud and Microsoft Azure Active Directory etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Though most of the time we use firebase for authentication but it has many other features which are very useful. It could be used as a storage to store data. Also we can easily host our website using firebase. It has push notification feature which can be use to give an alert message. Another feature is firebase ML which is effective for the user who are doing a machine learning project.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;