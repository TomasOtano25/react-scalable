import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "material-ui/Paper";

const LinkDiv = styled.div`
  display: flex;
  background: #fff;
  text-transform: uppercase;
  padding: 20px;
  margin: 10px 10px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  align-items: center;
`;

const VoteCount = styled.div`
  font-size: 1.5rem;
`;

const VotingContainer = styled.div``;

const Description = styled.div`
  color: #757575;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  margin-left: 1rem;
`;

const LinkAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const VotingIcon = styled.div`
  font-size: 40px;
`;

const Link = ({ link }) => {
  return (
    <LinkDiv>
      <VotingContainer>
        <VoteCount>{link.voteCount}</VoteCount>
      </VotingContainer>
      <DetailsContainer>
        <div>
          <LinkAnchor href={link.url}>{link.url}</LinkAnchor>
        </div>
        <Description>
          <p>{link.description}</p>
        </Description>
      </DetailsContainer>
    </LinkDiv>
  );
};

Link.proptypes = {
  link: PropTypes.shape({
    voteCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default Link;
