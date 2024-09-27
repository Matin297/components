import Drawer, { DrawerPaper } from "@/components/drawer";

export default function DrawerPL() {
  return (
    <main className="flex">
      <Drawer className="flex-shrink-0 w-52">
        <DrawerPaper anchor="left" className="w-52 p-4">
          <h2 className="font-semibold mb-2">Header Title</h2>
          <ul className="divide-y-2 text-sm">
            <li className="p-2">Taena</li>
            <li className="p-2">Tytos</li>
            <li className="p-2">Tysha</li>
            <li className="p-2">Ariane</li>
            <li className="p-2">Trystine</li>
            <li className="p-2">Red Viper</li>
          </ul>
        </DrawerPaper>
      </Drawer>
      <section className="flex-grow p-4 space-y-2">
        <h1 className="text-xl font-bold">Drawer</h1>
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
