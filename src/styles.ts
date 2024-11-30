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

export const StatsBox = styled.div`
  width: 500px;
  height: 100px;
  font-size: 20px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 설정 */
  grid-template-rows: repeat(4, auto); /* 4행 설정 */
  gap: 0px 25px;
`;

export const StatsItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
