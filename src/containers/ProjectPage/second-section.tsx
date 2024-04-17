import Image from "next/image";

const SecondSection = () => {
  const projectData = [
    {
      image: "/imgs/img_project/test.png",
      name: "Example Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: "/imgs/img_project/test.png",
      name: "Example Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: "/imgs/img_project/test.png",
      name: "Example Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: "/imgs/img_project/test.png",
      name: "Example Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <section>
      <div className=" flex flex-row items-center justify-center w-full pt-12 mx-2">
        <button className="font-satoshi font-bold tracking-wide border px-4 py-1 mr-5 bg-black text-white">
          All Work
        </button>
        <button className="font-satoshi font-bold tracking-wide border border-black px-4 py-1 mr-5">
          Web Application
        </button>
        <button className="font-satoshi font-bold tracking-wide border border-black px-4 py-1 mr-5">
          Mobile Application
        </button>
      </div>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-screen-2xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 xl:grid-cols-2 ">
          {projectData.map((project, index) => {
            return (
              <div className="p-6  border-black border-2 " key={index}>
                {/* card 1 */}
                <Image
                  className="w-full mb-8"
                  src={project.image}
                  width={1080}
                  height={1080}
                  alt=""
                />
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  {project.name}
                </h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                    title="read more"
                  >
                    See Case Study »
                  </a>
                </div>
              </div>
            );
          })}
          {/* card 1 */}
          {/* <div className="p-6  border-black border-2 ">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-50 md:h-50"
              src={projectData[0].image}
              width={50}
              height={50}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
            <div className="mt-4">
              <a
                href="#"
                className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                title="read more"
              >
                See Case Study »
              </a>
            </div>
          </div> */}
          {/* card 2 */}
          {/* <div className="p-6 border-black border-2">
            <img
              className="object-cover object-center w-full mb-8 lg:h-50 md:h-50"
              src="https://cdn.discordapp.com/attachments/1223282701734248458/1229874150378831973/isic-Group3-1024x510_2.png?ex=6631448f&is=661ecf8f&hm=b6bffe876c7e0ebdc8f218cd616a06f755e561bac7bafff04f353603a152e2e0&"
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
            <div className="mt-4">
              <a
                href="#"
                className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                title="read more"
              >
                See Case Study »
              </a>
            </div>
          </div> */}
          {/* card 3 */}
          {/* <div className="p-6 border-black border-2">
            <img
              className="object-cover object-center w-full mb-8 lg:h-50 md:h-50 "
              src="https://cdn.discordapp.com/attachments/1223282701734248458/1229874150378831973/isic-Group3-1024x510_2.png?ex=6631448f&is=661ecf8f&hm=b6bffe876c7e0ebdc8f218cd616a06f755e561bac7bafff04f353603a152e2e0&"
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
            <div className="mt-4">
              <a
                href="#"
                className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                title="read more"
              >
                See Case Study »
              </a>
            </div>
          </div> */}
          {/* card 4 */}
          {/* <div className="p-6 border-black border-2">
            <img
              className="object-cover object-center w-full mb-8 lg:h-50 md:h-50 "
              src="https://cdn.discordapp.com/attachments/1223282701734248458/1229874150378831973/isic-Group3-1024x510_2.png?ex=6631448f&is=661ecf8f&hm=b6bffe876c7e0ebdc8f218cd616a06f755e561bac7bafff04f353603a152e2e0&"
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                title="read more"
              >
                See Case Study »
              </a>
            </div>
          </div> */}
          {/* card 5 */}
          {/* <div className="p-6 border-black border-2">
            <img
              className="object-cover object-center w-full mb-8 lg:h-50 md:h-50 "
              src="https://cdn.discordapp.com/attachments/1223282701734248458/1229874150378831973/isic-Group3-1024x510_2.png?ex=6631448f&is=661ecf8f&hm=b6bffe876c7e0ebdc8f218cd616a06f755e561bac7bafff04f353603a152e2e0&"
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
            <div className="mt-4">
              <a
                href="#"
                className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                title="read more"
              >
                See Case Study »
              </a>
            </div>
          </div> */}
          {/* card 6 */}
          {/* <div className="p-6 border-black border-2">
            <img
              className="object-cover object-center w-full mb-8 lg:h-50 md:h-50 "
              src="https://cdn.discordapp.com/attachments/1223282701734248458/1229874150378831973/isic-Group3-1024x510_2.png?ex=6631448f&is=661ecf8f&hm=b6bffe876c7e0ebdc8f218cd616a06f755e561bac7bafff04f353603a152e2e0&"
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="font-satoshi inline-flex items-center px-5 py-2 mt-4 font-medium text-white lg:mb-0 hover hover:text-black hover:bg-MainColor border bg-[#232729]"
                title="read more"
              >
                See Case Study »
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
