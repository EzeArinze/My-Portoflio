import styled from "styled-components";
// import Img from "./Img";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  span {
    font-weight: 600;
    text-transform: uppercase;
  }

  div {
    width: 0.6rem;
    height: 0.2rem;
    background-color: #7f8000;
    margin-top: 0.8rem;
  }
`;

function Avatar() {
  return (
    <StyledAvatar>
      {/* <Img src="/default-user.jpg" alt="avatar" /> */}
      <span>Nuel</span>
      <div></div>
    </StyledAvatar>
  );
}

export default Avatar;
