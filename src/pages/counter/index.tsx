import { useRecoilState, useRecoilValue } from "recoil";
import { textState, charCountState } from "@/store/counter";
import { ChangeEvent } from "react";

function CounterPage() {
  const [text, setText] = useRecoilState<string>(textState);

  const count = useRecoilValue<number>(charCountState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <p>Echo: {text}</p>
      <p>Character Count: {count}</p>
    </div>
  );
}

export default CounterPage;
