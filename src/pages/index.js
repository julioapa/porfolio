import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Successful Web Development"
          subTitle="I'm subject matter expert in modern web application accessible, decoupling, and modular"
        />
        <Features
          title="Projects"
          introduction="Estos son algunos de los proyectos que he desarrollado para diversas empresas.
          creando una solucion a sus necesidades y siendo completamente exitosas,
          acontinuacion podras ver en detalle cada uno de los proyectos."
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <BasicTextModule
          title="About me"
          content="
          Hola, me llamo Julio Márquez.
          
          Soy desarrollador web especializado en solcuion de problemas empresariales.
          atravez de mi conocimiento en diversas tegnologias. busco, encuentro y
          ejecuto las mejores soluciones tomando encuenta eficiencia, costo de mantenimiento,
          visualizacion y otras areas importantes en el desarrollo.
          me gusta el trabajo que desempeño, me reta cada dia a ir aprendiendo y mejorando
          en mi profesion.
          habitualmente hago diferentes tipos de deporte y mi favorito es el futbol."
          link="/about"
          linkText="More About Me"
        />
        {/*
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
        */}
      </Layout>
    </>
  )
}

export default Index
