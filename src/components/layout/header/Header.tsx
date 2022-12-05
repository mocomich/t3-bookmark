import { Button } from "@/components/util-elements/Button";
import { Link } from "@/components/util-elements/Link";
import { useModal } from "@/hooks/utils/useModal";
import { LAYOUT_WIDTH } from "@/styles/config/sizes";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import { GrSearch } from "react-icons/gr";

import { Avatar } from "./Avatar";
import { DropdownMenu } from "./DropDownMenu";
import { LoginModal } from "./LoginModal";

export const Header: React.FC = memo(() => {
  const router = useRouter();
  const { data: session } = useSession();
  const { open, setOpen, onClickOpen } = useModal();

  // hooksにして共通化したい
  const onClickToCreatePage = () => {
    router.push("/mypage/edit");
  };

  const onClickToSearchPage = () => {
    router.push("/mypage/search");
  };

  return (
    <header css={styles.header}>
      <div css={styles.headerInner}>
        <Link href='/'>
          <Image
            css={styles.image}
            src={`/assets/logo.png`}
            width={124}
            height={36}
            alt='犬のアイコン画像'
          />
        </Link>
        <nav>
          <ul css={styles.links}>
            {session?.user?.image && (
              <>
                <button onClick={onClickToSearchPage}>
                  <GrSearch css={styles.icon} size={28} />
                </button>
                <DropdownMenu
                  triggerComponent={<Avatar imageUrl={session?.user?.image} />}
                />
              </>
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
  icon: css({
    cursor: "pointer",
    padding: "2px",
  }),
  image: css({
    cursor: "pointer",
    ":hover": {
      opacity: "0.7",
    },
  }),
};
