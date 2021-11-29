import { content } from "../../data/content";
import { socials } from "../../data/socials";
import ButtonLink from "./ButtonLink";
import Section from "./Section";

const Connect = () => {
  return (
    <div>
      <h1 className="page-title">Conecta</h1>
      <div className="flex flex-col md:flex-row">
        <Section
          className="w-full md:w-1/3"
          title={"Medios principales"}
          subtitle={"De dónde se origina mi contenido"}
        >
          <div className="flex flex-col">
            {content.map((item, index) => {
              return (
                <ButtonLink
                  key={index}
                  icon={item.icon}
                  link={item.link}
                  text={item.text}
                />
              );
            })}
          </div>
        </Section>
        <Section
          className="w-full md:w-1/3"
          title={"Redes sociales"}
          subtitle={"Hacia donde distribuyo mi contenido"}
        >
          {socials.map((item, index) => {
            return (
              <ButtonLink
                key={index}
                icon={item.icon}
                link={item.link}
                text={item.text}
              />
            );
          })}
        </Section>
        <Section
          className="w-full md:w-1/3"
          title={"Vista previa"}
          subtitle={"Como se ve el contenido"}
        ></Section>
      </div>
    </div>
  );
};

export default Connect;
