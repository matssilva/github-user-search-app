import React from 'react'
import { ReactComponent as BuildingIcon } from '../../assets/building.svg';
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as UrlIcon } from '../../assets/url.svg';
import {
  AdditionalInfo,
  AdditionalInfos,
  Bio,
  Container,
  Header,
  ImageContainer,
  JoinDate,
  Metric,
  MetricLabel,
  Metrics,
  MetricValue,
  Name,
  Nickname
} from './styles';

interface Props {
  theme: string;
}

const UserDetails = ({ theme }: Props) => {
  return (
    <Container themeSelected={theme}>
      <div className="left-side">
        <ImageContainer></ImageContainer>
      </div>
      <div className="right-side">
        <Header>
          <Name>The Octocat</Name>
          <JoinDate>Joined 25 Jan 2011</JoinDate>
        </Header>
        <Nickname>@octocat</Nickname>
        <Bio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</Bio>
        <Metrics>
          <Metric>
            <MetricLabel>Repos</MetricLabel>
            <MetricValue>8</MetricValue>
          </Metric>
          <Metric>
            <MetricLabel>Followers</MetricLabel>
            <MetricValue>3938</MetricValue>
          </Metric>
          <Metric>
            <MetricLabel>Following</MetricLabel>
            <MetricValue>9</MetricValue>
          </Metric>
        </Metrics>
        <AdditionalInfos>
          <AdditionalInfo>
            <LocationIcon />
            <label>San Francisco</label>
          </AdditionalInfo>
          <AdditionalInfo>
            <TwitterIcon />
            <label>Not Available</label>
          </AdditionalInfo>
          <AdditionalInfo>
            <UrlIcon />
            <label>https://github.blog</label>
          </AdditionalInfo>
          <AdditionalInfo>
            <BuildingIcon />
            <label>@github</label>
          </AdditionalInfo>
        </AdditionalInfos>
      </div>
    </Container>
  )
}

export default UserDetails