import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

//components

import OptionWrapper from "./OptionWrapper";
import OptionTitle from "./OptionTitle";
import DropdownValue from "./DropdownValue";
import DropdownItemWrapper from "./DropdownItemWrapper";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ title, defaultValue, valueList, onSelect }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const value = defaultValue === "Origin" ? "Original" : defaultValue;

  /** Toggle dropdown */
  const onToggle = useCallback(() => setVisible(!visible), [visible]);

  const onClose = useCallback(
    (e) => {
      if (!ref || !ref.current) return;
      if (![...e.path].includes(ref.current)) {
        onToggle();
      }
    },
    [ref, onToggle]
  );

  const Items = valueList.map((font) => (
    <DropdownItem
      key={font}
      value={font}
      onClick={() => {
        onSelect(font);
        onToggle();
      }}
    />
  ));

  /** Register dropdown close event */
  useEffect(() => {
    if (visible) {
      document.addEventListener("click", onClose);
    } else {
      document.removeEventListener("click", onClose);
    }
    return () => {
      document.removeEventListener("click", onClose);
    };
  }, [visible, onClose]);

  return (
    <OptionWrapper>
      <OptionTitle>{title}</OptionTitle>

      <DropdownWrapper ref={ref}>
        <DropdownValue value={value} isDropdown={visible} onClick={onToggle} />
        <DropdownItemWrapper show={visible}>{Items}</DropdownItemWrapper>
      </DropdownWrapper>
    </OptionWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
`;

export default Dropdown;
