"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    description: string[];
    image: string;
    urlGithub: string;
    urlDemo: string;
  }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, description, image, urlGithub, urlDemo } = data;

  // Estado para controlar la visibilidad del popover
  const [showPopover, setShowPopover] = useState(false);

  const [showPopoverDemo, setShowPopoverDemo] = useState(false);

  // Función para manejar el click en el botón de Github
  const handleClickGithub = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (urlGithub === "") {
      e.preventDefault(); // evita que se abra la URL si está vacía
      setShowPopover(true); // Mostrar el popover si la URL está vacía
      setTimeout(() => {
        setShowPopover(false); // Ocultar el popover después de 3 segundos
      }, 3000);
      // toast.error("El repositorio de este proyecto es privado");
    }
  }

  const checkUrlDemo = (e: React.MouseEvent) => {
    if (!urlDemo) {
      e.preventDefault();
      setShowPopoverDemo(true);
      setTimeout(() => {
        setShowPopoverDemo(false);
      }, 3000);
    }
  }

  return (
    <div
      key={id}
      className="p-4 border mx-1/2 sm:m-auto md:m-auto border-teal-50 rounded-xl text-center relative w-[94%]"
    >
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <Image
        src={"/images/projects" + image}
        alt="Image"
        width={400} height={400} className=" w-full md:w-[500px] rounded-2xl h-64"
      />
      <div className="flex justify-center  gap-4">
        {description.map((item, index) => (
          <p key={index} className="my-4 px-2 py-1/2 border rounded-lg border-purple-950 bg-gray-400 text-purple-950 font-bold flex items-center justify-center">{item}</p>
        ))}
      </div>

      <div className="relative flex gap-5 mt-1 justify-center"> {/* Contenedor de botones con posición relativa */}
        <Link
          href={urlGithub || "#"}
          target={urlGithub ? "_blank" : "_self"}
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 relative"
          onClick={handleClickGithub}
        >
          Github
        </Link>

        {/* Popover en vez de Toast */}
        {showPopover && (
          <div className="absolute bottom-48 left-50% mt-2 p-4 bg-red-500 text-white text-xl rounded-lg shadow-lg z-10">
            Actualmente este repositorio es privado
          </div>
        )}

        {showPopoverDemo && (
          <div className="absolute bottom-48 left-50% mt-2 p-4 bg-gray-600 text-white text-xl rounded-lg shadow-lg z-10">
            Actualmente este proyecto es privado
          </div>
        )}

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
          onClick={checkUrlDemo}
        >
          Live demo
        </Link>
      </div>
    </div>
  );
}

export default PortfolioBox;
