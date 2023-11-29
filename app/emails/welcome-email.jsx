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

const welcomeEmail = ({ name, email }) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          width={200}
          src="https://woffe-upload.s3.eu-north-1.amazonaws.com/public/logo.png"
          alt="avatar"
          style={logo}
        />
        <br />
        <Text style={paragraph}>Dear {name || email},</Text>
        <Text style={paragraph}>
          Woofe welcomes you with open paws! 🐾 We're thrilled to have you and
          your furry friend join our grooming pet platform. Get ready for
          tail-wagging experiences and pampering sessions!
        </Text>
        <Text style={paragraph}>
          Explore our user-friendly platform, book grooming appointments with
          ease, and treat your pet to a spa day they deserve. Woofe is here to
          make pet grooming a breeze!
        </Text>
        <Text style={paragraph}>
          If you have any questions or need assistance, our team is just a bark
          away. Happy grooming!
        </Text>
        <Section style={btnContainer}></Section>
        <Text style={paragraph}>
          Best regards,
          <br />
          The Woofe Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}> &copy;2024 Tsoumelekis. All rights reserved</Text>
      </Container>
    </Body>
  </Html>
);

export default welcomeEmail;

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
