import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  left: 96.6%;
  position: fixed;
  z-index: 2147483643;
  top: 30%;
  transform: translateY(-50%);
  ${media.desktop`display: none;`};
  ${media.tablet`display : none;`};
`;

const StyledListItem = styled.div`
  padding: 12px 10px;
`;
const StyledListLink = styled(Link)`
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px #fff;
  cursor: pointer;
  height: 16px;
  margin-bottom: 10px;
  opacity: 0.4;
  position: relative;
  width: 16px;
  box-sizing: border-box;
  &:hover,
  &:focus {
    transform: translateY(-3px);
    opacity: 1;
    box-shadow: inset 0 0 0 3px ${colors.green};
  }
`;

// const DELTA = 5;

class Navx extends Component {
  state = {
    isMounted: !this.props.isHome,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  render() {
    const { isMounted, scrollDirection } = this.state;
    const { isHome } = this.props;

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        {isMounted &&
          navLinks &&
          navLinks.map(({ url }, i) => (
            <StyledListItem key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
              <StyledListLink to={url} />
            </StyledListItem>
          ))}
      </StyledContainer>
    );
  }
}

Navx.propTypes = {
  isHome: PropTypes.bool,
};

export default Navx;
