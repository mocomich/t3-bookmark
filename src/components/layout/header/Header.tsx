import { Button } from "@/components/util-elements/Button";
import { LAYOUT_WIDTH } from "@/styles/config/sizes";
import { vwCalcFn } from "@/styles/mixin";
import { PATH_LIST } from "@/utils/const";
import { useModal } from "@/utils/hooks/useModal";
import { useNavigation } from "@/utils/hooks/useNavigation";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";
import { memo, useCallback } from "react";

import { Logo } from "../Logo";
import { Avatar } from "./Avatar";
import { DropdownMenu } from "./DropDownMenu";
import { LoginModal } from "./LoginModal";
import { SearchIcon } from "./SearchIcon";

export const Header: React.FC = memo(() => {
  const { data: session } = useSession();
  const { open, setOpen, onClickOpen } = useModal();

  const { navigate } = useNavigation();

  const onClickHandler = useCallback(() => {
    navigate(PATH_LIST["search"]);
  }, [navigate]);

  return (
    <header css={styles.header}>
      <div css={styles.headerInner}>
        <Logo />
        <nav>
          <ul css={styles.links}>
            {session?.user?.image && (
              <>
                <SearchIcon onClick={onClickHandler} />
                <DropdownMenu
                  triggerComponent={<Avatar imageUrl={session?.user?.image} />}
                />
              </>
            )}
            <div className='w-24'>
              <Button
                size='medium'
                color={session ? "green" : "blue"}
                onClick={
                  session ? () => navigate(PATH_LIST["edit"]) : onClickOpen
                }
              >
                {session ? "Add New" : "Login"}
              </Button>
            </div>
          </ul>
        </nav>
      </div>
      <LoginModal open={open} setOpen={setOpen} />
    </header>
  );
});

const styles = {
  header: css({
    width: "100%",
    background: "white",
    display: "grid",
  }),
  headerInner: css({
    maxWidth: LAYOUT_WIDTH + 40,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 20px`,
  }),
  links: css({
    display: "flex",
    alignItems: "center",
    gap: vwCalcFn(32),
  }),
  image: css({
    cursor: "pointer",
    ":hover": {
      opacity: "0.7",
    },
  }),
};
