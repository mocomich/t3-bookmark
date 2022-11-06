import { Button } from "@/components/util-elements/Button";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { signIn } from "next-auth/react";
import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const HeaderMenu: React.FC = memo(() => {
  return (
    <>
      <div className='w-56'>
        <Button size='large' color='offWhite' onClick={() => signIn("google")}>
          <FcGoogle size={22} className='mr-4' />
          <TypoGraphy variant='large'>Login with Google</TypoGraphy>
        </Button>
      </div>
      <div className='w-56 mt-4'>
        <Button size='large' color='offWhite' onClick={() => signIn("github")}>
          <FaGithub size={22} className='mr-4' />
          <TypoGraphy variant='large'>Login with GitHub</TypoGraphy>
        </Button>
      </div>
    </>
  );
});
