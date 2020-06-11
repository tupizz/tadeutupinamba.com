import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    font-size: 3rem;
    color: #fafafa;
    margin-bottom: 20px;
  }
`;

export const EducationItem = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #545454;
  display: flex;

  img {
    height: 100px;
    width: 110px;
    object-fit: cover;
    background-color: #fff;
    margin-right: 30px;
    border-radius: 6px;
    border: 3px solid gray;
  }
`;

export const Institution = styled.h4`
  display: block;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

export const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
  color: #fff;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  padding: 20px 0;
  font-family: 'Lora', serif;
  color: #b7b7b7;
  line-height: 1.7rem;
`;
