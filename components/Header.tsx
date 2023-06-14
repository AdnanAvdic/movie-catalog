"use client";

import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav className="p-3 w-full bg-slate-900 ">
      <div className="flex flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-row gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-slate-400"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <span className="font-semibold text-lg text-slate-400">
            <Link href="/" className="cursor-pointer">
              Movie Catalog
            </Link>
          </span>
        </div>

        <div>
          <Button
            bg="gray.800"
            textColor="gray.400"
            _hover={{ backgroundColor: "gray.700" }}
            onClick={onOpen}
            paddingX={6}
          >
            Movie menu
          </Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent backgroundColor={"gray.900"} textColor="gray.500">
              <DrawerHeader borderBottomWidth="1px">Movie Menu</DrawerHeader>
              <DrawerBody>
                <Accordion allowToggle>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "gray.700", color: "gray.300" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Movie Genres
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel border="none">
                      <div className="flex flex-col gap-3 text-left">
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/action`}
                          onClick={onClose}
                        >
                          Action
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/adventure`}
                          onClick={onClose}
                        >
                          Adventure
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/animation`}
                          onClick={onClose}
                        >
                          Animation
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/comedy`}
                          onClick={onClose}
                        >
                          Comedy
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/crime`}
                          onClick={onClose}
                        >
                          Crime
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/documentary`}
                          onClick={onClose}
                        >
                          Documentary
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/drama`}
                          onClick={onClose}
                        >
                          Drama
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/family`}
                          onClick={onClose}
                        >
                          Family
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/fantasy`}
                          onClick={onClose}
                        >
                          Fantasy
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/history`}
                          onClick={onClose}
                        >
                          History
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/horror`}
                          onClick={onClose}
                        >
                          Horror
                        </Link>

                        <Link
                          className="hover:text-slate-400"
                          href={`genre/music`}
                          onClick={onClose}
                        >
                          Music
                        </Link>

                        <Link
                          className="hover:text-slate-400"
                          href={`genre/mystery`}
                          onClick={onClose}
                        >
                          Mystery
                        </Link>

                        <Link
                          className="hover:text-slate-400"
                          href={`genre/science-fiction`}
                          onClick={onClose}
                        >
                          Science-Fiction
                        </Link>

                        <Link
                          className="hover:text-slate-400"
                          href={`genre/tv-movie`}
                          onClick={onClose}
                        >
                          TV-Movie
                        </Link>

                        <Link
                          className="hover:text-slate-400"
                          href={`genre/thriller`}
                          onClick={onClose}
                        >
                          Thriller
                        </Link>

                        <Link
                          className="hover:text-slate-400"
                          href={`genre/war`}
                          onClick={onClose}
                        >
                          War
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href={`genre/western`}
                          onClick={onClose}
                        >
                          Western
                        </Link>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "gray.700", color: "gray.300" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Your bookmarks
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel border="none">
                      <div className="flex flex-col gap-3 text-left">
                        <Link
                          className="hover:text-slate-400"
                          href="/favorites"
                          onClick={onClose}
                        >
                          Favorites
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href="/watchlist"
                          onClick={onClose}
                        >
                          Watchlist
                        </Link>
                        <Link
                          className="hover:text-slate-400"
                          href="completed"
                          onClick={onClose}
                        >
                          Completed movies
                        </Link>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
