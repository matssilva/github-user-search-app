import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 730px;
`