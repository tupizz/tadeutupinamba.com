import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${media.lessThan('medium')`
    padding: 0;
    flex-direction: row;
    align-items: center;
  `}
`;

export const ProfileAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  ${media.lessThan('medium')`
    flex-direction: row;
    margin-top: 0;
  `}

  h1 {
    font-size: 1.5rem;
    color: #191923;
  }

  h2 {
    color: #016fb9;
    font-size: 1rem;
    font-weight: 300;
  }

  img {
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
    padding: 5px;
    border: 2px solid #016fb9;

    ${media.lessThan('medium')`
      height: 60px;
      width: 60px;
      margin: 0;
    `}
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 30px;

  ${media.lessThan('medium')`
    display: none;
  `}

  a {
    margin-right: 40px;
    cursor: pointer;
    svg {
      font-size: 25px;
      color: gray;
      transition: all ease-in-out 0.3s;

      &:hover {
        transform: scale(1.2);
        color: #016fb9;
      }
    }
  }
`;

export const ItemMenuWrapper = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 40px;
  padding: 0;

  ${media.lessThan('medium')`
    display: none;
  `}

  li {
    cursor: pointer;
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0;
    transition: background-color ease-in-out 0.4s;

    &:hover {
      background-color: #eee;
      color: #016fb9;

      span {
        font-weight: normal;
      }
    }

    span {
      display: inline-block;
      padding-left: 20px;
      font-weight: lighter;
    }

    svg {
      margin-left: 20px;
      margin-right: 10px;
    }
  }
`;
