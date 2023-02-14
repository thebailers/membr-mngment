import styled from "styled-components";

export const AuthWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div,
    button {
      width: 60%;
    }
  }

  input,
  label,
  button {
    display: block;
    width: 100%;
  }
`;
