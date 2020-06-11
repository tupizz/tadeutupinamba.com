import React, { useContext } from 'react';
import { FiHome, FiPenTool, FiMail, FiCode, FiBook } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ProfileContext } from './../../context/ProfileContext';
import * as S from './styles';

const Sidebar: React.FC = () => {
  const router = useRouter();
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
        <li onClick={() => router.push('/')}>
          <FiHome />
          <span>Home</span>
        </li>

        <li onClick={() => router.push('/experiences')}>
          <FiCode />
          <span>Experiences</span>
        </li>

        <li onClick={() => router.push('/education')}>
          <FiBook />
          <span>Education</span>
        </li>

        {/* <li onClick={() => router.push('/projects')}>
          <FiPenTool />
          <span>Projects</span>
        </li>

        <li>
          <FiMail />
          <span>Contact</span>
        </li> */}
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
