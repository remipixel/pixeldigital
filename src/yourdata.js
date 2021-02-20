// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import profilePic from "./images/me.jpg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
import facebookIcon from "./images/facebook.svg"

//Photos clients
import boyardvoile from "./images/boyardvoile.jpg"
import lechoppe from "./images/lechoppe.jpg"
import boutique45 from "./images/boutique45.jpg"
import golfvaldecher from "./images/golfvaldecher.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Rémy",
  headerTagline: [
    //Line 1 For Header
    "Développement web,",
    //Line 2 For Header
    "identité visuelle,",
    //Line 3 For Header
    "UI/UX design",
  ],
  //   Header Paragraph
  headerParagraph:
    "Jeune développeur web, basé sur l'Île d'Oléron. Je crée des sites internet, des applications web, des supports de communication web et papier !",

  //Contact Email
  contactEmail: "contact@pixeldigital.fr",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Boyard-Voile", //Project Title - Add Your Project Title Here
      para:
        "Pour se démarquer et développer son activité après le crise du COVID-19, Boyard-Voile à fait appel à mes services pour la création de son site internet, du community management et différents supports de communication.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        boyardvoile,
      //Project URL - Add Your Project Url Here
      url: "http://boyard-voile.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "L'Echoppe - Restaurant Bar Concerts", //Project Title - Add Your Project Title Here
      para:
        "Suite à un changement de direction dans sa stratégie de communication, L'Echoppe à Boyardville à fait appel à mon savoir faire pour la création de son site ainsi que ses nouveaux supports de communciation.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        lechoppe,
      //Project URL - Add Your Project Url Here
      url: "http://lechoppe-oleron.fr/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Boutique 45", //Project Title - Add Your Project Title Here
      para:
        "Site web de la Boutique 45 à Saint-Pierre-d'Oléron.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        boutique45,
      //Project URL - Add Your Project Url Here
      url: "http://boutique45.fr/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Golf Club du Val de Cher", //Project Title - Add Your Project Title Here
      para:
        "Site internet du Club de Golf du Val de Cher à Nassigny.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        golfvaldecher,
      //Project URL - Add Your Project Url Here
      url: "https://golfclub-valdecher.fr/",
    },

 /*{
    
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "La Grange", //Project Title - Add Your Project Title Here
      para:
        "Site internet du restaurant \"La Grange\" sur le port de Boyardville.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        lagrange,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },




   
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Je m'appelle Rémy Auroy. Je suis développeur web free-lance depuis 2019 sur l'Île d'Oléron et dans les alentours de la Saintonge, en Charente-Maritime.",
  aboutParaTwo:
    "J'ai toujours aimé les technologies, le web, la communication. C'est pour celà que depuis environ l'âge de 14 ans je me forme puis mets en pratique mes connaissances en communication, et en développement de sites web et d'applications mobiles.",
  aboutParaThree:
    "Amateur d'expériences visuelles inédites, je crée l'ensemble de mes projets avec en premier lieu une approche d'expérience utilisateur renforcée. En effet, la première chose que vous souhaitez dans votre site, c'est qu'il soit le plus beau, et qu'on puisse facilement l'utiliser ! Pour cela je n'hésite pas à utiliser les technologies les plus récentes et les plus puissantes dans la création de mes sites !",
  aboutImage:
    profilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "Développement HTML",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS3 / LESS / Frameworks CSS",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Javascript / Frameworks Node.JS",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React et Frameworks React",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "Design graphique / photo / vidéo",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Développement mobile et applications logicielles",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Secteurs d'activité",
  promotionPara: "Je suis là pour vous aiguiller dans vos projets de communciation web et média. Mes secteurs d'opérations sont le développement de votre site internet, la communicaton visuelle et la communication web, le marketing sensoriel et digital. Basé à Dolus-d'Oléron, je bénéficie d'un cadre et d'un emplacement sur-mesure pour vous rendre visite en toute facilité.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Créons ensemble votre réussite",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/remipixel" },
    {
      img: facebookIcon,
      url: "https://www.facebook.com/pixeldigitalfr17/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/pixeldigitaloleron/",
    },
  ],

  // End Contact Section ---------------
}
