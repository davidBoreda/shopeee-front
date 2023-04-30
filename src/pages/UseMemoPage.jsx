import { Fragment, useMemo, useState } from "react";

const veryBigArray = (counter) => {
  for (let i = 0; i < 1000000000; i++) {
    counter++;
  }
  return counter;
};

const UseMemoPage = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const result = useMemo(() => veryBigArray(count), [count]);
  const handleBtnClick = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleBtn2Click = () => {
    setCount2((prevState) => prevState + 1);
  };

  return (
    <Fragment>
      <h1>Count</h1>
      <h2>{result}</h2>
      <button onClick={handleBtnClick}>+1</button>
      <hr />
      <h1>Count2</h1>
      <h2>{count2}</h2>
      <button onClick={handleBtn2Click}>+1</button>
    </Fragment>
  );
};

export default UseMemoPage;
