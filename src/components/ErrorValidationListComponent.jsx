const ErrorValidationListComponent = ({ errorsArr }) => {
  return (
    <ul className="list-group">
      {errorsArr.map((item, index) => (
        <li
          className="list-group-item list-group-item-action list-group-item-warning"
          key={Date.now() + item + index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ErrorValidationListComponent;
