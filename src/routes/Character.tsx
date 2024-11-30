import { Link, Route, Switch, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getInfoData } from "../api";
import { IInfoData } from "../types/types";
import Header from "../components/Header";
import Equ from "./Equ";
import Skill from "./Skill";
import styled from "styled-components";

const Taps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;
const Tap = styled.div`
  text-align: center;
  font-size: 17px;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 7px;
  border-radius: 10px;
  display: block;
`;

function Character() {
  const { nic } = useParams<{ nic: string }>();

  const { isLoading, data } = useQuery<IInfoData>({
    queryKey: ["data"],
    queryFn: () => getInfoData(nic),
  });

  return (
    <>
      {isLoading ? (
        "isLoading.."
      ) : (
        <>
          <Header data={data} />

          <Taps>
            <Tap>
              <Link to={`/${nic}/equ`}>장비</Link>
            </Tap>
            <Tap>
              <Link to={`/${nic}/skill`}>스킬</Link>
            </Tap>
          </Taps>

          <Switch>
            <Route path={`/:nic/equ`}>
              <Equ data={data} />
            </Route>
            <Route path={`/:nic/skill`}>
              <Skill data={data} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default Character;
