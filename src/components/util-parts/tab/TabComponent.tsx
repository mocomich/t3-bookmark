import { TabTitle } from "@/components/util-parts/tab/TabTitle";
import { LAYOUT_WIDTH } from "@/styles/config/sizes";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import * as Tabs from "@radix-ui/react-tabs";

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

export const TabComponent: React.FC<Props> = ({ defaultKey, tabs }) => (
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
  }),
  tabListInner: css({
    maxWidth: LAYOUT_WIDTH,
    width: "95%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  }),
  tabContent: css({
    maxWidth: LAYOUT_WIDTH,
    width: "95%",
    margin: "0 auto",
  }),
};
