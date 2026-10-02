import { Hero } from "@/components/landing/hero";
import { Doswiadczenie } from "@/components/landing/doswiadczenie";
import { JakToDziala } from "@/components/landing/jak-to-dziala";
import { Historia } from "@/components/landing/historia";
import { Metodologia } from "@/components/landing/metodologia";
import { DlaSzkol } from "@/components/landing/dla-szkol";
import { InstytucjeZajawka } from "@/components/landing/instytucje-zajawka";
import { ONas } from "@/components/landing/o-nas";
import { SekcjaFaq } from "@/components/landing/faq";
import { Kontakt } from "@/components/landing/kontakt";

export default function Strona() {
  return (
    <>
      <Hero />
      <Doswiadczenie />
      <JakToDziala />
      <Historia />
      <Metodologia />
      <DlaSzkol />
      <InstytucjeZajawka />
      <ONas />
      <SekcjaFaq />
      <Kontakt />
    </>
  );
}
