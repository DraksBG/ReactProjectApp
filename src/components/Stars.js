import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= stars) {
      return <BsStarFill />;
    } else if (index + 1 > stars && index + 1 <= stars + 0.5) {
      return <BsStarHalf />;
    } else {
      return <BsStar />;
    }
  });
  return (
    <Wrapper>
      <div className="stars"><span>{tempStars}</span></div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
