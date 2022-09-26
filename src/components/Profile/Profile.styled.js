import styled from 'styled-components';

export const Card = styled.div`
  width: 400px;
  background-color: #fff;
  text-align: center;
  padding-top: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-bottom: 50px;
`;

export const Description = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  .avatar {
    width: 100px;
    margin-bottom: 25px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: rgb(100, 100, 100);
`;
export const Location = styled.p`
  margin-bottom: 10px;
  color: rgb(100, 100, 100);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
`;

export const Statsli = styled.li`
  width: 33%;
  padding: 15px;
  background-color: rgb(218, 218, 218);
`;

export const StatsliSpanlabel = styled.span`
  display: block;
  padding-left: 10;
  margin-bottom: 1px;
`;

export const StatsliSpanQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
