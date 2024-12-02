import { Link, Route, Switch, useLocation, useParams } from "react-router-dom";
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

/*
const Tap = styled.div`
  text-align: center;
  font-size: 17px;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 7px;
  border-radius: 10px;
  display: block;
`;
*/

const Tap = styled(Link)<{ active?: boolean }>`
  text-align: center;
  font-size: 17px;
  background-color: ${(props) => (props.active ? "#0056b3" : "#007bff")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: ${(props) =>
    props.active
      ? "0 4px 6px rgba(0, 0, 0, 0.15)"
      : "0 2px 4px rgba(0, 0, 0, 0.1)"};

  &:hover {
    background-color: ${(props) => (props.active ? "#003d80" : "#0056b3")};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

function Character() {
  const { nic } = useParams<{ nic: string }>();
  const location = useLocation();

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
            <Tap
              to={`/${nic}/equ`}
              active={location.pathname === `/${nic}/equ`}
            >
              장비
            </Tap>
            <Tap
              to={`/${nic}/skill`}
              active={location.pathname === `/${nic}/skill`}
            >
              스킬
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
