import React, { useContext } from 'react';
import { FiHome, FiPenTool, FiMail, FiCode, FiBook } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { ProfileContext } from './../../context/ProfileContext';
import * as S from './styles';

const Sidebar: React.FC = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <S.SidebarWrapper>
      <S.ProfileAvatarWrapper>
        <img
          src={profile.data?.basics.picture}
          alt={profile.data?.basics.name}
        />
        <h1>{profile.data?.basics.name}</h1>
        <h2>{profile.data?.basics.label}</h2>
      </S.ProfileAvatarWrapper>

      <S.ItemMenuWrapper>
        <li>
          <FiHome />
          <span>Home</span>
        </li>

        <li>
          <FiCode />
          <span>Experiences</span>
        </li>

        <li>
          <FiBook />
          <span>Education</span>
        </li>

        <li>
          <FiPenTool />
          <span>Projects</span>
        </li>

        <li>
          <FiMail />
          <span>Contact</span>
        </li>
      </S.ItemMenuWrapper>

      <S.SocialMediaLinks>
        <a>
          <FaGithub />
        </a>
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaLinkedin />
        </a>
      </S.SocialMediaLinks>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
