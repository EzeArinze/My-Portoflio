import styled from "styled-components";
import { Button } from "../ui/Button";
import { Form, Input, Label, TextArea } from "../ui/Form";
import { useRef } from "react";

const BtnDiv = styled.div`
  text-align: end;
`;

function ContactForm() {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)} ref={ref}>
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" placeholder="Enter your name" required />

      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" required />

      <Label htmlFor="message">Message</Label>
      <TextArea
        id="message"
        placeholder="Enter your Message"
        required
      ></TextArea>

      <BtnDiv>
        <Button>Send Email</Button>
      </BtnDiv>
    </Form>
  );
}

export default ContactForm;
