function Bharath_App_Clock() {
  let date = new Date();
  return (
    <p className="lead fw-bolder">
      This is the current time:{date.toLocaleDateString()} -{" "}
      {date.toLocaleTimeString()}
    </p>
  );
}
export default Bharath_App_Clock;
