import styled from "styled-components";

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  /* color: #191641; */
`;

const Input = styled.input`
  background-color: #f0f0f0;
  padding: 1.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  width: 100%;

  &:focus {
    border-color: #f2f2f2;
    outline: none;
  }

  @media (max-width: 361px) {
    padding: 1.2rem;
  }
`;

const TextArea = styled.textarea`
  background-color: #f0f0f0;
  padding: 1.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 150px;
  resize: vertical;

  &:focus {
    border-color: #f2f2f2;
    outline: none;
  }

  @media (max-width: 361px) {
    padding: 1.2rem;
    height: 100px;
  }
`;

export { Form, Label, Input, TextArea };
