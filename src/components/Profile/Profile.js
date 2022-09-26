import {
  Card,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  Statsli,
  StatsliSpanlabel,
  StatsliSpanQuantity,
} from './Profile.styled';

export function Profile({
  user: { username, tag, location, avatar, followers, views, likes },
}) {
  return (
    <Card>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Statsli>
          <StatsliSpanlabel>Followers</StatsliSpanlabel>
          <StatsliSpanQuantity className="quantity">
            {followers}
          </StatsliSpanQuantity>
        </Statsli>
        <Statsli>
          <StatsliSpanlabel>Views</StatsliSpanlabel>
          <StatsliSpanQuantity className="quantity">
            {views}
          </StatsliSpanQuantity>
        </Statsli>
        <Statsli>
          <StatsliSpanlabel>Likes</StatsliSpanlabel>
          <StatsliSpanQuantity className="quantity">
            {likes}
          </StatsliSpanQuantity>
        </Statsli>
      </Stats>
    </Card>
  );
}
