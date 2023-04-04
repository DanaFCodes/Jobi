import { Menu } from "@headlessui/react";
import Image from "next/image";
import bottomArrow from "../public/homeAssets/arrowDown.png";


export default function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className={"anchorsUp"}>
        <Image src={bottomArrow} alt="bottom arrow" width={15} height={8} />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <a className="anchorsUp" href="/">
            Home
          </a>
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/jobs"
            >
              Jobs
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          <a className="plans" href="/plans">
            Plans
          </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
