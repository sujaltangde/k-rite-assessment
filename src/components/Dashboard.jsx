import { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { RiSettings4Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { PiCirclesFourBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import { TiDownloadOutline } from "react-icons/ti";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { CiPen } from "react-icons/ci";
import { TbSpeakerphone } from "react-icons/tb";
import { IoCode } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";




export const Dashboard = () => {
  const [dashToggle, setDashToggle] = useState(false);

  const [folderTog, setFolderTog] = useState(false);

  return (
    <>
      <div className=" flex gap-3 mx-4 my-3">
        <div
          className={`border px-3 py-3 min-h-[95vh] ${
            dashToggle ? "w-80" : "w-20"
          } border-gray-300 border-opacity-60 rounded-xl  bg-white`}
        >
          <div className="flex gap-3 justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => setDashToggle(!dashToggle)}>
                {" "}
                <img className="w-12" src="/images/logo.png" alt="" />
              </button>

              {dashToggle && (
                <div className="flex ml-1  flex-col ">
                  <span className="text-xs font-semibold  text-gray-600">
                    INC
                  </span>
                  <span className="text-base font-semibold">InnovateHub</span>
                </div>
              )}
            </div>
            {dashToggle && (
              <img className="w-10 mb-2" src="/images/profile.png" alt="" />
            )}
          </div>
          {dashToggle ? (
            <div className=" py-2 border border-gray-300 rounded-xl mt-3 border-opacity-30">
              <div className="flex mx-2 my-1  py-2 hover:bg-gray-100 px-2 rounded-xl cursor-pointer items-center gap-2">
                <CiPen size={18} />{" "}
                <span className="font-medium text-base">Design Team</span>
              </div>
              <div className="flex  mx-2 my-1  py-2 hover:bg-gray-100 px-2 rounded-xl cursor-pointer items-center gap-2">
                <TbSpeakerphone size={18} />{" "}
                <span className="font-medium text-base">Marketing team</span>
              </div>
              <div className="flex  mx-2 my-1 py-2 hover:bg-gray-100 px-2 rounded-xl cursor-pointer items-center gap-2">
                <IoCode size={18} />{" "}
                <span className="font-medium text-base">Development Team</span>
              </div>
              <div className="border-t"></div>
              <div className="flex  mx-2 my-1 px-2 py-2 hover:bg-gray-100  rounded-xl cursor-pointer items-center gap-2">
                <CgAddR size={18} />{" "}
                <span className="font-medium text-base">Create Team</span>
              </div>
            </div>
          ) : (
            <div className="flex font-semibold flex-col pl-3 mt-5 gap-6">
              <CiPen size={22} />
              <TbSpeakerphone size={22} />
              <IoCode size={20} />
              <CgAddR size={20} />
            </div>
          )}

          <div className="mx-2 my-1">
            <div
              onClick={() => setFolderTog(!folderTog)}
              className="flex cursor-pointer justify-between py-2 items-center"
            >
              <span className="font-medium text-sm">
                {dashToggle ? (
                  "FOLDERS"
                ) : (
                  <div className="pl-1 mt-5">
                    <GoFileDirectory size={20} />
                  </div>
                )}
              </span>
              {dashToggle ? (
                folderTog ? (
                  <FiMinus />
                ) : (
                  <GoPlus size={16} />
                )
              ) : null}
            </div>

            {/* <div className="flex justify-between py-2 items-center">
            <span className="flex items-center font-medium gap-2"><GoFileDirectory size={16} />  <span className="font-semibold pb-1">Products</span> </span>
            </div> */}
          </div>

          <div className="my-1 flex flex-col gap-3 ">

               
            

                {

               dashToggle ?    
            <>
            <div className="flex ml-2 items-center  gap-2">
              <MdOutlinePersonAddAlt1 className="mt-1" size={20} />
              <span className="font-semibold">Invite teammates</span>
            </div>
            <div className="flex ml-2 items-center font-semibold pr-3  gap-2">
              <AiOutlineQuestionCircle className="mt-1" size={20} />
              <span className="">Help and first steps</span>
            </div>
            <div className="flex px-2 bg-gray-200 rounded-xl py-2  items-center justify-between font-semibold pr-3  gap-2">
             <span className="text-sm"><span className="px-1 rounded-md bg-white ">7</span> days left on trial</span>
             <button className="px-2 py-2 rounded-xl bg-black font-semibold text-white text-xs">Add biling</button>
            </div>
            
            </> :  <div className="pl-0.5 flex flex-col ml-2 gap-5 mt-3 ">
                 <MdOutlinePersonAddAlt1 size={22} />
                <AiOutlineQuestionCircle size={22} />
               </div>
                }

          </div>
        </div>

        <div className="border min-h-[95vh] w-full border-gray-300 border-opacity-60 rounded-xl  bg-white">
          <div className="py-3 px-6 flex border-b border-gray-300 border-opacity-60 justify-between">
            <div>
              <p className="text-xl font-semibold">Products</p>
            </div>

            <div className="flex items-center justify-center  gap-4">
              <div className="flex items-center px-2 py-1.5 gap-2 justify-center  rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <span className="flex justify-center items-center">
                  <LuSearch size={19} />
                </span>
                <input
                  type="text"
                  className="text-sm  font-semibold pr-2 outline-none"
                  placeholder="Search for..."
                />
              </div>
              <button className="px-2 py-1.5 flex justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <LuMessagesSquare size={17} />
              </button>
              <button className="px-2 py-1.5  flex justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <RiSettings4Line size={17} />
              </button>
            </div>
          </div>
          <div className="py-3 px-6 flex  justify-between">
            <div className="flex items-center gap-3">
              <button className="px-2 py-1.5 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <PiCirclesFourBold size={17} />{" "}
                <span className="font-semibold">All brands</span>{" "}
                <IoMdArrowDropdown size={18} className="mt-1" />
              </button>
              <button className="px-2 py-1.5 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                {" "}
                <span className="font-semibold">Desks</span>{" "}
                <IoMdArrowDropdown size={18} className="mt-1" />
              </button>
              <button className="px-2 py-1.5 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                {" "}
                <span className="font-semibold">Tags</span>{" "}
                <IoMdArrowDropdown size={18} className="mt-1" />
              </button>

              <button className="px-2 py-1.5 bg-gray-100 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <AiOutlineSortAscending size={17} />{" "}
                <span className="font-semibold">Sort</span>{" "}
              </button>
              <button className="px-2 py-1.5 bg-gray-100 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <BsFilterLeft size={17} />{" "}
                <span className="font-semibold">Filter</span>{" "}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-2 py-1.5 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <CgAddR size={17} />{" "}
                <span className="font-semibold">Meeting</span>{" "}
              </button>
              <button className="px-2 py-1.5 text-sm flex gap-1.5 justify-center items-center rounded-lg shadow-md border border-gray-300 border-opacity-30">
                <TiDownloadOutline size={17} />{" "}
                <span className="font-semibold">Import/Export</span>{" "}
              </button>
            </div>
          </div>
          <div className="border-t  border-gray-300 border-opacity-60">
            <div className="grid  grid-cols-7  border-b border-gray-300 ">
              <div className="px-4 flex items-center justify-between py-2   ">
                <div className="flex items-center justify-center gap-3">
                  <input type="checkbox" id="blackCheckbox" className="h-5" />

                  <span className="flex items-center font-semibold text-gray-600 text-base pb-1">
                    Brand
                  </span>
                </div>
                <span className="text-gray-600">
                  <GoPlus size={20} />
                </span>
              </div>
              <div className="px-2 py-2 font-semibold text-gray-600 text-base  border-l border-gray-300 ">
                Description
              </div>
              <div className="px-2 py-2 font-semibold text-gray-600 text-base  border-l border-gray-300 ">
                Members
              </div>
              <div className="px-2 py-2 font-semibold text-gray-600 text-base  border-l border-gray-300 ">
                Categories
              </div>
              <div className="px-2 py-2 font-semibold text-gray-600 text-base  border-l border-gray-300 ">
                Tags
              </div>
              <div className="px-2 py-2  font-semibold text-gray-600 text-base border-l border-gray-300 ">
                Next meeting
              </div>
              <div className="px-2 py-2  flex items-center font-semibold text-gray-600 text-base border-l border-gray-300 ">
                <GoPlus size={20} />
              </div>
            </div>

            <div className="grid   grid-cols-7  border-b border-gray-300">
              <div className="px-2  text-right py-2 font-semibold text-gray-600 text-sm   border-gray-300 ">
                10 count
              </div>
              <div className="px-2 text-right py-2 font-semibold text-gray-600 text-sm  border-l border-gray-300 ">
                <div className="flex items-center gap-1 text-gray-600 justify-end">
                  <GoPlus className="mt-0.5" size={20} />{" "}
                  <span>Add calculation</span>
                </div>
              </div>
              <div className="px-2 text-right py-2 font-semibold text-gray-600 text-sm  border-l border-gray-300 ">
                <div className="flex items-center gap-1 text-gray-600 justify-end">
                  <GoPlus className="mt-0.5" size={20} />{" "}
                  <span>Add calculation</span>
                </div>
              </div>
              <div className="px-2 text-right py-2 font-semibold text-gray-600 text-sm  border-l border-gray-300 ">
                <div className="flex items-center gap-1 text-gray-600 justify-end">
                  <GoPlus className="mt-0.5" size={20} />{" "}
                  <span>Add calculation</span>
                </div>
              </div>
              <div className="px-2 text-right py-2 font-semibold text-gray-600 text-sm  border-l border-gray-300 ">
                <div className="flex items-center gap-1 text-gray-600 justify-end">
                  <GoPlus className="mt-0.5" size={20} />{" "}
                  <span>Add calculation</span>
                </div>
              </div>
              <div className="px-2 py-2 font-semibold text-gray-600 text-base  border-l border-gray-300 "></div>
              <div className="px-2 py-2 font-semibold text-gray-600 text-base  border-l border-gray-300 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
