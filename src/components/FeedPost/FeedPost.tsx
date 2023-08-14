import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";

type Props = {};

const FeedPost: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <p className="leading-6 text-gray-700 h-full">{children}</p>
    </div>
  );
};

export default FeedPost;
