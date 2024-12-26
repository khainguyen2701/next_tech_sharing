"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          router.push("/blog");
        }}
      >
        Redirect to blog by button
      </button>
      <Link href={"/blog"}>Redirect to blog by Link</Link>
    </div>
  );
}
