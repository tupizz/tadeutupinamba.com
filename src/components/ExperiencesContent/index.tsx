import React, { useContext } from 'react';

import * as S from './styles';
import { ProfileContext } from '../../context/ProfileContext';

const ExperiencesContent: React.FC = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <S.Wrapper>
      <h2>Experiences</h2>

      {profile.data?.work?.map((job) => (
        <S.WorkItem key={job.startDate}>
          <S.WorkTitle>{job.position}</S.WorkTitle>
          <div>
            <S.JobTitle>{job.company}</S.JobTitle>
            <span>{job.location}</span>
            <p>
              {`${job.start.month}/${job.start.year}`} to{' '}
              {job.end.year && job.end.month ? (
                `${job.end.month}/${job.end.year}`
              ) : (
                <span>nowadays</span>
              )}
            </p>
          </div>
          <S.Paragraph>{job.summary}</S.Paragraph>
        </S.WorkItem>
      ))}
    </S.Wrapper>
  );
};

export default ExperiencesContent;
