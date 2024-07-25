/* eslint-disable @next/next/no-img-element */
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
    description: string;
    logos: string[];
    image: string;
    urlGithub: string;
    urlDemo: string;
  }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, description, logos, image, urlGithub, urlDemo } = data;

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
    <div key={id} className="mask-gradient group relative cursor-pointer items-center justify-center 
        overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-2xl shadow-indigo-900">
      <div className="h-[calc(65vh-100px)] w-full">
        <img className="w-full h-full object-cover transition-transform duration-500 
        group-hover:rotate-3 group-hover:scale-125" src={'/images/projects' + image} alt={'project ' + title} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/10 group-hover:from-black/100 group-hover:via-black/60 group-hover:to-black/70 transition-opacity duration-500 opacity-100 group-hover:opacity-100">
      </div>
      <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center 
      justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white mb-3">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-pretty">
          {description}</p>
        <div className='flex gap-x-3 mb-3'>
          {logos.map((logo, i) => (
            <img key={i} src={"https://skillicons.dev/icons?i=" + logo + "&perline=14"} alt={'project '+title} className='w-10 h-10' />
          ))}
        </div>
        <div className="relative flex gap-5 mt-1 justify-center"> {/* Contenedor de botones con posición relativa */}
          <Link
            href={urlGithub || "#"}
            target={urlGithub ? "_blank" : "_self"}
            className="p-2 transition duration-150 rounded-full bg-neutral-900 shadow shadow-black/60 hover:bg-slate-500/80 relative"
            onClick={handleClickGithub}
          >
            Github
          </Link>

          {/* Popover en vez de Toast */}
          {showPopover && (
            <div className="absolute w-96 bottom-20 left-50% mt-2 p-4 bg-red-500 text-white text-xl rounded-lg shadow-lg z-10">
              Actualmente este repositorio es privado
            </div>
          )}

          {showPopoverDemo && (
            <div className="absolute w-96 bottom-20 left-50% mt-2 p-4 bg-gray-600 text-white text-xl rounded-lg shadow-lg z-10">
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
            className="p-2 transition capitalize duration-150 rounded-full shadow shadow-black/60 bg-secondary hover:bg-secondary/80"
            onClick={checkUrlDemo}
          >
            Live demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioBox;
