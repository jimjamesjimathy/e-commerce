import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="bg-fourthLight min-h-[45vh] flex items-center">
        <div className="flex flex-wrap items-center w-full h-full px-32 justify-evenly">
          <ul className="flex flex-col items-start justify-evenly">
            <h3 className="pb-2 text-xl font-semibold">List Title</h3>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
          </ul>
          <ul className="flex flex-col items-start justify-evenly">
            <h3 className="pb-2 text-xl font-semibold">List Title</h3>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
          </ul>
          <ul className="flex flex-col items-start justify-evenly">
            <h3 className="pb-2 text-xl font-semibold">List Title</h3>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
          </ul>
          <ul className="flex flex-col items-start justify-evenly">
            <h3 className="pb-2 text-xl font-semibold">List Title</h3>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
          </ul>
          <ul className="flex flex-col items-start justify-evenly">
            <h3 className="pb-2 text-xl font-semibold">List Title</h3>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
            <li className="py-1 text-sm">link</li>
          </ul>
          <div className="flex flex-col w-full gap-5 py-7">
            <div className="flex items-center justify-center gap-9">
              <AiFillFacebook className="text-3xl text-white" />
              <AiFillInstagram className="text-3xl text-white" />
              <AiFillTwitterSquare className="text-3xl text-white" />
              <AiFillYoutube className="text-3xl text-white" />
            </div>
            <p className="w-[50%] mx-auto text-xs text-center font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad,
              excepturi saepe esse illo soluta similique minus ex cupiditate
              veritatis aliquam possimus eos. Maxime necessitatibus nobis ab
              aperiam, officiis rerum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque ad, excepturi saepe esse illo soluta
              similique minus ex cupiditate veritatis aliquam possimus eos.
              Maxime necessitatibus nobis ab aperiam, officiis rerum!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
