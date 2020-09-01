import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  padding: 150px 150px;
  width: 100%;

  ${media.tablet`padding: 100px 10px;height: auto;`};
  ${media.thone`height: auto;`};
`;

export default Section;
