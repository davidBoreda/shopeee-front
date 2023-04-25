import { Fragment, useState, useEffect } from "react";
import LifeCycleHooksComponent from "../components/LifeCycleHooksComponent";

const LifeCycleHooksPage = () => {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    console.log("current state", showComponent);
  }, [showComponent]);
  const handleBtnClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <Fragment>
      {showComponent && <LifeCycleHooksComponent />}
      <button onClick={handleBtnClick}>Click me to toggle</button>
    </Fragment>
  );
};

export default LifeCycleHooksPage;
