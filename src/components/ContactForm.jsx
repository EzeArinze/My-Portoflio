import styled from "styled-components";
import { Button } from "../ui/Button";
import { Form, Input, Label, TextArea } from "../ui/Form";
import toast from "react-hot-toast";

const BtnDiv = styled.div`
  text-align: end;
`;

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    toast.success("submitted succefully");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        placeholder="Enter your name"
        required
        name="username"
      />

      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Enter your email"
        name="email"
        required
      />

      <Label htmlFor="message">Message</Label>
      <TextArea
        id="message"
        placeholder="Enter your Message"
        name="text"
        required
      ></TextArea>

      <BtnDiv>
        <Button>Send Email</Button>
      </BtnDiv>
    </Form>
  );
}

export default ContactForm;
