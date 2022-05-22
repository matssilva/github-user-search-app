import styled from "styled-components";

export const Container = styled.div<{ themeSelected: string }>`
  width: 100%;
  box-shadow: ${({ themeSelected }) => themeSelected === 'dark' ? 'none' : '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color3};
  padding: 48px;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    width: 100%;
  }

  .bottom {
    width: 80%;
    margin-left: auto;

    @media(max-width: 730px) {
      width: 100%;
      margin-left: unset;
    }
  }

  @media(max-width: 550px) {
    padding: 32px 24px 48px 24px;
  }
`;

export const ImageContainer = styled.div`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 37px;

  & > img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 730px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Name = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${({ theme }) => theme.color6};
`;

export const JoinDate = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.color2};
`;

export const Nickname = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0079FF;
`;

export const Bio = styled.p<{ bio: string | undefined }>`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color5};
  opacity: ${({ bio }) => !bio ? '0.5' : 'unset'};
`;

export const Metrics = styled.div`
  background-color: ${({ theme }) => theme.color1};
  border-radius: 10px;
  padding: 15px 83px 17px 32px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 99px;

  @media(max-width: 550px) {
    justify-content: space-between;
    padding-right: 17px;
    gap: 0px;
  }

`;

export const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MetricLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${({ theme }) => theme.color5};
`;

export const MetricValue = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color6};
`;

export const AdditionalInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 37px;
  row-gap: 19px;

  @media(max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`

export const AdditionalInfo = styled.div<{ value: any }>`
  display: flex;
  align-items: center;
  opacity: ${({ value }) => !value ? '0.5' : 'unset'};

  & svg {
    color: ${({ theme }) => theme.color5};
    margin-right: 19px;
  }

  & label {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: ${({ theme }) => theme.color5};
  }

  & .link:hover {
    cursor: ${({ value }) => value ? 'pointer' : 'normal'};
    text-decoration: ${({ value }) => value ? 'underline' : 'none'};
  }
`;