import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color3};
  padding: 9.5px 10px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const SearchIcon = styled(FiSearch)`
  color: ${({ theme }) => theme.color4};
  height: 32px;
  width: 32px;
  margin-right: 24px;
  margin-left: 22px;
`;

export const SearchInput = styled.input`
  margin-right: auto;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fontFamily};
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.color5};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color5};
  }

`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.color4};
  padding: 13px 24px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily};

  :hover {
    cursor: pointer;
  }
`
