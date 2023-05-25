import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-semibold text-2xl text-slate-300">
            JAMES BURET
          </p>
          <p className="text-md text-slate-300">
            ©2023 BURET. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
