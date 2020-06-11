import React, { useContext } from 'react';

import * as S from './styles';
import { ProfileContext } from '../../context/ProfileContext';

const EducationContent: React.FC = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <S.Wrapper>
      <h2>Education</h2>

      {profile.data?.education?.map((educationitem) => (
        <S.EducationItem key={educationitem.startDate}>
          <img src={educationitem.website} alt={educationitem.institution} />

          <div>
            <S.Institution>{educationitem.institution}</S.Institution>

            <div>
              <S.Degree>
                {educationitem.studyType}, {educationitem.area}
              </S.Degree>{' '}
            </div>
            <S.Paragraph>
              {educationitem.description.replace('\n\n', '\n')}
            </S.Paragraph>
          </div>
        </S.EducationItem>
      ))}
    </S.Wrapper>
  );
};

export default EducationContent;
