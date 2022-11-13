import { Button } from "@/components/util-elements/Button";
import { Link } from "@/components/util-elements/Link";
import { Modal } from "@/components/util-parts/Modal";
import { useModal } from "@/hooks/utils/useModal";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { memo } from "react";

import { Avatar } from "./Avatar";
import { DropdownMenu } from "./DropDownMenu";
import { HeaderMenu } from "./HeaderMenu";

export const Header: React.FC = memo(() => {
  const router = useRouter();
  const { data: session } = useSession();
  const { open, setOpen, onClickOpen } = useModal();

  const onClickToCreatePage = () => {
    router.push("/mypage/edit");
  };

  return (
    <header css={styles.header}>
      <div css={styles.headerInner}>
        {/* TODO: ロゴ設置 */}
        <Link href='/'>Stock</Link>
        <nav>
          <ul css={styles.links}>
            {session?.user?.image && (
              <DropdownMenu
                triggerComponent={<Avatar imageUrl={session?.user?.image} />}
              />
            )}
            <div className='w-24'>
              <Button
                size='medium'
                color={session ? "green" : "blue"}
                onClick={session ? onClickToCreatePage : onClickOpen}
              >
                {session ? "Add New" : "Login"}
              </Button>
            </div>
          </ul>
        </nav>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <HeaderMenu />
      </Modal>
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
