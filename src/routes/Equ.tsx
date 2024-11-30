import styled from "styled-components";
import { IInfoData } from "../types/types";

const Wraper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ContainerBox = styled.div`
  height: 50vh;
  background-color: #f9f9f9;
`;

const Items = styled.div``;

const Item = styled.div`
  position: relative;
  width: 50px;
  height: 65px;
  margin: 2px 10px;
`;

const Img = styled.img`
  background-image: linear-gradient(to right bottom, #44423e, #ccba8d);
  width: 100%;
  height: 100%;
  border-radius: 20%;
`;

const EquName = styled.span`
  position: absolute;
  top: 2%;
  left: 2%;
  color: white;
  font-size: 8px;
  padding: 5px;
  background-color: rgb(0, 0, 0, 0.9);
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 0, 0, 0.2);
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 2%;
  div {
    flex: 1;
  }
`;

const ProfileGakinBox = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 2px 10px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Name = styled.span`
  font-size: 15px;
  color: rgb(0, 0, 0, 0.5);
  font-weight: bold;
`;

const Value = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

function Equ({ data }: { data?: IInfoData }) {
  return (
    <>
      <Wraper>
        {/* 1. 장비 */}
        <ContainerBox>
          <Items>
            {data?.ArmoryEquipment?.slice(0, 6).map((eq) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Item>
                  <Img src={eq.Icon} />
                  <EquName>{eq.Type}</EquName>
                </Item>
                <span>{eq.Name}</span>
              </div>
            ))}
          </Items>
        </ContainerBox>

        {/* 2. 능력치 */}
        <ContainerBox>
          <ProfileBox>
            <ProfileItem>
              <Name>레벨</Name>
              <Value>{data?.ArmoryProfile.ItemAvgLevel}</Value>
            </ProfileItem>
            <ProfileItem>
              <Name>전투레벨</Name>
              <Value>{data?.ArmoryProfile.CharacterLevel}</Value>
            </ProfileItem>
          </ProfileBox>

          <ProfileBox>
            {data?.ArmoryProfile.Stats?.slice(0, 6).map((st) => (
              <>
                <ProfileItem>
                  <Name>{st.Type}</Name>
                  <Value style={{ fontSize: 18 }}>{st.Value}</Value>
                </ProfileItem>
              </>
            ))}
          </ProfileBox>

          {/* 각인 */}
          <ProfileGakinBox>
            {data?.ArmoryEngraving.Effects?.map((gakin) => (
              <div>
                <img src={gakin.Icon} />
                <span>{gakin.Name}</span>
              </div>
            ))}
          </ProfileGakinBox>
        </ContainerBox>

        {/* 3. 악세사리 */}
        <ContainerBox>
          <Items>
            {data?.ArmoryEquipment?.slice(6, 13).map((eq) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Item>
                  <Img src={eq.Icon} />
                  <EquName>{eq.Type}</EquName>
                </Item>
                <span>{eq.Name}</span>
              </div>
            ))}
          </Items>
        </ContainerBox>
      </Wraper>
    </>
  );
}

export default Equ;
