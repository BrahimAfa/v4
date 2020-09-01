import styled from 'styled-components';
import mixins from './mixins';
import media from './media';
import { theme } from '@styles';
const { colors } = theme;
const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  background-color: ${colors.darkestNavy};
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
  ${media.desktop`
    padding-top: 200px;
    padding-bottom: 200px;
  `};
  ${media.tablet`
    padding-top: 150px;
    padding-bottom: 150px;
  `};
  ${media.phablet`
    padding-top: 125px;
    padding-bottom: 125px;
  `};

  &.fillHeight {
    padding-top: 0;
    padding-bottom: 0;
    ${media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `};
    ${media.tablet`
    padding-top: 0;
    padding-bottom: 0;
  `};
    ${media.phablet`
    padding-top: 0;
    padding-bottom: 0;
  `};
  }
`;

export default Main;
