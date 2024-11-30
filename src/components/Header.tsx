import { IInfoData } from "../types/types";

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: rgb(21, 24, 29);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 100vw;
  max-height: 420px;
  overflow: hidden;
`;

export const Img = styled.img`
  margin-top: 6%;
  scale: 0.9;
`;

export const NameBox = styled.div`
  margin-bottom: 30px;
  position: absolute;
  top: 50px;
  left: 50px;
  color: white;

  h1 {
    font-size: 40px;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 25px;
    padding-bottom: 10px;
  }
`;

function Header({ data }: { data?: IInfoData }) {
  return (
    <>
      <HeaderWrapper>
        <NameBox>
          <h2>@{data?.ArmoryProfile.ServerName}</h2>
          <h1>{data?.ArmoryProfile.CharacterName}</h1>
          <h2>{data?.ArmoryProfile.CharacterClassName}</h2>
          <h2>Lv. {data?.ArmoryProfile.ItemAvgLevel}</h2>
        </NameBox>
        <Img src={data?.ArmoryProfile.CharacterImage} />
      </HeaderWrapper>
    </>
  );
}

export default Header;
