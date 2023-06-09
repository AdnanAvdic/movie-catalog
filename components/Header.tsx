import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Hide,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-3 w-full bg-slate-950 ">
      <div className="flex flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-row gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <span className="font-semibold text-lg text-white">
            <Link href="/" className="cursor-pointer">
              Movie Catalog
            </Link>
          </span>
        </div>

        <div>
          <Show below="md">
            <Menu>
              <MenuButton
                background="none"
                as={Button}
                rounded="full"
                _hover={{ bg: "gray.800" }}
                _active={{ bg: "gray.800" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:hidden text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </MenuButton>

              <MenuList
                borderRadius="md"
                overflow="hidden"
                padding="0"
                fontWeight="light"
                border="#ffffff"
                textColor="white"
                bg="gray.700"
              >
                <MenuItem background="gray.700" _hover={{ bg: "gray.900" }}>
                  Back to top
                </MenuItem>

                <MenuItem background="gray.700" _hover={{ bg: "gray.900" }}>
                  <Link href="/favorites/">Favorited movies</Link>
                </MenuItem>

                <MenuItem background="gray.700" _hover={{ bg: "gray.900" }}>
                  Portfolio
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>

          <Show above="md">
            <ul className="flex flex-row items-center gap-2 text-white">
              <li className="hover:bg-slate-700 rounded-md py-1 px-3 cursor-pointer transition-all">
                Back to top
              </li>
              <li className="hover:bg-slate-700 rounded-md py-1 px-3 cursor-pointer transition-all">
                Favorite Movies
              </li>
              <li className="hover:bg-slate-700 rounded-md py-1 px-3 cursor-pointer transition-all">
                Portfolio
              </li>
            </ul>
          </Show>
        </div>
      </div>
    </nav>
  );
}
