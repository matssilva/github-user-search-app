import React from 'react'
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'
import { FiLink, FiTwitter } from 'react-icons/fi'
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
} from './styles'

const UserDetails = () => {
  return (
    <Container>
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
            <FaMapMarkerAlt className='icon' />
            <label className='text'>San Francisco</label>
          </AdditionalInfo>
          <AdditionalInfo>
            <FiTwitter className='icon icon-twitter' />
            <label className='text'>Not Available</label>
          </AdditionalInfo>
          <AdditionalInfo>
            <FiLink className='icon icon-link' />
            <label className='text'>https://github.blog</label>
          </AdditionalInfo>
          <AdditionalInfo>
            <FaBuilding className='icon' />
            <label className='text'>@github</label>
          </AdditionalInfo>
        </AdditionalInfos>
      </div>
    </Container>
  )
}

export default UserDetails