import ReduxComponent1 from "../components/ReduxComponent1";
import ReduxComponent2 from "../components/ReduxComponent2";

const ReduxPage = () => {
  return (
    <div className="row">
      <div className="col">
        <ReduxComponent2 />
      </div>
      <div className="col">
        <ReduxComponent1 />
      </div>
    </div>
  );
};

export default ReduxPage;
