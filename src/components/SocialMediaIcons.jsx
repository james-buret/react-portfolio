const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/james-buret-b24201158"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.svg" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/james-buret/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/git.svg" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
