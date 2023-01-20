import { FC } from "react";

type SpecificClassHeaderProps = {
  day: string;
  time: string | null;
};

const SpecificClassHeader: FC<SpecificClassHeaderProps> = ({ day, time }) => {
  return (
    <h2>
      {day} at {time}
    </h2>
  );
};

export default SpecificClassHeader;
