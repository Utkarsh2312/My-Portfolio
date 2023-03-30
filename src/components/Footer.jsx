import React from "react";


const Footer = () => {


  return (
    <>
      <section id="footer">
        <footer className="footer justify-center items-center flex flex-row py-28 mx-auto bg-[#0a192f]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-gray-300 text-base">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/utkarsh-shrivastava-454203209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink text-base"
              >
                Utkarsh Shrivastava
              </a>
            </p>
            
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
