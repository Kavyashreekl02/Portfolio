import React from 'react';
import {
  EducationContainer,
  TimelineContainer,
  EducationCard,
  EducationTitle,
  TimelineCircle,
  DateText,
  InnerEducationCardTitle,
  EducationDetails,
} from './EducationStyledComponent';

const Education = () => {
  const educationData = [
    {
      institution: "JSS Science and Technology University, Mysore",
      degree: "Master of Computer Applications - MCA",
      date: "2022-2024",
      details: "8.74",
    },
    {
      institution: "MMK and SDM MMV, Mysore",
      degree: "Bachelor of Science - PMCs",
      date: "2019 - 2022",
      details: "9.0",
    },
    {
      institution: "Arvind PU College, Kunigal, Tumkur",
      degree: "Pre-University",
      date: "2017-2019",
      details: "93.66%",
    },
    {
      institution: "BGS Public School, Kunigal, Tumkur",
      degree: "SSLC",
      date: "2016-2017",
      details: "95.84",
    },
    // Add more education entries here
  ];

  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <TimelineContainer>
        {educationData.map((edu, index) => (
          <EducationCard key={index} alignRight={index % 2 === 0}>
            <TimelineCircle />
            <DateText>{edu.date}</DateText>
            <div>
              <InnerEducationCardTitle>{edu.degree}</InnerEducationCardTitle>
              <p>{edu.institution}</p>
              <EducationDetails>{edu.details}</EducationDetails>
            </div>
          </EducationCard>
        ))}
      </TimelineContainer>
    </EducationContainer>
  );
};

export default Education;
