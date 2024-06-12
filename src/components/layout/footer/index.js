/**
 * Internal Dependencies.
 */
import { getPathNameFromUrl, sanitize } from "../../../utils/miscellaneous";
import { getIconComponentByName } from "../../../utils/icons-map";

/**
 * External Dependencies.
 */
import { isEmpty, isArray } from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ footer }) => {
  const {
    copyrightText,
    footerMenuItems,
    sidebarOne,
    sidebarTwo,
    socialLinks,
  } = footer || {};
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <footer className="footer bg-blue-500 p-6">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="text-white">
            <img
              className="mr-2"
              src="/LogoThavika.png"
              alt={`logo`}
              width="50"
              height="50"
            />
            Tlhavika é a peça que faltava para completar cada dia da sua vida,
            uma alegria de vida simples e com mais brilho! Fazemos a
            Distribuição, Montagem e Venda de Material Solar e Material
            Hidráulico.
          </div>
          <div>
            <div className="font-bold text-white mb-4">NOSSOS SERVIÇOS</div>
            {/* <div className=" text-white mb-2">
              Venda de material solar e elétrico
            </div>
            <div className=" text-white mb-2">Abertura de Furos de Água</div>
            <div className=" text-white mb-2">
              Instalação de Paineis Solares
            </div>
            <div className=" text-white mb-2">
              Manutenção de Paineis Solares
            </div> */}
          </div>
          <div>
            <div className="font-bold text-white mb-4">CONTACTE-NOS</div>
            <div className=" text-white mb-2">
              Av. de Moçambique km.9.2 Bairro do Zimpeto/Maputo
            </div>
            <div className=" text-white mb-2">
              Telefone: (+258) 86 551 7841 | (+258) 87 119 1481
            </div>
            <div className=" text-white mb-2">
              E-mail: tlhavika.solar@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
          {/*	Footer Menus*/}
          <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
            {!isEmpty(footerMenuItems) && isArray(footerMenuItems) ? (
              <ul>
                {footerMenuItems.map((menuItem) => (
                  <li key={menuItem?.ID}>
                    <Link href={getPathNameFromUrl(menuItem?.url ?? "") || "/"}>
                      <a>{menuItem?.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="mb-8 mt-8 w-full flex flex-wrap">
          {/*Copyright Text*/}
          <div className="w-full md:w-1/2 lg:w-1/4 text-white">
            {copyrightText ? copyrightText : "© Tlhavika"}
          </div>
          <div className="w-full lg:w-3/4 flex justify-end">
            {!isEmpty(socialLinks) && isArray(socialLinks) ? (
              <ul className="flex item-center mb-0">
                {socialLinks.map((socialLink) => (
                  <li
                    key={socialLink?.iconName}
                    className="no-dots-list mb-0 flex items-center"
                  >
                    <a
                      href={socialLink?.iconUrl || "/"}
                      target="_blank"
                      title={socialLink?.iconName}
                      className="ml-2 inline-block"
                    >
                      {getIconComponentByName(socialLink?.iconName)}
                      <span className="sr-only">{socialLink?.iconName}</span>
                    </a>
                  </li>
                ))}
                <li
                  key={"WhatsApp"}
                  className="no-dots-list mb-0 flex items-center"
                >
                  <a
                    href={"https://api.whatsapp.com/send?phone=258871191481"}
                    target="_blank"
                    title={"WhatsApp"}
                    className="ml-2 inline-block"
                  >
                    <img
                      className="mr-2"
                      src="/icons8-whatsapp-51.png"
                      alt={`whatsapp logo`}
                      width="30"
                      height="30"
                    />
                    <span className="sr-only">Whatsapp</span>
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
