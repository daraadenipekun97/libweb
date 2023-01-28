import styled from "styled-components";
// components
import OptionWrapper from "./OptionWrapper";
import OptionTitle from "./OptionTitle";
import OptionValue from "./OptionValue";
import SliderValue from "./SliderValue";

const Slider = ({ active, title, minValue, maxValue, defaultValue, step, onChange }) => {
  const onChangeValue = (e) => {
    if (!active) return;
    onChange(e);
  };

  return (
    <OptionWrapper>
      <OptionTitle>{title}</OptionTitle>

      <SliderWrapper>
        <OptionValue active={active}>{defaultValue}</OptionValue>
        <SliderValue
          active={active}
          minValue={minValue}
          maxValue={maxValue}
          defaultValue={defaultValue}
          step={step}
          onChange={onChangeValue}
        />
      </SliderWrapper>
    </OptionWrapper>
  );
};

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

export default Slider;
