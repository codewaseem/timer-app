import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import styled from "@emotion/styled";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import FormField from "../components/FormField";

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > form {
    max-width: 450px;
    min-width: 300px;
    flex: 1;
    display: grid;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 48px 36px;
    justify-items: center;
    border-radius: 10px;
    h3 {
      text-align: center;
      margin-bottom: 25px;
      font-size: 1.4rem;
    }
  }
`;
const FormSubmitButton = styled.button`
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  font-size: 1.2rem;
  border: 0;
`;

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO />
      <LoginFormContainer>
        <form>
          <h3>Login</h3>
          <FormField type="email" label="Email" name="email" />
          <FormField type="password" label="Password" name="password" />
          <FormSubmitButton type="button">Login</FormSubmitButton>
        </form>
      </LoginFormContainer>
    </Layout>
  );
};

export default injectIntl(Index);
