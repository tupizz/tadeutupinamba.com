import React, { useContext } from 'react';

import * as S from './styles';
import { ProfileContext } from '../../context/ProfileContext';

const IndexContent: React.FC = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <S.Wrapper>
      <div className="about-me">
        <h3>About me</h3>
        <p>{profile.data?.basics.summary}</p>
      </div>

      <div className="skills">
        <h3>Skills</h3>

        {profile.data?.skills?.map((skill) => (
          <S.Pill key={skill.name}>
            <span>{skill.name}</span>
          </S.Pill>
        ))}
      </div>
    </S.Wrapper>
  );
};

export default IndexContent;
