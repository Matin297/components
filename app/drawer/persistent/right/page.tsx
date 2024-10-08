"use client";

import clsx from "clsx";
import { useState } from "react";
import Slide from "@/components/slide";
import Drawer from "@/components/drawer";

export default function PersistentDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex">
      <section
        className={clsx(
          "flex-grow p-4 space-y-2 transition-all duration-300 ease-in-out relative",
          !open && "-mr-52"
        )}
      >
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Drawer</h1>
          <button
            className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
            onClick={() => setOpen(true)}
          >
            Open Drawer
          </button>
        </header>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum dolores, aliquam quam laudantium odio quaerat. Quaerat, odit
          eveniet harum maiores libero vitae doloribus cum laboriosam? Pariatur
          nesciunt optio autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum dolores, aliquam quam laudantium odio quaerat. Quaerat, odit
          eveniet harum maiores libero vitae doloribus cum laboriosam? Pariatur
          nesciunt optio autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum dolores, aliquam quam laudantium odio quaerat. Quaerat, odit
          eveniet harum maiores libero vitae doloribus cum laboriosam? Pariatur
          nesciunt optio autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum dolores, aliquam quam laudantium odio quaerat. Quaerat, odit
          eveniet harum maiores libero vitae doloribus cum laboriosam? Pariatur
          nesciunt optio autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum dolores, aliquam quam laudantium odio quaerat. Quaerat, odit
          eveniet harum maiores libero vitae doloribus cum laboriosam? Pariatur
          nesciunt optio autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum dolores, aliquam quam laudantium odio quaerat. Quaerat, odit
          eveniet harum maiores libero vitae doloribus cum laboriosam? Pariatur
          nesciunt optio autem.
        </p>
      </section>
      <Drawer className="flex-shrink-0 w-52">
        <Slide anchor="right" open={open} className="w-52 p-4">
          <header className="flex justify-between items-center">
            <h2 className="font-semibold mb-2">Header Title</h2>
            <button
              className="text-teal-500 text-sm border transition-colors border-teal-500 rounded-[100%] w-6 h-6 hover:bg-teal-500 hover:text-black"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </header>

          <ul className="divide-y-2 text-sm">
            <li className="p-2">Taena</li>
            <li className="p-2">Tytos</li>
            <li className="p-2">Tysha</li>
            <li className="p-2">Ariane</li>
            <li className="p-2">Trystine</li>
            <li className="p-2">Red Viper</li>
          </ul>
        </Slide>
      </Drawer>
    </main>
  );
}
