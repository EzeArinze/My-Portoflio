import styled from "styled-components";
import { Button } from "../ui/Button";
import { Form, Input, Label, TextArea } from "../ui/Form";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const BtnDiv = styled.div`
  text-align: end;
`;

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setIsLoading((prev) => !prev);
    const res = await axios.post("https://api.web3forms.com/submit", json, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.data.success) {
      toast.success("submitted successfully");
      e.target.reset();
      setIsLoading(false);
    }
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
        <Button disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Email"}
        </Button>
      </BtnDiv>
    </Form>
  );
}

export default ContactForm;
