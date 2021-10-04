repoGit = "https://github.com/fabriziocarella/pokeApi.git"
enlaces = {
    I: "https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_junio21/blob/main/teoria/react/clase39.md",
    II: "https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_junio21/blob/main/teoria/react/clase40.md",
    III: "https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_junio21/blob/main/teoria/react/clase40Ejercicio.md",
    IV_OPT: "https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_junio21/blob/main/teoria/react/clase40Ejercicio2.md"
}

//! En este ejercicio trabajaremos con React funcional y haremos uso de los Hooks useState() y useEffect()
//! En este ejercicio tendréis que jugar con la Pokeapi. Se dividirá en los siguientes pasos:
//************************** I **************************/
//* Crea un input de texto.
//* Crea un botón.
//* Crea un componente Card en el que dibujaremos los datos del personaje obtenido
//* Crea, con useState, dos estados: uno para input ('') y otro para un pokemon ({}).
//* Cada vez que escribamos en el input, su contenido se deberá guardar en el estado del input.
//* Cuando pulsemos el botón que hemos creado antes, se deberá hacer una petición a la PokeApi con el nombre o el número del pokemon correspondiente registrado en el estado del input.
//* Si va bien, la PokeApi devolverá un objeto con el pokemon elegido. El estado del pokemon que hemos creado antes debe actualizarse con el nuevo pokemon.
//* Se debe dibujar en Card los datos e imágen del Pokemon.
//* Al actualizarse la información del componente Card, la búsqueda del input de texto debe borrarse/resetear su valor a ('')

//************************** II **************************/
//! Vamos a cambiar el estado que habíamos creado antes para almacenar un solo pokemon. Vamos a poner en su lugar una lista ([]).
//* Ahora, cada vez que pulsemos el botón para buscar un pokemon, el pokemon encontrado deberá concatenarse a la lista que tenemos almacenada en el estado en lugar de almacenar uno solo.
//* Crea el Componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.
//* NOTA: El ejercicio se debe hacer con React funcional y como mínimo con los Hooks useState() y useEffect().
//* Para practicar, puedes investigar y hacer uso de cualquier otro Hook (tanto propio como de terceros) que tenga sentido para este ejercicio

//************************** III **************************/
//* Para esta fase, en lugar de pulsar un botón para hacer la búsqueda vamos a dejar que las búsquedas se hagan solas en función de lo que escriba el usuario.
//* Eliminamos el botón.
//* Cuando escribamos, la petición deberá realizarse según escribimos.
//* Una vez que consigamos que esas peticiones se hagan con cada pulsación. Cuando obtengamos el pokemon deseado, éste deberá concatenarse a la lista como en la fase anterior.
//* Como anteriormente, utiliza el componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.
//! Debounce:
//* Lógicamente una petición por pulsación es demasiado. Es probable que con ese nivel de peticiones alcancemos el máximo de peticiones permitidos por la Api en poco tiempo. Lo siguiente que haremos será evitar que con cada pulsación se haga una petición. La lógica para hacer esto será que si entre pulsaciones pasa más de un segundo y medio (o el tiempo que queráis) se haga la petición a la Api de lo que haya almacenado en el estado del input en ese momento.
//* Investiga qué es y cómo es la lógica de un Debounce para implementarla y conseguir el paso anterior. Esta función es la que nos permitirá conseguir que solo tras la última pulsación de más de un tiempo determinado se haga la petición.
//* OJO: Cuando consigas implementar la función debounce para no colapsar la api a peticiones implementa lo siguiente: si el input está vacío no se hará ninguna petición.
//* Cuando escribamos un pokemon en el input que ya exista en nuestra lista de pokemons tampoco tenemos que hacer esa petición.
//* NOTA: El ejercicio se debe hacer con React funcional y como mínimo con los Hooks useState() y useEffect()
//* Para practicar, puedes investigar y hacer uso de cualquier otro Hook (tanto propio como de terceros) que tenga sentido para este ejercicio

//************************** IV **************************/





//! Estructura

App
Header(Header)
    Nav(Nav)
Main(Main) {
    // const [selectedPokemon, setSelectedPokemon] = useState('')
    // const [] = useState()
    //! Renderizar una vista con fondos + slider + lo que sea
    Form(Section), // Input para buscar PKM + debounce para buscar el input añadido tras pasar x segundos (si el input está vacío no se hará ninguna petición) (si tras escribir, el pokemon ya está en la lista, no se hace fetch) (ver feed reddit ejemplo)  -> redirect to /PokeList
    PokeList(Section), // Precarga de noticias API + Noticias alta de form
        Card(Article) // Carga de cada noticia
}
Footer(Footer)

//! dependencias
//npm i react-router-dom

