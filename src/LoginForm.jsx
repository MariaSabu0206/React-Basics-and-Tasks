import React, { useState } from 'react';
import styled from 'styled-components';
const LoginForm = () => {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password, checked });
  };

  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Login Page</Title>
        <InputWrapper>
          <Label>Email</Label>
          <Input 
            type="email" 
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Password</Label>
          <Input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        <CheckboxWrapper>
          <Checkbox 
            type="checkbox" 
            checked={checked} 
            onChange={(e) => setChecked(e.target.checked)} 
          />
          <span>Check me out</span>
        </CheckboxWrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </LoginWrapper>
  );
};

// Styled components for styling
const LoginWrapper = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://www.marketing91.com/wp-content/uploads/2015/06/What-is-product-management.jpg'); /* Replace with your image URL */
  background-size: cover; /* Makes the image cover the whole background */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
`;

const Form = styled.form`
  background: #1c1c1c; /* Dark grey form background */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff; /* White text color */
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #ffffff; /* White label color */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #333333; /* Dark grey border */
  font-size: 16px;
  background-color: #2b2b2b; /* Darker background for input */
  color: #ffffff; /* White text inside input */
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 14px;
  color: #ffffff; /* White checkbox text */
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background: #007bff; /* Blue background */
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #0056b3; /* Darker blue on hover */
  }
`;
export default LoginForm


