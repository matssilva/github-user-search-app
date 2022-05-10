import styled from "styled-components";

export const Title = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${({ theme }) => theme.headerText};
`;

export const ThemeLabel = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: ${({ theme }) => theme.color2};
  text-transform: uppercase;
  margin-right: 10px;
`;

export const Container = styled.div<{ themeSelected: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;

  & > div {
    display: flex;
    align-items: center;

    & svg {
      color: ${({ theme }) => theme.color2};
    }

    &:hover {
      cursor: pointer;
    }

    &:hover ${ThemeLabel} {
      color: ${({ theme, themeSelected }) => themeSelected === 'dark' ? '#90A4D4' : theme.headerText};
    }

    &:hover svg {
      color: ${({ theme, themeSelected }) => themeSelected === 'dark' ? '#90A4D4' : theme.headerText};
    }
  }

  
`;

