import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

import * as React from "react";

const ContactFormEmail = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>Contact Form</Preview>
    <h1>Contact Form</h1>
    <Body style={main}>
      <Container style={container}>
        <Img
          width={200}
          src="https://woffe-upload.s3.eu-north-1.amazonaws.com/public/logo.png"
          alt="avatar"
          style={logo}
        />
        <br />
        <Text>name : {name}</Text>
        <Text>
          email : <strong>{email}</strong>
        </Text>
        <br />
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />
        <Text style={footer}> &copy;2024 Tsoumelekis. All rights reserved</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
