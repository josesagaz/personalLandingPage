import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-dragon-40x40.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="System's SagaZ home">
      <Image src={logo} alt="" width={32} height={32} />
    </Link>
  );
}
