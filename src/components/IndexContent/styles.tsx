import styled from 'styled-components';

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: #016fb9;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;

  span {
    font-weight: lighter;
  }
`;

export const Wrapper = styled.div`
  div.about-me {
    h3 {
      font-size: 3rem;
      color: #fafafa;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.1rem;
      line-height: 2rem;
      font-family: 'Lora', serif;
      font-weight: lighter;
      color: #b7b7b7;
      text-shadow: 1px 1px 1px #333;
      white-space: pre-wrap;
    }
  }

  div.skills {
    border-top: 1px solid #545454;
    margin-top: 40px;
    padding-top: 30px;

    h3 {
      font-size: 3rem;
      color: #fafafa;
      margin-bottom: 30px;
    }
  }
`;
