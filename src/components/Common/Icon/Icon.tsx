import { FC } from "react";

type Props = {
  className: string;
  name: string;
};

const Icon: FC<Props> = ({ className, name }) => {
  return (
    <svg className={`${className}`}>
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
