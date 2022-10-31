import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";

import { Button } from "../util-elements/Button";
import { Link } from "../util-elements/Link";

export const Header: React.FC = () => {
  const LinkRoot = [{ href: "/", title: "Add New" }] as const;
  return (
    <header css={styles.header}>
      <div css={styles.headerInner}>
        {/* TODO: ロゴ設置 */}
        <h1>APP</h1>
        <nav>
          <ul css={styles.links}>
            {LinkRoot.map((root) => (
              <Link href={root.href} key={root.href}>
                <div className='w-24'>
                  <Button size='medium' color='green'>
                    {root.title}
                  </Button>
                </div>
              </Link>
            ))}
            <div className='w-24'>
              <Button size='medium' color='red'>
                Logout
              </Button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: css({
    width: "100%",
    background: "white",
    display: "grid",
  }),
  headerInner: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${vwCalcFn(40)}`,
  }),
  links: css({
    display: "flex",
    alignItems: "center",
    gap: vwCalcFn(32),
  }),
};
