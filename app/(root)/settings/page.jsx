import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.jsx";
import ContactCard from "@/app/components/contact/ContactCard";
// import dog from "@/assets/images/dog.png";
// import avatar from "@/assets/images/user/userAvatar2.jpg";

// import logoLight from "@/assets/images/Logo-white.svg";
// import logoDark from "@/assets/images/Logo-dark.svg";

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Link,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

export default async function Settings({ name, email, message }) {
  const session = await getServerSession(authOptions);

  return (
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
          <Text style={paragraph}>
            Explore our user-friendly platform, book grooming appointments with
            ease, and treat your pet to a spa day they deserve. Woofe is here to
            make pet grooming a breeze!
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            {" "}
            &copy;2024 Tsoumelekis. All rights reserved
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
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
