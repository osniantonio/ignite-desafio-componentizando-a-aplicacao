import { Icon } from "../Icon";

import { IButtonProps } from "./@interfaces";

import "../../styles/button.scss";

export function Button({ iconName, title, selected, ...rest }: IButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}
