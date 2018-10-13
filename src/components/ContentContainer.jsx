import styled from "styled-components";

const ContentContainer = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 0 54px;
  width: inherit;

  @media (max-width: 1199px) {
    padding: 0 48px;
  }
  @media (max-width: 899px) {
    padding: 0 32px;
  }
  @media (max-width: 599px) {
    padding: 0 16px;
  }
`;

export default ContentContainer;
