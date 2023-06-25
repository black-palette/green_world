import Link from "next/link";
import Image from "next/image";

import s from "../../styles/header/logo.module.scss";

const Logo = () => {
  return (
    <div className={`${s["brand-heading"]}`}>
      <Link href="#">
        <Image src="/logo.svg" alt="logo" width={0} height={0} />
        <h1>Живій світ</h1>
      </Link>
    </div>
  );
};

export default Logo;
s;
