import React from "react";
import { useState, useEffect } from "react";

import Wrapper from "../../components/readerComponents/sideMenu/Wrapper";
import OptionLayout from "../../components/readerComponents/option/Layout";
import OptionDropdown from "../../components/readerComponents/option/Dropdown";
import OptionSlider from "../../components/readerComponents/option/Slider";
import ControlIconBtnWrapper from "../../components/readerComponents/option/ControlIconBtnWrapper";
import ControlIconBtn from "../../components/readerComponents/option/ControlIconBtn";

const Option = (
  {
    control,
    bookStyle,
    bookOption,
    bookFlow,
    onToggle,
    emitEvent,
    onBookStyleChange,
    onBookOptionChange,
    theme,
    changeToLight,
    changeToDark,
  },
  ref
) => {
  const [fontFamily, setFontFamily] = useState(bookStyle.fontFamily);
  const [fontSize, setFontSize] = useState(bookStyle.fontSize);
  const [lineHeight, setLineHeight] = useState(bookStyle.lineHeight);
  const [marginHorizontal, setMarginHorizontal] = useState(bookStyle.marginHorizontal);
  const [marginVertical, setMarginVertical] = useState(bookStyle.marginVertical);
  const [isScrollHorizontal, setIsScrollHorizontal] = useState(true);
  const [viewType, setViewType] = useState({
    active: true,
    spread: true,
  });

  /** Change font family */
  const onSelectFontFamily = (font) => setFontFamily(font);

  /** Change font style and layout */
  const onChangeSlider = (type, e) => {
    if (!e || !e.target) return;
    switch (type) {
      case "FontSize":
        setFontSize(e.target.value);
        break;
      case "LineHeight":
        setLineHeight(e.target.value);
        break;
      case "MarginHorizontal":
        setMarginHorizontal(e.target.value);
        break;
      case "MarginVertical":
        setMarginVertical(e.target.value);
        break;
      default:
        break;
    }
  };

  /**
   * Select view direction
   * @param type Direction
   */
  const onClickDirection = (type) => {
    if (type === "Horizontal") {
      setIsScrollHorizontal(true);
      setViewType({ ...viewType, active: true });
      onBookOptionChange({
        ...bookOption,
        flow: "paginated",
      });
    } else {
      setIsScrollHorizontal(false);
      setViewType({ ...viewType, active: false });
      onBookOptionChange({
        ...bookOption,
        flow: "scrolled-doc",
      });
    }
  };

  /**
   * Select isSpread
   * @param isSpread Whether spread view
   */
  const onClickViewType = (isSpread) => {
    if (isSpread) {
      setViewType({ ...viewType, spread: true });
      onBookOptionChange({
        ...bookOption,
        spread: "auto",
      });
    } else {
      setViewType({ ...viewType, spread: false });
      onBookOptionChange({
        ...bookOption,
        spread: "none",
      });
    }
  };

  /* Save userdata */
  // TODO Fix the infinite re-rendering issue, when inlcude `onBookStyleChange` to dependencies array.
  /* eslint-disable */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onBookStyleChange({
        fontFamily,
        fontSize,
        lineHeight,
        marginHorizontal,
        marginVertical,
      });
    }, 250);

    return () => window.clearTimeout(timer);
  }, [fontFamily, fontSize, lineHeight, marginHorizontal, marginVertical]);
  /* eslint-enable */

  /** Re-register close event, when after set */
  useEffect(() => emitEvent(), [bookStyle, emitEvent]);

  return (
    <>
      {control.display && (
        <Wrapper title="Setting" show={control.open} onClose={onToggle} ref={ref}>
          <OptionLayout>
            <ControlIconBtnWrapper title="View Direction">
              <ControlIconBtn
                type="ScrollHorizontal"
                alt="Horizontal View"
                active={true}
                isSelected={isScrollHorizontal}
                onClick={() => onClickDirection("Horizontal")}
              />
              <ControlIconBtn
                type="ScrollVertical"
                alt="Vertical View"
                active={true}
                isSelected={!isScrollHorizontal}
                onClick={() => onClickDirection("Vertical")}
              />
            </ControlIconBtnWrapper>
            <ControlIconBtnWrapper title="View Spread">
              <ControlIconBtn
                type="BookOpen"
                alt="Two Page View"
                active={viewType.active}
                isSelected={viewType.spread}
                onClick={() => onClickViewType(true)}
              />
              <ControlIconBtn
                type="BookClose"
                alt="One Page View"
                active={viewType.active}
                isSelected={!viewType.spread}
                onClick={() => onClickViewType(false)}
              />
            </ControlIconBtnWrapper>

            <ControlIconBtnWrapper title="Theme">
              <ControlIconBtn
                type="Light"
                alt="Light Mode"
                active={true}
                isSelected={theme === "light" ? true : false}
                onClick={() => changeToLight()}
              />

              <ControlIconBtn
                type="Dark"
                alt="Dark Mode"
                active={true}
                isSelected={theme === "dark" ? true : false}
                onClick={() => changeToDark()}
              />
            </ControlIconBtnWrapper>
            <OptionDropdown
              title="Font"
              defaultValue={fontFamily}
              valueList={["Origin", "Roboto"]}
              onSelect={onSelectFontFamily}
            />
            <OptionSlider
              active={true}
              title="Size"
              minValue={8}
              maxValue={36}
              defaultValue={fontSize}
              step={1}
              onChange={(e) => onChangeSlider("FontSize", e)}
            />
            <OptionSlider
              active={true}
              title="Line height"
              minValue={1}
              maxValue={3}
              defaultValue={lineHeight}
              step={0.1}
              onChange={(e) => onChangeSlider("LineHeight", e)}
            />
            <OptionSlider
              active={true}
              title="Horizontal margin"
              minValue={0}
              maxValue={100}
              defaultValue={marginHorizontal}
              step={1}
              onChange={(e) => onChangeSlider("MarginHorizontal", e)}
            />
            <OptionSlider
              active={bookFlow === "paginated"}
              title="Vertical margin"
              minValue={0}
              maxValue={100}
              defaultValue={marginVertical}
              step={1}
              onChange={(e) => onChangeSlider("MarginVertical", e)}
            />
          </OptionLayout>
        </Wrapper>
      )}
    </>
  );
};

export default React.forwardRef(Option);
