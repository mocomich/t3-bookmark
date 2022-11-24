import { Tab } from "@/components/util-parts/tab/Tab";
import React from "react";

import { Qiita } from "../qiita/components/Qiita";
import { Zenn } from "../zenn/components/Zenn";

const tabs = [
  { title: "Zenn", key: "zenn", component: <Zenn /> },
  { title: "Qiita", key: "qiita", component: <Qiita /> },
] as const;

export const Articles: React.FC = () => {
  return <Tab defaultKey='zenn' tabs={tabs} />;
};
