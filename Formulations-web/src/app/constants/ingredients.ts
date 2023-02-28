export const FORMULATIONS = [
    {
       id: 1,
       formulationId: 1,
       fase: "A",
       ingredients: [
        { 
            name: "Agua", 
            INCI: "water", 
            functionality: "Diluente", 
            manufacturer: { 
                name: ""
            }, 
            percent: "58,60%",
            description: "",
            isLink: false

        },
        { 
            name: "EDTA 2Na", 
            INCI: "Disodium EDTA", 
            functionality: "Quelante", 
            manufacturer: {
                name: ""
            }, 
            percent: "0,05%",
            description: "",
            isLink: false
        },
        { 
            name: "Zemea", 
            INCI: "Propanediol", 
            functionality: "Humectante", 
            manufacturer: {
                name: "DuPont"
            }, 
            percent: "5,00%",
            description: "",
            isLink: false
        },
        { 
            name: "Carbopol®Ultrez 30", 
            INCI: "Carbomer", 
            functionality: "Modificador Reológico", 
            manufacturer: {
                name: "Lubrizol"
            }, 
            percent: "0,45%",
            descrption: "Modificador reológico superior, fácil de usar permite un rendimiento constante a niveles de pH bajos, experiencia sensorial agradable, excelente reología y suspensión",
            isLink: true
        },
       ]
    },
    {
        id: 2,
        formulationId: 1,
        fase: "B",
        ingredients: [
         { 
             name: "Sensocream", 
             INCI: "Potassium Lauroyl Wheat Amino Acids (and) Sunflower Seed Oil Glycerides (and) Capryloyl Glycine", 
             functionality: "Emulsificante", 
             manufacturer: { 
                 name: "Sinerga"
             }, 
             percent: "7,00%",
             description: "Emulsionante O / W versátil capaz de formar nanoemulsión con efecto Tyndall. HLB teórico: 7 ± 1. Origen Vegetal, lipoaminoácidos y glicéridos de aceite de girasol.",
             isLink: true,
         },
         { 
             name: "Permulgin D", 
             INCI: "Cetearyl Alcohol (and) Ceteareth-20", 
             functionality: "Co-Emulsificante", 
             manufacturer: {
                 name: "Koster Keunen"
             }, 
             percent: "4,00%",
             description: "Emulsionante no iónico que ha sido desarrollado para sistemas difíciles, altamente estable, mejora la consistencia y la estabilidad a las emulsiones, incluso en niveles de uso bajos.",
             isLink: true,
         },
         { 
             name: "Schercemol™ 1818 Ester", 
             INCI: "Isostearyl Isostearate", 
             functionality: "Emoliente", 
             manufacturer: {
                 name: "Lubrizol"
             }, 
             percent: "5,00%",
             description: "Éster de cadena larga no grasoso, de origen natural que aporta una  gran emoliencia  y una lujosa suavidad en la piel. Imparte deslizamiento y brillo excelentes a las formulaciones.",
             isLink: true,
         },
         { 
             name: "Schercemol™ LL", 
             INCI: "Lauryl Lactate", 
             functionality: "Emoliente", 
             manufacturer: {
                 name: "Lubrizol"
             }, 
             percent: "5,00%",
             description: "Éster emoliente liviano a base de alfa-hidroxiácido, produce una emoliencia liviana y suave para numerosas formulaciones de cosméticos.",
             isLink: true,
         },
         { 
            name: "Protachem IPM", 
            INCI: "Isopropyl Myristate", 
            functionality: "Emoliente", 
            manufacturer: {
                name: "Protameen Chemicals"
            }, 
            percent: "3,00%",
            description: "Actúa como emoliente, lubricante y humectante. Reduce la sensación grasosa de los aceites naturales y el aceite mineral.",
            isLink: true,

        },
        ]
    },
    {
        id: 3,
        formulationId: 1,
        fase: "C",
        ingredients: [
         { 
            name: "AMP ULTRA PC 2000", 
            INCI: "Aminomethyl Propanol", 
            functionality: "Neutralizante", 
            manufacturer: { 
                name: "Angus"
            }, 
            percent: "Q.S.P.",
            description: "",
            isLink: false,
         },
        ]
    },
    {
        id: 4,
        formulationId: 1,
        fase: "D",
        ingredients: [
         { 
            name: "Eyedren", 
            INCI: "Ethyl Ximenynate (and) Potassium Lauroyl Wheat Amino Acids (and) Palm Glycerides (and) Capryloyl Glycine", 
            functionality: "Activo reductor de ojeras y arrugas", 
            manufacturer: { 
                name: "Sinerga"
            }, 
            percent: "3,00%",
            description: "Principio activo de origen vegetal capaz de favorecer la microcirculación y el drenaje cutáneo. Ideal para la prevención y reducción de bolsas y ojeras en el contorno de los ojos.",
            isLink: true,
         },
        ]
    },
    {
        id: 5,
        formulationId: 1,
        fase: "E",
        ingredients: [
         { 
             name: "Phytocaf™", 
             INCI: "Ilex Paraguariensis leaf Extract (and) Camellia sinensis Leaf Extract (and) Paullinia Cupana (Guarana) Seed Extract.", 
             functionality: "Activo aumentador de circulacion", 
             manufacturer: { 
                 name: "Novachem"
             }, 
             percent: "3,00%",
             description: "Activo concentrado de Cafeína de origen vegetal.  Aumenta la microcirculación de la bolsa de los ojos, posee gran afinidad con las células de la epidermis, lo que asegura una excelente difusión dérmica. Energizante capilar y corporal.",
            isLink: true,
         },
        ]
    },
    {
        id: 6,
        formulationId: 1,
        fase: "F",
        ingredients: [
         { 
             name: "Liposomal Retinol", 
             INCI: "Consultar TDS.", 
             functionality: "Activo antiage", 
             manufacturer: { 
                 name: "Lipomize"
             }, 
             percent: "5,00%",
             description: "Liposomas hechos de fosfolípidos de soja y vitamina A. El retinol (vitamina A) es restaurador de la piel, reafirmante y un potente antioxidante, lo que le permite corregir signos visibles del envejecimiento.",
            isLink: true,
         },
        ]
    },
    {
        id: 7,
        formulationId: 1,
        fase: "G",
        ingredients: [
         { 
             name: "Sensiva ™ SC 10 multifuncional", 
             INCI: "Ethylhexylglycerin (and) Caprylyl Glycol", 
             functionality: "Preservante", 
             manufacturer: { 
                 name: "Ashland"
             }, 
             percent: "0,70%",
             description: "Aditivo multifuncional líquido, humectante suave y emoliente. Esta mezcla mejora la sensación en la piel en formulaciones cosméticas. Además, actúa como un refuerzo para los antimicrobianos.",
            isLink: true,
         },
        ]
    },
    {
        id: 8,
        formulationId: 1,
        fase: "H",
        ingredients: [
         { 
             name: "Fragancia Jennifer Lawrence", 
             INCI: "Parfum", 
             functionality: "Fragancia", 
             manufacturer: { 
                 name: "Firmenich"
             }, 
             percent: "0,20%",
             description: "Fragancia fina, femenina, divertida y fresca, con notas de bergamota, hierba, té, acusoso, lirio, pimienta; descriptores olfativos: Agrios, té, floral y almizclado.",
            isLink: true,
            
         },
        ]
    },
    {
        id: 1,
        formulationId: 2,
        fase: "A",
        ingredients: [
         { 
             name: "Cosmethicone SF 947B", 
             INCI: "Cyclotetrasiloxane (and) Cyclopentasiloxane", 
             functionality: "Emoliente", 
             manufacturer: { 
                 name: "Biomax"
             }, 
             percent: "50,00%",
             description: "Silicona Especial, baja toxicidad y fácil de formular, características sensoriales y de volatilidad únicas para formulaciones de cuidado personal.",
            isLink: true,
            
         },
        ]
    },
    {
        id: 1,
        formulationId: 2,
        fase: "A",
        ingredients: [
         { 
             name: "Cosmethicone SF 947B", 
             INCI: "Cyclotetrasiloxane (and) Cyclopentasiloxane", 
             functionality: "Emoliente", 
             manufacturer: { 
                 name: "Biomax"
             }, 
             percent: "50,00%",
             description: "Silicona Especial, baja toxicidad y fácil de formular, características sensoriales y de volatilidad únicas para formulaciones de cuidado personal.",
            isLink: true,
            
         },
         { 
            name: "Cosmethicone SF 916", 
            INCI: "Cyclopentasiloxane (and) Dimethicone", 
            functionality: "Emoliente", 
            manufacturer: { 
                name: "Biomax"
            }, 
            percent: "43,65%",
            description: "Elastómero de silicona reticulado transparente a ligeramente translúcido, proporciona un excelente tacto y forma una película suave.",
            isLink: true,
            
         },
        ]
    },
    {
        id: 2,
        formulationId: 2,
        fase: "B",
        ingredients: [
        { 
            name: "AlgaPūr™ HSHO", 
            INCI: "Triolein", 
            functionality: "Activo reparador capilar", 
            manufacturer: { 
                name: "Lubrizol"
            }, 
            percent: "5,50%",
            description: "Aceite bioderivado líquido estable, creado por el poder transformador de las microalgas, contiene más del 90% de Omega-9 (ácido oleico) que ayuda a proteger y fortalecer la fibra capilar, controla el encrespamiento, dá brillo, hidrata y mantiene un cuero cabelludo sano. Perfil sensorial agradable, sin pegajosidad, hidratación superior al de otros aceites de la industria cosmética.",
            isLink: true,
            
         },
        ]
    },
    {
        id: 3,
        formulationId: 2,
        fase: "C",
        ingredients: [
        { 
            name: "Fragancia", 
            INCI: "Rose Oil", 
            functionality: "Fragancia", 
            manufacturer: { 
                name: "Firmenich"
            }, 
            percent: "0,85%",
            description: "Fragancia fina, con notas de sandía, limón, frambuesa, occeánica, floral acuosa que evoca alegría, recuedos de infancia, es almizclada y frutal-ácida.",
            isLink: true,
            
         },
        ]
    },
    {
        id: 1,
        formulationId: 3,
        fase: "A",
        ingredients: [
        { 
            name: "Agua", 
            INCI: "Water", 
            functionality: "Diluente", 
            manufacturer: { 
                name: "-"
            }, 
            percent: "32,92%",
            description: "",
            isLink: false,
            
         },
         { 
            name: "EDTA 2Na", 
            INCI: "Disodium EDTA", 
            functionality: "Quelante", 
            manufacturer: { 
                name: "-"
            }, 
            percent: "0,05%",
            description: "",
            isLink: false,
            
         },
         { 
            name: "Zemea", 
            INCI: "Propanediol", 
            functionality: "Humectante", 
            manufacturer: { 
                name: "DuPont"
            }, 
            percent: "5,00%",
            description: "",
            isLink: false,
         },
         { 
            name: "Kelco-Care™ Diutan gum", 
            INCI: "Sphingomonas ferment  extract", 
            functionality: "Modificador Reologico", 
            manufacturer: { 
                name: "Lubrizol"
            }, 
            percent: "0,35%",
            description: "Modificador reológico de alta eficiencia que brinda el mayor nivel de estabilidad de formulación que puede ofrecer una biogoma,  estabilizante de origen natural. Eficiente, fácil de dispersar y permite procesos en frío.",
            isLink: true,
         },
        ]
    },
    {
        id: 2,
        formulationId: 3,
        fase: "B",
        ingredients: [
        { 
            name: "Protachem GMS-450", 
            INCI: "Glyceryl Stearate", 
            functionality: "Emulsificante", 
            manufacturer: { 
                name: "Protameen chemicals"
            }, 
            percent: "2,50%",
            description: "Actúa como emoliente, lubricante, solvente, emulsionante y estabilizador. Posee propiedades espesantes, opacificantes y tensioactivas. Ofrece una sensación de piel seca y sedosa y un efecto graso reducido.",
            isLink: true,
         },
         { 
            name: "Permulgin D", 
            INCI: "Cetearyl Alcohol, Ceteareth-20", 
            functionality: "Emulsificante", 
            manufacturer: { 
                name: "Koster Keunen"
            }, 
            percent: "3,00%",
            description: "Emulsionante no iónico desarrollado para sistemas difíciles, imparte una estabilidad sobresaliente a un producto terminado, altamente estable en un amplio rango de pH, mejora la consistencia y la estabilidad de las emulsiones incluso a niveles de uso bajos. pede producir una fórmula cremosa de color blanco brillante y poco olor.",
            isLink: true,
            
         },
         { 
            name: "Mango Butter", 
            INCI: "Mangifera indica (Mango) Seed Butter", 
            functionality: "Emoliente", 
            manufacturer: { 
                name: "Praan Naturals"
            }, 
            percent: "2,00%",
            description: "La mantequilla de mango ayuda a reducir la apariencia de arrugas , ideal para humectar, calmar y proteger la piel, los labios y el cabello reseco o dañado.",
            isLink: false,
         },
         { 
            name: "Shea Butter", 
            INCI: "Butyrospermum Parkii (Shea Butter) Fruit", 
            functionality: "Emoliente", 
            manufacturer: { 
                name: "Terry Lab."
            }, 
            percent: "2,00%",
            description: "Ingrediente natural con propiedades hidratantes y nutritivas, conserva la flexibilidad y elasticidad de la piel, es anti edad, antioxidante y calmante, ideal para formulaciones suaves y pieles sensibles.",
            isLink: true,
         },
         { 
            name: "Schercemol™ NGDO Ester", 
            INCI: "Neopentyl Glycol Diethylhexanoate", 
            functionality: "Emoliente", 
            manufacturer: { 
                name: "Lubrizol"
            }, 
            percent: "5,00%",
            description: "Éster emoliente ligero para deslizamiento, absorbencia y esparcibilidad.  Hidratación ligera en cremas, lociones y desmaquilladores, after shave.  Proporciona excelente solvencia buen deslizamiento, alternativa refrescante.",
            isLink: true,
         },
        ]
    },
    {
        id: 3,
        formulationId: 3,
        fase: "C",
        ingredients: [
        { 
            name: "White Kaolin Clay", 
            INCI: "Kaolin (White Clay)", 
            functionality: "Texturizante", 
            manufacturer: { 
                name: "Praan Naturals"
            }, 
            percent: "20,00%",
            description: "Es la más suave de todas las arcillas, eficaz para el control de la grasa, mejora la elasticidad y reafirmación de la piel, estimula la circulación de la piel, mientras exfolia y limpia suavemente, ideal para pieles sensibles.",
            isLink: true,
         },
        ]
    },
    {
        id: 3,
        formulationId: 3,
        fase: "D",
        ingredients: [
        { 
            name: "Agua", 
            INCI: "Water", 
            functionality: "Diluente", 
            manufacturer: { 
                name: "-"
            }, 
            percent: "3,40%",
            description: "",
            isLink: false,
         },
        ]
    },
    {
        id: 4,
        formulationId: 3,
        fase: "D",
        ingredients: [
        { 
            name: "Agua", 
            INCI: "Water", 
            functionality: "Diluente", 
            manufacturer: { 
                name: "-"
            }, 
            percent: "3,40%",
            description: "",
            isLink: false,
         },
         { 
            name: "Naturolive HT20S", 
            INCI: "Olea Europaea Fruit extract", 
            functionality: "Activo antioxidante", 
            manufacturer: { 
                name: "Deretil"
            }, 
            percent: "3,00%",
            description: "Extracto natural de hoja de olivo estandarizado en hydroxitirosol, considerado como uno de los antioxidantes naturales más potentes, numerosos beneficios para la piel: Antioxidante, anti-aging, agente despigmentante e iluminador de la piel, booster de FPS.",
            isLink: false,
         },
        ]
    },
    {
        id: 5,
        formulationId: 3,
        fase: "E",
        ingredients: [
        { 
            name: "Cell ZinoCap™", 
            INCI: "Ver TDS", 
            functionality: "Pigmento", 
            manufacturer: { 
                name: "Tagra"
            }, 
            percent: "0,50%",
            description: " Mejora los niveles de protección, la fotoestabilidad y la durabilidad - Mejorar el perfil de seguridad: sin riesgo de penetración en la piel, minimiza el riesgo de irritación y fotoalergia - Elimina la necesidad de solubilizantes de filtro UV, lo que permite una apariencia más ligera, suave y y formulaciones no grasas",
            isLink: true,
         },
         { 
            name: "Camaleon Green", 
            INCI: "Ver TDS", 
            functionality: "Pigmento", 
            manufacturer: { 
                name: "Tagra"
            }, 
            percent: "4,00%",
            description: "Pigmentos encapsulados duraderos durante la formulación y el escalado, pero se rompen fácilmente bajo la yema de los dedos al aplicarlas para conseguir una transformación del color espectacular y uniforme, mantiene los pigmentos ocultos dentro de las formulaciones, ayudando a mantener un aspecto blanco brillante y limpio en las emulsiones",
            isLink: true,
         },
         { 
            name: "Camaleon Yellow", 
            INCI: "Ver TDS", 
            functionality: "Pigmento", 
            manufacturer: { 
                name: "Tagra"
            }, 
            percent: "2,00%",
            description: "Pigmentos encapsulados duraderos durante la formulación y el escalado, pero se rompen fácilmente bajo la yema de los dedos al aplicarlas para conseguir una transformación del color espectacular y uniforme, mantiene los pigmentos ocultos dentro de las formulaciones, ayudando a mantener un aspecto blanco brillante y limpio en las emulsiones",
            isLink: true,
         },
         { 
            name: "Camaleon Gold", 
            INCI: "Ver TDS", 
            functionality: "Pigmento", 
            manufacturer: { 
                name: "Tagra"
            }, 
            percent: "4,88%",
            description: "Pigmentos encapsulados duraderos durante la formulación y el escalado, pero se rompen fácilmente bajo la yema de los dedos al aplicarlas para conseguir una transformación del color espectacular y uniforme, mantiene los pigmentos ocultos dentro de las formulaciones, ayudando a mantener un aspecto blanco brillante y limpio en las emulsiones",
            isLink: false,
         },
         { 
            name: "Camaleon White", 
            INCI: "Ver TDS", 
            functionality: "Pigmento", 
            manufacturer: { 
                name: "Tagra"
            }, 
            percent: "0,50%",
            description: "Pigmentos encapsulados duraderos durante la formulación y el escalado, pero se rompen fácilmente bajo la yema de los dedos al aplicarlas para conseguir una transformación del color espectacular y uniforme, mantiene los pigmentos ocultos dentro de las formulaciones, ayudando a mantener un aspecto blanco brillante y limpio en las emulsiones",
            isLink: false,
         },
         
        ]
    },
    {
        id: 6,
        formulationId: 3,
        fase: "F",
        ingredients: [
            { 
                name: "MatCha Plus™", 
                INCI: "Camellia Sinensis Leaf Extract.", 
                functionality: "Activo antioxidante", 
                manufacturer: { 
                    name: "Novachem"
                }, 
                percent: "3,00%",
                description: "Activo antioxidante natural con propiedades antiage, protege del estrés oxidativo, hidratante, mejora la retención de agua en el estrato corneo reduciendo la rigorosidad, aspereza de la piel y aumenta la tersura, Beauty food. Efecto antioxidante, detox, rico en nutrientes, hidratante y descongestivo.",
                isLink: true,
            },
            { 
                name: "Oligovita™", 
                INCI: "Water (and)  Propylene glycol (and) Alcohol (and)  Sodium Pca (and) Arginine (and) Lepidium meyenii (Maca) Root extract and Zibgiber offi cinale (Ginger) Root extract.", 
                functionality: "Activo rico en oligoelementos naturales", 
                manufacturer: { 
                    name: "Novachem"
                }, 
                percent: "2,00%",
                description: "Modificador sensorial vegetal. Aporta minerales de origen vegetal.  Promueve la cicatrización, hidratación y evita la formación de radicales libres, revitalizando y rejuveneciendo pieles envejecidas y 'cansadas'",
                isLink: true,
            },
            { 
                name: "Novaplant ™ palta", 
                INCI: "Water (and) Glycerin (and) Persea Gratissima Fruit Extract.", 
                functionality: "Hidratante", 
                manufacturer: { 
                    name: "Novachem"
                }, 
                percent: "3,00%",
                description: "Línea de extractos botánicos de alta pureza, solubles en agua, obtenidos de especies seleccionadas y certificados mediante técnicas especializadas de extracción y concentración. Las extracciones se realizan en glicerina vegetal.",
                isLink: true,
            },
        ]
    },
    {
        id: 7,
        formulationId: 3,
        fase: "G",
        ingredients: [
            { 
                name: "Sensiva™ SC-10 Multifunctional", 
                INCI: "Ethylhexylglycerin (and) Caprylyl Glycol", 
                functionality: "Preservante", 
                manufacturer: { 
                    name: "Ashland"
                }, 
                percent: "0,70%",
                description: "Aditivo multifuncional líquido para productos de cuidado personal. Como humectante suave y emoliente para la piel, esta mezcla mejora la sensación en la piel de las formulaciones cosméticas. Además, actúa como un refuerzo para los antimicrobianos.",
                isLink: true,
            }
        ]
    },
    {
        id: 8,
        formulationId: 3,
        fase: "H",
        ingredients: [
            { 
                name: "Fragancia", 
                INCI: "Té Verde", 
                functionality: "Fragancia", 
                manufacturer: { 
                    name: "Firmenich"
                }, 
                percent: "0,20%",
                description: "Fragancia personal care, es citrica, floral, hierbas arómaticas, frutal, té verde, es fresca y dinámica.",
                isLink: true,
            }
        ]
    },

]