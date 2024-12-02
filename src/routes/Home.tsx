import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HomeBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("${process.env.PUBLIC_URL}/images/background.jpg");
  background-size: 100% 100%;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  text-align: center;

  display: flex;
  align-items: center;
  gap: 5px;
`;

const InputField = styled.input`
  width: 250px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Home() {
  const history = useHistory();
  const [inputString, setInputString] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    /*event.preventDefault();
    history.push(`/${inputString}`);*/
    event.preventDefault();
    if (inputString.trim() !== "") {
      history.push(`/${inputString}`);
    } else {
      history.push("/");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setInputString(value);
  };

  return (
    <HomeBackground>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          onChange={handleChange}
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
        <SearchButton>검색</SearchButton>
      </FormContainer>
    </HomeBackground>
  );
}
export default Home;
