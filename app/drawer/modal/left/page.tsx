"use client";

import { useState } from "react";
import Modal from "@/components/modal";
import Backdrop from "@/components/backdrop";
import Drawer, { DrawerModal } from "@/components/drawer";

export default function PersistentDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Drawer>
        <Modal transition="on" open={open}>
          <Backdrop />
          <DrawerModal anchor="left" className="w-52 p-4">
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
          </DrawerModal>
        </Modal>
      </Drawer>
      <section className="p-4 space-y-2">
        <header className="flex gap-4 items-center">
          <button
            className="bg-teal-500 border p-2 rounded inline-block hover:bg-teal-600 transition-colors"
            onClick={() => setOpen(true)}
          >
            Open Drawer
          </button>
          <h1 className="text-xl font-bold">Drawer</h1>
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
    </main>
  );
}
