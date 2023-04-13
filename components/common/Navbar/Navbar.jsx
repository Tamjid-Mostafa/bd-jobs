import DropDownArrow from "@components/icons/DropDownArrow";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { MdEditNote, MdExitToApp } from 'react-icons/md'
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2'
import cn from 'clsx'
import Topbar from "./Topbar";
import Container from "@components/ui/Container";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const router = useRouter();

  const categories = [
    { name: "Bdjobs", slug: "bdjobs" },
    { name: "jobs", slug: "jobs" },
    { name: "Job Seeker Account", slug: "job-seeker-account" },
  ];
  const navBarlinks = categories.map((c) => ({
    label: c.name,
    href: `/${c.slug}`,
  }));

  const dropdownmenu = [
    {
      name: 'View Resume',
      icon: <IoDocumentTextSharp />,
      slug: 'https://mybdjobs.bdjobs.com/mybdjobs/masterview.asp'
    },
    {
      name: 'Edit Resume',
      icon: <MdEditNote />,
      slug: 'https://mybdjobs.bdjobs.com/new_mybdjobs/step_01_view.asp'
    },
    {
      name: 'Applied Jobs',
      icon: <HiOutlineDocumentMagnifyingGlass />,
      slug: 'https://mybdjobs.bdjobs.com/mybdjobs/apply_position.asp'
    },
  ]



  return (
    <>
      <div className="lg:block hidden">
        <Topbar navBarlinks={navBarlinks} />
      </div>
      <nav className=" border-gray-200 ">
        <Container>
          <div className="flex lg:flex-wrap lg:justify-between items-center py-2">
            <div className="flex items-center justify-center lg:order-1 order-2 lg:w-auto w-full">
              <a href="https://bdesh.bdjobs.com/bn/defaultbn.asp" >
                <img src="/logo_bdesh.svg" className="h-8 mr-3" alt=" Logo" />
              </a>
            </div>
            <div className="lg:flex hidden items-center order-1">
              <a href="https://bdesh.bdjobs.com/bn/defaultbn.asp" className="flex items-center">
                <img src="/Joint_venture.png" className="h-8 mr-3" alt=" Logo" />
              </a>
            </div>
            <div className="relative lg:flex hidden items-center order-1">

              <button className="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button"
                onClick={() => setDropDownOpen(!dropDownOpen)}
              ><img className="w-8 h-8 rounded-full ring-[2px] mr-3" src="https://my.bdjobs.com/photos//3500001-3525000/1413524186t8p0s.jpg?var=114202338" alt="" />
                <span>Tamjid Mostafa</span><DropDownArrow /></button>

              {/* <!-- Dropdown menu --> */}
              <div id="dropdownInformation" className={cn('absolute top-14 z-10  divide-y border-[1px] rounded-b-lg shadow w-44  ', dropDownOpen ? '' : 'hidden')}>

                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformationButton">

                  {
                    dropdownmenu.map((item, index) =>
                      <li key={index}>
                        <a href={item.slug} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <span>
                            {item.icon}
                          </span>
                          <span>{item.name}</span>
                        </a>
                      </li>
                    )
                  }
                </ul>
                <div className="py-2">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span>
                    <MdExitToApp />
                  </span>
                    <span>Sign Out</span></a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <span className="-rotate-90">
                  <BsFillTelephoneFill />
                </span>
                <span>Contact Us</span>
              </div>
            </div>
            <button
              className="lg:order-1 lg:hidden "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </Container>
          <MobileNav
            dropdownmenu={dropdownmenu}
            navBarlinks={navBarlinks}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
      </nav>
    </>
  );
};

export default Navbar;
