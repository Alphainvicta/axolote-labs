import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
            button1: "Contact",
            button2: "SERVICES",
            button3: "",
          },
          mainScreen: {
            sidea: {
              title: "",
              description: "",
              button1: "",
              button2: "",
            },
          },
          characteristics: {
            sidea: {
              title: "",
              text: "",
            },
            sideb: {
              card1: {
                title: "",
                text: "",
              },
              card2: {
                title: "",
                text: "",
              },
            },
          },
          services: {
            sidea: {
              title: "",
              text: "",
            },
            sideb: {
              card1: {
                title: "",
                text: "",
              },
              card2: {
                title: "",
                text: "",
              },
              card3: {
                title: "",
                text: "",
              },
              button: "",
            },
          },
          reviews: {
            sidea: {
              title: "",
              text: "",
            },
            sideb: {
              card1: {
                name: "",
                description: "",
                text: "",
              },
              card2: {
                name: "",
                description: "",
                text: "",
              },
              card3: {
                name: "",
                description: "",
                text: "",
              },
            },
          },
          about: {
            sidea: {
              title: "",
              subtitle1: "",
              text1: "",
              subtitle2: "",
              text2: "",
            },
          },
          contact: {
            sidea: {
              title: "",
              text: "",
            },
            sideb: {
              input1: "",
              input2: "",
              textarea: "",
              button: "",
            },
            submit: {
              success: "",
              failure: "",
            },
          },
          footer: {
            about: "",
          },
        },
      },

      es: {
        translation: {
          nav: {
            button1: "Contacto",
            button2: "SERVICIOS",
            button3: "COTIZA AQUI",
          },
          mainScreen: {
            sidea: {
              title: "SOLUCIONES CON SOFTWARE A TU MEDIDA",
              description:
                "Somos una empresa de Desarrollo de Software orientada a crear soluciones de software para empresas medianas y chicas",
              button1: "COTIZA TU SOLUCIÓN",
              button2: "NUESTROS SERVICIOS",
            },
          },
          characteristics: {
            sidea: {
              title: "CARACTERISTICAS DE NUESTRO SOFTWARE",
              text: "Todo software que nosotros desarrollamos incluye las siguientes caracteristicas",
            },
            sideb: {
              card1: {
                title: "Totalmente Personalizado",
                text: "No usamos plantillas ya hechas, hacemos tu software desde cero con las especificaciones personalizadas que tu nos pidas en la cotización.",
              },
              card2: {
                title: "Diseño Responsivo",
                text: "No hay necesidad de preocuparse por el tamaño de la pantalla. Nuestra interfaz de usuario se adapta a cualquier tamaño de pantalla, desde computadoras de escritorio hasta el celular móvil.",
              },
            },
          },
          services: {
            sidea: {
              title: "NUESTROS SERVICIOS",
              text: "Ofrecemos el siguiente catalogo de soluciones",
            },
            sideb: {
              card1: {
                title: "Soluciones en EXCEL con uso de Macros",
                text: "Cualquier tipo de plantilla de Excel, con uso de macros, formulas y formato personalizado. Ya sea para fines contables, financieros, de recursos humanos, de inventario, de nóminas, de cálculos automatizados, de lo que a tí se te ocurra!",
              },
              card2: {
                title: "Páginas Web y Aplicaciones Móviles",
                text: "Cualquier tipo de Página Web y/o Aplicación Móvil, con diseño responsivo, personalizado y orientado a tus necesidades. Creando tu solución desde cero, sin hacer uso de plantillas genéricas ya predefinidas.",
              },
              card3: {
                title: "Bases de Datos con Interfaz de Usuario",
                text: "Cualquier tipo de Base de Datos incluyendote la interfaz de usuario para manipular y hacer uso de tu Base. Bases de Datos para inventario de articulos, personal, sucursales, ticket de venta de articulos, etc. ",
              },
              button: "COTIZA TU SOLUCIÓN",
            },
          },
          reviews: {
            sidea: {
              title: "Reseñas Reales de Nuestros Clientes",
              text: "Observa el impacto que nuestras soluciones generan en nuestros clientes",
            },
            sideb: {
              card1: {
                name: "Global FHAS Seguridad Privada",
                description: "Director General",
                text: "Excelente producto final, nos gustó mucho la base de datos que nos hicieron de nuestro personal activo y dado de baja y la página web de la empresa, gracias.",
              },
              card2: {
                name: "Diego Arturo López de la Peña",
                description: "Contador",
                text: "Estoy muy feliz con las plantillas de Excel que realizaron, ahora puedo calcular la nómina de mi personal en menos de 5 minutos y la utilidad de mi empresa de forma sencilla, recomendados.",
              },
              card3: {
                name: "Silvia Leticia Gonzalez Venegas",
                description: "Jefa de Laboratorio de Microbiología",
                text: "Me encantó la aplicación, ahora gracias a esta app puedo registrar las horas de entradas y salidas de mis empleados, gracias, muy profesionales.",
              },
            },
          },
          about: {
            sidea: {
              title: "AXOLOTL LABS",
              subtitle1: "Misión",
              text1:
                "Crear el mejor producto de software con la mejor solución posible para facilitar la vida de nuestros clientes",
              subtitle2: "Visión",
              text2:
                "Ser una empresa atractiva como proveedor de tecnologia y soluciones empresariales de la mas alta calidad en el mercado",
            },
          },
          contact: {
            sidea: {
              title: "¡Ponte en contacto!",
              text: "Nuestro equipo esta aqui para ayudar. <br /> Contáctanos para un soporte rápido y amigable.",
            },
            sideb: {
              input1: "Nombre completo",
              input2: "Email",
              textarea: "Mensaje",
              button: "Enviar",
            },
            submit: {
              success: "El correo se envió exitosamente",
              failure: "Hubó un error al enviar el correo",
            },
          },
          footer: {
            about: "© 2023 Axolotl Labs - Landing Page",
          },
        },
      },
    },
  });

export default i18n;
