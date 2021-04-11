import { Input } from "antd";
import { useState } from "react";
import { deformatValue, formatValue } from "./format";
import { isValidValue } from "./validation";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  onChangeCallback?: (value: number) => void;
  onBlurCallback?: (value: number) => void;
  defualtValue?: number;
}

const CustomInput: React.FC<Props> = ({
  onChangeCallback,
  onBlurCallback,
  defualtValue = 0,
}) => {
  const [value, setValue] = useState(String(defualtValue));

  const handleChange = (inputValue: string) => {
    if (isValidValue(inputValue)) {
      setValue(inputValue);
      const deformated = deformatValue(inputValue);
      onChangeCallback?.(deformated);
    }
  };

  const handleOnBlur = () => {
    const deformated = deformatValue(value);
    const formated = formatValue(deformated);
    setValue(formated);
    onBlurCallback?.(deformated);
  };
  const handleInc = () => {
    const deformated = deformatValue(value);
    setValue(formatValue(deformated + 1));
  };
  const handleDec = () => {
    const deformated = deformatValue(value);
    setValue(formatValue(deformated - 1));
  };

  return (
    <>
      <Input
        value={value}
        onBlur={handleOnBlur}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="up" onClick={handleInc}>
        <AiOutlineArrowUp />
      </button>
      <button className="down" onClick={handleDec}>
        <AiOutlineArrowDown />
      </button>
    </>
  );
};

export default CustomInput;
