import styled from "styled-components";
import { FiMoon } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: #222731;
`;

export const ThemeLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: ${({ theme }) => theme.color2};
  text-transform: uppercase;
  margin-right: 10px;
`;

export const MoonIcon = styled(FiMoon)`
  color: ${({ theme }) => theme.color2};
  fill: ${({ theme }) => theme.color2};
`;