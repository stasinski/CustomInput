import { useCallback } from "react";
import CustomInput from "./CustomInput/CustomInput";
import "./app.css";

function App() {
  const handleOnChange = useCallback((value: number) => {
    // console.log(value);
  }, []);

  const handleOnBlur = useCallback((value: number) => {
    // console.log(value);
  }, []);

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <CustomInput
          onChangeCallback={handleOnChange}
          onBlurCallback={handleOnBlur}
        />
      </div>
    </div>
  );
}

export default App;
