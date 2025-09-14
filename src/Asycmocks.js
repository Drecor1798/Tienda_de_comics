const mis_productos = [
    {
        id: "1",
        nombre: "Los Vengadores, Miedo encarnado, parte 1",
        precio: 25000,
        img: "/public/imagenes/Los Vengadores, Miedo encarnado, parte 1/2.png",
        idcat: "Marvel",
        stock: 15,
        descripcion: "Cuando una antigua fuerza del miedo es liberada en la Tierra, el mundo se sumerge en el caos y los héroes más poderosos del planeta deben enfrentarse a terrores que van más allá de lo físico. Mientras el dios del miedo, hermano de Odín, regresa para reclamar su poder, los Vengadores luchan no solo contra enemigos invencibles, sino también contra sus propios miedos más profundos. En esta primera parte de la saga, el destino del mundo pende de un hilo y ni siquiera los héroes más fuertes están preparados para lo que viene."
    },
    {
        id: "2",
        nombre: "Superman, Historias varias",
        precio: 20000,
        img: "/public/imagenes/Superman, Historias varias/2.png",
        idcat: "DC",
        stock: 20,
        descripcion: "Historias clasicas de Superman"
    },
    {
        id: "3",
        nombre: "Superman y Batman, Superchica de Kripton",
        precio: 20000,
        img: "/public/imagenes/Superman y Batman, Superchica de Kripton/2.png",
        idcat: "DC",
        stock: 10,
        descripcion: "Cuando una nave kryptoniana se estrella en la Tierra, Superman descubre en su interior a Kara Zor-El, su prima perdida, con poderes tan grandes como los suyos. Mientras él intenta ayudarla a adaptarse a su nuevo hogar, Batman desconfía de sus verdaderas intenciones. La llegada de Kara llama la atención de Darkseid, quien busca convertirla en un arma para Apokolips. Superman y Batman deberán unir fuerzas para protegerla y decidir si el mundo está preparado para una nueva Superchica."
    },
    {
        id: "4",
        nombre: "Superman y Batman, Historias de Sam",
        precio: 20000,
        img: "/public/imagenes/Superman y Batman, Historias de Sam/2.png",
        idcat: "DC",
        stock: 10,
        descripcion: "En esta historia emotiva y cargada de simbolismo, Superman y Batman se enfrentan a una amenaza que no proviene de supervillanos ni invasiones alienígenas, sino de la complejidad humana. A través de los ojos de Sam, un niño con una imaginación desbordante y una conexión única con los héroes, se explora el impacto real que Superman y Batman tienen en las personas comunes. Una narrativa introspectiva que mezcla acción con reflexión, mostrando que, a veces, el verdadero heroísmo está en inspirar esperanza."
    },
    {
        id: "5",
        nombre: "Maldad Eterna, parte 1",
        precio: 10000,
        img: "/public/imagenes/Maldad Eterna, parte 1/2.png",
        idcat: "DC",
        stock: 15,
        descripcion:"Con la Liga de la Justicia desaparecida y el mundo sumido en el caos, el Sindicato del Crimen —versiones malvadas de los héroes más poderosos— toma el control de la Tierra. En este primer capítulo de Maldad Eterna, los villanos dominan el planeta y la esperanza parece perdida. Sin embargo, un grupo inesperado de antihéroes y criminales liderados por Lex Luthor se levanta para enfrentarlos, demostrando que, a veces, el mal puede ser la única fuerza capaz de detener a un mal aún mayor."
    },
    {
        id: "6",
        nombre: "Los vengadores, Ultron Ilimitado",
        precio: 20000,
        img: "/public/imagenes/Los vengadores, Ultron Ilimitado/2.png",
        idcat: "Marvel",
        stock: 10,
        descripcion:"Cuando Ultrón, la implacable inteligencia artificial creada por Hank Pym, regresa con un plan devastador para exterminar a la humanidad, los Vengadores se enfrentan a una de sus amenazas más personales y letales. Con una fuerza imparable y una mente calculadora, Ultrón desata una ola de destrucción sobre Europa, poniendo en jaque a los héroes más poderosos de la Tierra. En esta historia intensa y cargada de emociones, los Vengadores deberán superar conflictos internos y unir fuerzas como nunca antes para detener a un enemigo que conoce todos sus puntos débiles."
    },
    {
        id: "7",
        nombre: "Liga de la Justicia, Maldad eterna",
        precio: 10000,
        img: "/public/imagenes/Liga de la Justicia, Maldad eterna/2.png",
        idcat: "DC",
        stock: 20, 
        descripcion: "En un mundo donde la justicia ha caído y los héroes han sido reemplazados por versiones oscuras y corruptas de sí mismos, la Liga de la Justicia lucha por recuperar la esperanza perdida. Enfrentándose a enemigos que dominan con puño de hierro y un poder malévolo, esta saga muestra la batalla épica entre la luz y la oscuridad, donde solo la verdadera fuerza de la justicia puede romper el ciclo de maldad eterna que amenaza con consumir al planeta."
    },
    {
        id: "8",
        nombre: "Spiderman, Hasta el fin del mundo",
        precio: 15000,
        img: "/public/imagenes/Spiderman, Hasta el fin del mundo/2.png",
        idcat: "Marvel",
        stock: 15,
        descripcion:"Spider-Man se enfrenta a su desafío más personal y desgarrador cuando una amenaza global pone en riesgo no solo Nueva York, sino todo el planeta. Con aliados inesperados y enemigos del pasado reapareciendo, Peter Parker debe superar sus límites para proteger a quienes ama y evitar que el mundo caiga en el caos definitivo. Una historia llena de acción, sacrificio y heroísmo que lleva al Hombre Araña hasta el fin del mundo."

    },
    {
        id: "9",
        nombre: "Liga de la Justicia, El Poder y Gloria",
        precio: 20000,
        img: "/public/imagenes/Liga de la Justicia, El Poder y Gloria/2.png",
        idcat: "DC",
        stock: 10,
        descripcion: "La Liga de la Justicia enfrenta su mayor desafío cuando una antigua amenaza resurge, poniendo en jaque no solo sus habilidades sino también sus ideales. En esta épica saga, el equilibrio entre el poder y la gloria se pone a prueba mientras los héroes luchan para proteger la Tierra de fuerzas que buscan dominarla. Entre batallas colosales y sacrificios personales, descubrirán que el verdadero poder reside en la unidad y el coraje."
    },
    {
        id: "10",
        nombre: "Civil War, parte 3",
        precio: 15000,
        img: "/public/imagenes/Civil War, parte 3/2.png",
        idcat: "Marvel",
        stock: 10,
        descripcion: "La tensión entre héroes alcanza su punto máximo en esta tercera entrega de la saga Civil War, donde alianzas se rompen y viejas amistades se ponen a prueba. Con el mundo dividido entre quienes apoyan el control gubernamental y quienes defienden la libertad individual, los Vengadores deben enfrentarse entre sí en una batalla que podría cambiar para siempre el destino de los superhéroes y la humanidad. Acción, drama y consecuencias irreversibles marcan esta intensa parte de la historia."
    },
    {
        id: "11",
        nombre: "All Star Superman",
        precio: 50000,
        img: "/public/imagenes/All Star Superman/2.png",
        idcat: "DC",
        stock: 5,
        descripcion:"En esta aclamada historia, Superman enfrenta su propia mortalidad tras una misión que lo expone a niveles letales de radiación solar. Consciente de que su tiempo se acaba, el Hombre de Acero se embarca en una serie de aventuras que celebran su legado, enfrentando desafíos épicos y revelando nuevas facetas de su humanidad. All Star Superman es un homenaje profundo y emotivo al ícono más grande del universo DC, combinando acción, drama y reflexión sobre el verdadero significado del heroísmo."
    }
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mis_productos)
        })
    },100)
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = mis_productos.find(item => item.id === id)
            resolve(producto)
        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(Resolve => {
        setTimeout(() =>{
            const productosCategoria = mis_productos.filter(item => item.idcat === idCategoria)
            Resolve(productosCategoria)
        },100)
    })
}
