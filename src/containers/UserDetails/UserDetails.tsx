import React from 'react'
import { ReactComponent as BuildingIcon } from '../../assets/building.svg';
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as UrlIcon } from '../../assets/url.svg';
import { IUser } from '../../types/IUser';
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
  user: IUser | null;
}

const months: Array<string> = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const UserDetails = ({ theme, user }: Props) => {

  const formatDate = () => {
    const date = user?.created_at ? new Date(user?.created_at) : new Date();
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const openInNewTab = (url: string) => {
    if (url) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  return (
    <Container themeSelected={theme}>
      <div className="left-side">
        <ImageContainer>
          <img src={user?.avatar_url} alt='avatar url' />
        </ImageContainer>
      </div>
      <div className="right-side">
        <Header>
          <Name>{user?.name || user?.login}</Name>
          <JoinDate>Joined {formatDate()}</JoinDate>
        </Header>
        <Nickname>@{user?.login}</Nickname>
        <Bio bio={user?.bio}>{user?.bio || 'This profile has no bio'}</Bio>
        <Metrics>
          <Metric>
            <MetricLabel>Repos</MetricLabel>
            <MetricValue>{user?.public_repos}</MetricValue>
          </Metric>
          <Metric>
            <MetricLabel>Followers</MetricLabel>
            <MetricValue>{user?.followers}</MetricValue>
          </Metric>
          <Metric>
            <MetricLabel>Following</MetricLabel>
            <MetricValue>{user?.following}</MetricValue>
          </Metric>
        </Metrics>
        <AdditionalInfos>
          <AdditionalInfo value={user?.location}>
            <LocationIcon />
            <a>{user?.location || 'Not Available'}</a>
          </AdditionalInfo>
          <AdditionalInfo value={user?.twitter_username}>
            <TwitterIcon />
            <a className='link' onClick={() => openInNewTab(user?.twitter_username ? `https://twitter.com/${user?.twitter_username}` : null)}>{user?.twitter_username || 'Not Available'}</a>
          </AdditionalInfo>
          <AdditionalInfo value={user?.blog}>
            <UrlIcon />
            <a className='link' onClick={() => openInNewTab(user?.blog ? `https://${user?.blog}` : null)}>{user?.blog || 'Not Available'}</a>
          </AdditionalInfo>
          <AdditionalInfo value={user?.company}>
            <BuildingIcon />
            <a className='link' onClick={() => openInNewTab(user?.company ? `https://github.com/${user?.company.replace('@', '')}` : null)}>{user?.company || 'Not Available'}</a>
          </AdditionalInfo>
        </AdditionalInfos>
      </div>
    </Container>
  )
}

export default UserDetails