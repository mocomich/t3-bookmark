import { Button } from "@/components/util-elements/Button";
import { signIn } from "next-auth/react";
import { memo } from "react";

export const HeaderMenu: React.FC = memo(() => {
  return (
    <>
      {/* //:TODO GOOGLEとGithubのアイコン設置 */}
      <div className='w-56'>
        <Button size='medium' color='green' onClick={() => signIn("google")}>
          Login with Google
        </Button>
      </div>
      <div className='w-56 mt-4'>
        <Button size='medium' color='green' onClick={() => signIn("github")}>
          Login with GitHub
        </Button>
      </div>
    </>
  );
});
