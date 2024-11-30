import styled from "styled-components";
import { IInfoData } from "../types/types";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 0px;
`;

const SkillBox = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
  }
`;

const SkillText = styled.div`
  display: flex;
  flex-direction: column;
`;

const RunBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }
`;

const TripodsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const TripodsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TripodsText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TripodsIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 2%;
    right: 2%;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
    color: white;
  }
`;

function Skill({ data }: { data?: IInfoData }) {
  return (
    <>
      {data?.ArmorySkills?.map((skill) =>
        skill.Level !== 1 ? (
          <Box>
            <SkillBox>
              <img src={skill.Icon} />
              <SkillText>
                <span>{skill.Level}레벨</span>
                <span>{skill.Name}</span>
              </SkillText>
            </SkillBox>

            <TripodsBox>
              {skill.Tripods?.map((tri) =>
                tri?.IsSelected ? (
                  <TripodsInfo>
                    <TripodsIcon>
                      <img src={tri?.Icon} />
                      <span>{tri.Slot}</span>
                    </TripodsIcon>
                    <TripodsText>
                      <span>{tri.Name}</span>
                      <span>Lv.{tri.Level}</span>
                    </TripodsText>
                  </TripodsInfo>
                ) : null
              )}
            </TripodsBox>

            <RunBox>
              <img src={skill.Rune?.Icon} />
              <span>{skill.Rune?.Name}</span>
            </RunBox>
          </Box>
        ) : null
      )}
    </>
  );
}

export default Skill;
