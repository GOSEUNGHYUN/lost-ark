import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [inputString, setInputString] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/${inputString}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setInputString(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="닉네임을 입력해주세요"
      />
      <button>검색</button>
    </form>
  );
}
export default Home;
