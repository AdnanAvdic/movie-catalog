import Link from "next/link";
import React from "react";

type Props = {};

export default function favorites({}: Props) {
  return (
    <main className="text-white">
      <h1>Favorites</h1>
      <Link href="/">Back to movie list</Link>
    </main>
  );
}
