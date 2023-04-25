import { useEffect } from "react";

const LifeCycleHooksComponent = () => {
  useEffect(() => {
    console.log("only 1 time");
    return () => {
      console.log("component gone for good");
    };
  }, []);
  return <h1>Hi</h1>;
};

export default LifeCycleHooksComponent;
