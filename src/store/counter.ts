import { atom, selector } from "recoil";

export const textState = atom<string>({
  // 값이 string이라는 뜻
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const charCountState = selector<number>({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
