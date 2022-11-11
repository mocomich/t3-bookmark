import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import * as Tabs from "@radix-ui/react-tabs";
import { memo } from "react";

type Props = {
  tabKey: string;
  title: string;
};

export const TabTitle: React.FC<Props> = memo(({ tabKey, title }) => {
  return (
    <Tabs.Trigger css={styles.tabTrigger} value={tabKey}>
      <TypoGraphy variant='h2'> {title}</TypoGraphy>
    </Tabs.Trigger>
  );
});

const styles = {
  tabTrigger: css({
    position: "relative",
    padding: "0 12px",
    "&[data-state=active]": {
      h2: {
        "&:after": {
          position: "absolute",
          content: "''",
          width: "120%",
          height: "4px",
          display: "inline-block",
          backgroundColor: COLORS.green,
          bottom: 0,
          left: "-10%",
        },
      },
    },
  }),
};
