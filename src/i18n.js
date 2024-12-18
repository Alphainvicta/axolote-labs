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
    debug: false,
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
            button3: "QUOTE HERE",
          },
          mainScreen: {
            sidea: {
              title: "SOFTWARE SOLUTIONS FULLY CUSTOMIZED",
              description:
                "We are aimed at creating software solutions for you",
              button1: "QUOTE YOUR SOLUTION",
              button2: "OUR SERVICES",
            },
          },
          characteristics: {
            sidea: {
              title: "FEATURES IN OUR SOFTWARE",
              text: "All software we develop includes the following features",
            },
            sideb: {
              card1: {
                title: "Fully Customized",
                text: "No templates, we will develop your idea from scratch with the specifications that you ask",
              },
              card2: {
                title: "Responsive Design",
                text: "Don't worry about the screen size. Our UI will adapt to your needs, from desktop computers to mobile phones",
              },
            },
          },
          services: {
            sidea: {
              title: "OUR SERVICES",
              text: "We offer the following solutions",
            },
            sideb: {
              card1: {
                title: "Web and Mobile Apps",
                text: "Have your own page to advertise your business, sell products with an online store or your menu/catalog quick and easy with a QR code",
              },
              card2: {
                title: "Interactive Software",
                text: "Virtual tours, whether with a computer and phone or full immersion with VR headsets, games for exhibitions or events, virtual reality or augmented reality software",
              },
              card3: {
                title: "Databases with User Interface",
                text: "Databases to keep your business organized, whether it's to manage inventory, staff, record appointments, meetings, schedules, departures or arrivals. Keep control and record of everything that happens in your business!",
              },
              card4: {
                title: "EXCEL with Macros",
                text: "Any type of Excel template, with the use of macros, formulas and custom formatting. Whether for accounting, financial, human resources, inventory, payroll, automated calculations, whatever you can think of!",
              },
              button: "QUOTE HERE",
            },
          },
          reviews: {
            sidea: {
              title: "Reviews from Our Clients",
              text: "See the impact that our solutions generate",
            },
            sideb: {
              card1: {
                name: "Global FHAS Private Security",
                description: "Managing Director",
                text: "Excellent final product, we really liked the database they made of our active and retired staff and the company website, thank you.",
              },
              card2: {
                name: "Arturo Lopez",
                description: "Accountant",
                text: "I am very happy with the Excel templates they created, now I can calculate my staff's payroll in less than 5 minutes and the utility of my company in a simple way, recommended.",
              },
              card3: {
                name: "Silvia Venegas",
                description: "Head of Microbiology Laboratory",
                text: "I loved it, now thanks to this app I can record the arrival and departure times of my employees, thank you, very professional.",
              },
            },
          },
          about: {
            sidea: {
              title: "AXOLOTL LABS",
              subtitle1: "Mision",
              text1:
                "Create the best software product with the best possible solution to make our customers' lives easier",
              subtitle2: "Vision",
              text2:
                "To be a provider of technology and business solutions of the highest quality on the market",
            },
          },
          contact: {
            sidea: {
              title: "Get in touch!",
              text: "Our team is here to help. <br/> Contact us for fast and friendly support.",
            },
            sideb: {
              input1: "Name",
              input2: "Email",
              textarea: "Message",
              button: "Send",
            },
            submit: {
              success: "The email was sent successfully",
              failure: "There was an error sending the email",
              loading: "Sending email",
            },
          },
          footer: {
            about: "© 2024 Axolotl Labs - Landing Page",
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
                "Somos una empresa de Desarrollo de Software orientada a crear soluciones de software para empresas",
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
                text: "No usamos plantillas ya hechas, hacemos tu software desde cero con las especificaciones personalizadas que tu nos pidas en la cotización",
              },
              card2: {
                title: "Diseño Responsivo",
                text: "No hay necesidad de preocuparse por el tamaño de la pantalla. Nuestra interfaz de usuario se adapta a cualquier espacio, desde computadoras de escritorio hasta el celular móvil",
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
                title: "Páginas Web y Aplicaciones Móviles",
                text: "Ten tu propia página para anunciar tu negocio, vender productos con una tienda en línea o tu menú/catalogo fácil y accesible con un código QR",
              },
              card2: {
                title: "Software Interactivo",
                text: "Recorridos virtuales ya sea con computadora y teléfono o una inmersión completa con cascos de VR, juegos para exposiciones o eventos, softwares de realidad virtual o realidad aumentada",
              },
              card3: {
                title: "Bases de Datos",
                text: "Bases de Datos para mantener un orden dentro de tu negocio. ya sea para manejar inventario, personal, registrar citas, reuniones, horarios, salidas o entradas. ¡Ten el control y registro de todo lo que pasa en tu negocio!",
              },
              card4: {
                title: "Soluciones en EXCEL",
                text: "Cualquier tipo de plantilla de Excel, con uso de macros, formulas y formato personalizado. Ya sea para fines contables, financieros, de recursos humanos, de inventario, de nóminas, de cálculos automatizados, de lo que a tí se te ocurra!",
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
              loading: "Enviando correo",
            },
          },
          footer: {
            about: "© 2024 Axolotl Labs - Landing Page",
          },
        },
      },
    },
  });

export default i18n;
