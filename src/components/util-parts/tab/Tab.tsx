import { COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import * as Tabs from "@radix-ui/react-tabs";

import { TabTitle } from "./TabTitle";

type Props = {
  defaultKey: string;
  tabs: Readonly<
    {
      title: string;
      key: string;
      component: React.ReactNode;
    }[]
  >;
};

export const Tab: React.FC<Props> = ({ defaultKey, tabs }) => (
  <Tabs.Root css={styles.container} defaultValue={defaultKey}>
    <Tabs.List css={styles.tabList} aria-label='Find Articles'>
      <div css={styles.tabListInner}>
        {tabs.map((tab) => (
          <TabTitle key={tab.key} tabKey={tab.key} title={tab.title} />
        ))}
      </div>
    </Tabs.List>
    {tabs.map((tab) => (
      <Tabs.TabsContent value={tab.key} key={tab.key}>
        <div css={styles.tabContent}>{tab.component}</div>
      </Tabs.TabsContent>
    ))}
  </Tabs.Root>
);

const styles = {
  container: css({}),
  tabList: css({
    background: COLORS.white,
    height: "65px",
    lineHeight: "65px",
    [sp]: {
      height: "45px",
      lineHeight: "45px",
    },
  }),
  tabListInner: css({
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  }),
  tabContent: css({
    margin: "0 auto",
    width: "80%",
    [sp]: {
      width: "95%",
    },
  }),
};
