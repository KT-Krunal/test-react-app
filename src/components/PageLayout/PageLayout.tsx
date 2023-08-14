import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props {}

const PageLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="h-screen">
      <header className="flex justify-between items-center py-4 px-8 bg-blue-600 shadow">
        <Link
          to="/"
          className="py-1 px-4 rounded-full bg-white text-gray-800 font-bold text-lg tracking-tight flex items-center space-x-2"
        >
          <span>
            <img
              className="sm:m-auto h-8 w-8 rounded-sm"
              alt="ClickFunnels #1"
              src="https://account.myclickfunnels.com/assets/media/images/eva/logo/logo-9406cd144075af06df59294c5ddb17639a9fb44b5eeb966df0477d9e3d4d4be1.png"
            />
          </span>
          <span>ClickFunnels Forum</span>
        </Link>
      </header>
      <main className="bg-gray-200 h-full overflow-y-auto py-12 flex justify-center">
        <div className="w-full sm:max-w-2xl">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
