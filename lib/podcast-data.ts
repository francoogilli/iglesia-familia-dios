export interface Episode {
  id: number
  number: number
  title: string
  date: string
  description: string
  showNotes: string
  duration: number // in seconds
  bibleVerse?: string
}

export const podcastInfo = {
  title: "Iglesia Familia de Dios",
  tagline: "Devocionales diarios para tu caminar con Dios",
  description: "Reflexiones diarias para fortalecer tu fe y acercarte al corazon de Dios.",
  about:
    "Iglesia Familia de Dios es el ministerio de devocionales de nuestra iglesia. Cada dia, el Pastor Miguel y el equipo pastoral comparten una reflexion biblica breve para comenzar tu jornada con proposito. Desde ensenanzas sobre los Salmos hasta estudios del Nuevo Testamento, cada devocional incluye lectura biblica, reflexion y oracion. Unete a miles de hermanos que ya hacen de Iglesia Familia de Dios parte de su tiempo a solas con Dios.",
}

export const episodes: Episode[] = [
  // --- 2025 ---
  {
    id: 30,
    number: 30,
    title: "La paz que sobrepasa el entendimiento",
    date: "February 18, 2025",
    description:
      "Filipenses 4:7 nos recuerda que la paz de Dios guarda nuestros corazones y pensamientos. Hoy reflexionamos sobre como acceder a esa paz en medio de la ansiedad.",
    showNotes:
      "Lectura: Filipenses 4:4-9. En este devocional, el Pastor Miguel nos guia a traves de las instrucciones de Pablo para alcanzar la paz verdadera. No es la ausencia de problemas, sino la presencia de Dios en medio de ellos. Oracion incluida al final. Temas: ansiedad, confianza, oracion, gratitud.",
    duration: 480,
    bibleVerse: "Filipenses 4:7",
  },
  {
    id: 29,
    number: 29,
    title: "Renovando las fuerzas cada manana",
    date: "February 17, 2025",
    description:
      "Lamentaciones 3:22-23 declara que las misericordias de Dios son nuevas cada manana. Un recordatorio para quienes enfrentan dias dificiles.",
    showNotes:
      "Lectura: Lamentaciones 3:19-26. Jeremias escribio estas palabras en uno de los momentos mas oscuros de Israel. Sin embargo, encontro esperanza al recordar la fidelidad de Dios. Hoy aplicamos esta verdad a nuestras luchas diarias. Temas: esperanza, fidelidad de Dios, perseverancia, manana nueva.",
    duration: 420,
    bibleVerse: "Lamentaciones 3:22-23",
  },
  {
    id: 28,
    number: 28,
    title: "El Buen Pastor conoce a sus ovejas",
    date: "February 14, 2025",
    description:
      "Jesus dijo: 'Yo soy el buen pastor y conozco mis ovejas.' En San Juan 10, descubrimos la intimidad que Dios desea tener con cada uno de nosotros.",
    showNotes:
      "Lectura: Juan 10:1-18. El Pastor Carlos nos lleva a explorar la metafora del pastor y las ovejas en su contexto cultural del primer siglo. Las ovejas reconocen la voz del pastor porque pasan tiempo con el. Asi es nuestra relacion con Cristo. Temas: relacion personal, voz de Dios, seguridad, amor del Padre.",
    duration: 540,
    bibleVerse: "Juan 10:14",
  },
  {
    id: 27,
    number: 27,
    title: "Fe en tiempos de incertidumbre",
    date: "February 10, 2025",
    description:
      "Hebreos 11:1 define la fe como la certeza de lo que se espera. Cuando el camino no es claro, la fe nos sostiene.",
    showNotes:
      "Lectura: Hebreos 11:1-6. Recorremos los ejemplos de fe del capitulo 11 de Hebreos: Abel, Enoc, Noe, Abraham. Cada uno actuo sin ver el resultado completo. Hoy somos llamados a hacer lo mismo. Reflexion practica para aplicar la fe en decisiones cotidianas. Temas: fe, confianza, obediencia, caminar con Dios.",
    duration: 510,
    bibleVerse: "Hebreos 11:1",
  },
  {
    id: 26,
    number: 26,
    title: "El poder de la oracion persistente",
    date: "February 7, 2025",
    description:
      "Lucas 18 nos ensenaa traves de la parabola de la viuda y el juez injusto que debemos orar siempre y no desmayar.",
    showNotes:
      "Lectura: Lucas 18:1-8. Jesus conto esta parabola para que sus discipulos no se desanimaran al orar. Si un juez injusto responde a la persistencia, cuanto mas nuestro Padre celestial. Incluye guia para desarrollar una vida de oracion constante. Temas: oracion, persistencia, fe, respuesta de Dios.",
    duration: 460,
    bibleVerse: "Lucas 18:1",
  },
  {
    id: 25,
    number: 25,
    title: "Gracia suficiente para hoy",
    date: "February 3, 2025",
    description:
      "Pablo aprendio que el poder de Dios se perfecciona en la debilidad. 2 Corintios 12:9 nos invita a descansar en Su gracia.",
    showNotes:
      "Lectura: 2 Corintios 12:7-10. La hermana Patricia comparte como la gracia de Dios se manifiesta precisamente cuando nos sentimos mas debiles. Pablo tenia un aguijon en la carne, y Dios no lo quito, pero le dio gracia para soportarlo. Temas: gracia, debilidad, fortaleza en Cristo, contentamiento.",
    duration: 430,
    bibleVerse: "2 Corintios 12:9",
  },
  {
    id: 24,
    number: 24,
    title: "Perdonar como fuimos perdonados",
    date: "January 28, 2025",
    description:
      "Efesios 4:32 nos llama a ser benignos y perdonarnos unos a otros, como Dios nos perdono en Cristo.",
    showNotes:
      "Lectura: Efesios 4:25-32 y Mateo 18:21-35. El perdon no es un sentimiento, es una decision. En este devocional exploramos la parabola del siervo que no quiso perdonar y como el perdon de Dios hacia nosotros debe fluir hacia los demas. Incluye oracion de liberacion. Temas: perdon, libertad, misericordia, relaciones.",
    duration: 520,
    bibleVerse: "Efesios 4:32",
  },
  {
    id: 23,
    number: 23,
    title: "El fruto del Espiritu en la vida diaria",
    date: "January 24, 2025",
    description:
      "Galatas 5:22-23 describe el fruto del Espiritu. No es algo que producimos, sino el resultado de permanecer en Cristo.",
    showNotes:
      "Lectura: Galatas 5:16-26. El Pastor Miguel analiza cada aspecto del fruto del Espiritu: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza. No son frutos separados sino un solo fruto con multiples expresiones. Temas: Espiritu Santo, caracter cristiano, santificacion, vida diaria.",
    duration: 550,
    bibleVerse: "Galatas 5:22-23",
  },
  {
    id: 22,
    number: 22,
    title: "Dios pelea tus batallas",
    date: "January 20, 2025",
    description:
      "Exodo 14:14 proclama que el Senor peleara por ti, y tu solamente quedate tranquilo. Un mensaje de fortaleza para tiempos de guerra espiritual.",
    showNotes:
      "Lectura: Exodo 14:10-22. Israel estaba atrapado entre el mar y el ejercito egipcio. Parecia el fin. Pero Dios tenia un plan. Este devocional nos recuerda que nuestras batallas le pertenecen a El. Incluye declaraciones de fe. Temas: guerra espiritual, confianza, liberacion, poder de Dios.",
    duration: 490,
    bibleVerse: "Exodo 14:14",
  },
  {
    id: 21,
    number: 21,
    title: "Proposito eterno en Cristo",
    date: "January 13, 2025",
    description:
      "Jeremias 29:11 nos asegura que Dios tiene planes de bien para nosotros. Pero entender el proposito requiere paciencia y obediencia.",
    showNotes:
      "Lectura: Jeremias 29:10-14. Esta promesa fue dada a un pueblo en exilio que tendria que esperar 70 años. El proposito de Dios no siempre llega en nuestro tiempo. Reflexion sobre como buscar a Dios de todo corazon mientras esperamos. Temas: proposito, paciencia, plan de Dios, esperanza.",
    duration: 470,
    bibleVerse: "Jeremias 29:11",
  },
  {
    id: 20,
    number: 20,
    title: "Ano nuevo, corazon renovado",
    date: "January 6, 2025",
    description:
      "Comenzamos el año con Ezequiel 36:26 donde Dios promete darnos un corazon nuevo. Es tiempo de renovacion espiritual.",
    showNotes:
      "Lectura: Ezequiel 36:25-28 y 2 Corintios 5:17. Primer devocional del 2025. El Pastor Miguel nos invita a no solo hacer propositos externos, sino permitir que Dios transforme nuestro interior. De nada sirve cambiar habitos si el corazon permanece igual. Incluye compromiso de lectura biblica para el año. Temas: renovacion, año nuevo, transformacion, Espiritu Santo.",
    duration: 600,
    bibleVerse: "Ezequiel 36:26",
  },
  // --- 2024 ---
  {
    id: 19,
    number: 19,
    title: "Navidad: Emmanuel, Dios con nosotros",
    date: "December 24, 2024",
    description:
      "Mateo 1:23 cumple la profecia de Isaias: la virgen concebiria un hijo llamado Emmanuel. En Navidad celebramos que Dios vino a habitarnos.",
    showNotes:
      "Lectura: Mateo 1:18-25 e Isaias 7:14. Devocional especial de Nochebuena. Reflexionamos sobre el significado profundo de la encarnacion: Dios no se quedo lejos, sino que se hizo uno de nosotros. Incluye tiempo de adoracion y gratitud. Temas: Navidad, encarnacion, presencia de Dios, adoracion.",
    duration: 560,
    bibleVerse: "Mateo 1:23",
  },
  {
    id: 18,
    number: 18,
    title: "Esperando con gozo: tercer domingo de Adviento",
    date: "December 15, 2024",
    description:
      "En este tercer domingo de Adviento encendemos la vela del gozo. Filipenses 4:4 dice: 'Regocijaos en el Senor siempre.'",
    showNotes:
      "Lectura: Filipenses 4:4-7 y Lucas 2:8-14. El gozo cristiano no depende de las circunstancias sino de la certeza de la salvacion. Los pastores recibieron con gozo la noticia del nacimiento de Jesus. Nosotros tambien podemos gozarnos hoy. Temas: Adviento, gozo, expectativa, nacimiento de Cristo.",
    duration: 440,
    bibleVerse: "Filipenses 4:4",
  },
  {
    id: 17,
    number: 17,
    title: "Siervos fieles en lo poco",
    date: "December 2, 2024",
    description:
      "La parabola de los talentos en Mateo 25 nos ensenaque Dios no espera perfeccion, sino fidelidad con lo que nos ha dado.",
    showNotes:
      "Lectura: Mateo 25:14-30. Cada siervo recibio segun su capacidad. El problema del tercer siervo no fue su poco talento, sino el miedo que lo paralizo. Dios nos llama a ser fieles con lo que tenemos hoy. Temas: fidelidad, talentos, mayordomia, servicio.",
    duration: 500,
    bibleVerse: "Mateo 25:21",
  },
  {
    id: 16,
    number: 16,
    title: "Accion de gracias en toda circunstancia",
    date: "November 25, 2024",
    description:
      "1 Tesalonicenses 5:18 nos instruye a dar gracias en todo, porque esta es la voluntad de Dios para nosotros en Cristo Jesus.",
    showNotes:
      "Lectura: 1 Tesalonicenses 5:16-18 y Salmo 100. Dar gracias no es solo una practica de noviembre, es un estilo de vida cristiano. Repasamos 10 razones biblicas para agradecer incluso en tiempos dificiles. Incluye ejercicio practico de gratitud. Temas: gratitud, accion de gracias, alabanza, contentamiento.",
    duration: 450,
    bibleVerse: "1 Tesalonicenses 5:18",
  },
  {
    id: 15,
    number: 15,
    title: "La armadura de Dios",
    date: "November 11, 2024",
    description:
      "Efesios 6:10-18 describe las armas espirituales que Dios nos da. No luchamos contra carne ni sangre, sino contra potestades espirituales.",
    showNotes:
      "Lectura: Efesios 6:10-20. El Pastor Carlos explica pieza por pieza la armadura del cristiano: cinturon de verdad, coraza de justicia, calzado del evangelio, escudo de fe, yelmo de salvacion y espada del Espiritu. Cada pieza tiene una funcion practica en nuestra vida. Temas: guerra espiritual, proteccion, fe, Palabra de Dios.",
    duration: 580,
    bibleVerse: "Efesios 6:11",
  },
  {
    id: 14,
    number: 14,
    title: "Bienaventurados los pacificadores",
    date: "October 22, 2024",
    description:
      "En el Sermon del Monte, Jesus llama bienaventurados a los pacificadores. Mateo 5:9 nos desafia a ser agentes de reconciliacion.",
    showNotes:
      "Lectura: Mateo 5:1-12. Las Bienaventuranzas son el corazon del Reino de Dios. Ser pacificador no es evitar conflictos, sino buscar activamente la reconciliacion. Reflexion sobre como aplicar esto en la familia, el trabajo y la iglesia. Temas: paz, reconciliacion, Bienaventuranzas, Reino de Dios.",
    duration: 470,
    bibleVerse: "Mateo 5:9",
  },
  {
    id: 13,
    number: 13,
    title: "El Salmo 23: un refugio en la tormenta",
    date: "October 7, 2024",
    description:
      "El Senor es mi pastor, nada me faltara. El salmo mas conocido del mundo sigue siendo el mas necesario para nuestros corazones.",
    showNotes:
      "Lectura: Salmo 23. Verso por verso, la hermana Patricia nos guia por este salmo atemporal. Desde los verdes pastos hasta la mesa preparada ante nuestros enemigos, cada imagen habla del cuidado total de Dios. Incluye meditacion guiada. Temas: provision, proteccion, paz, presencia de Dios.",
    duration: 530,
    bibleVerse: "Salmo 23:1",
  },
  {
    id: 12,
    number: 12,
    title: "Amar al projimo como a ti mismo",
    date: "September 16, 2024",
    description:
      "El segundo gran mandamiento segun Jesus es amar al projimo. Pero, quien es nuestro projimo? La parabola del buen samaritano responde.",
    showNotes:
      "Lectura: Lucas 10:25-37. El sacerdote paso de largo. El levita paso de largo. Fue el samaritano, el despreciado, quien se detuvo. Jesus redefine 'projimo' no como alguien cercano geograficamente, sino como todo aquel que necesita misericordia. Temas: amor, misericordia, servicio, compasion.",
    duration: 490,
    bibleVerse: "Lucas 10:27",
  },
  {
    id: 11,
    number: 11,
    title: "Confiando en el tiempo de Dios",
    date: "September 2, 2024",
    description:
      "Eclesiastes 3:1 nos dice que todo tiene su tiempo. Aprender a esperar el tiempo de Dios es una de las lecciones mas dificiles de la fe.",
    showNotes:
      "Lectura: Eclesiastes 3:1-11. Hay tiempo de llorar y tiempo de reir, tiempo de callar y tiempo de hablar. El Pastor Miguel reflexiona sobre como la cultura de la inmediatez choca con el ritmo de Dios. Abraham espero 25 años por Isaac. Jose espero 13 años. Tu tambien puedes esperar. Temas: paciencia, tiempo de Dios, espera, fe.",
    duration: 510,
    bibleVerse: "Eclesiastes 3:11",
  },
  {
    id: 10,
    number: 10,
    title: "Edificando sobre la Roca",
    date: "August 12, 2024",
    description:
      "Mateo 7:24-27 compara al sabio que edifica sobre la roca con el necio que edifica sobre la arena. Nuestro fundamento determina nuestra estabilidad.",
    showNotes:
      "Lectura: Mateo 7:24-29. Jesus concluye el Sermon del Monte con esta poderosa ilustracion. Ambas casas enfrentaron la misma tormenta. La diferencia fue el fundamento. Hoy reflexionamos sobre que fundamento estamos construyendo nuestras vidas, familias y ministerios. Temas: fundamento, obediencia, sabiduria, Palabra de Dios.",
    duration: 460,
    bibleVerse: "Mateo 7:24",
  },
  {
    id: 9,
    number: 9,
    title: "El Dios que restaura",
    date: "July 29, 2024",
    description:
      "Joel 2:25 promete que Dios restituira los años que la langosta devoro. No importa cuanto hayas perdido, Dios puede restaurar.",
    showNotes:
      "Lectura: Joel 2:21-27. Israel habia sufrido una plaga devastadora. Todo parecia perdido. Pero Dios prometio restauracion completa. Este devocional es para quienes sienten que han perdido años, oportunidades o relaciones. Dios es el Dios de la segunda oportunidad. Temas: restauracion, esperanza, nueva oportunidad, fidelidad de Dios.",
    duration: 480,
    bibleVerse: "Joel 2:25",
  },
  {
    id: 8,
    number: 8,
    title: "Sed de Dios como el ciervo",
    date: "July 8, 2024",
    description:
      "Como el ciervo brama por las corrientes de las aguas, asi clama mi alma por ti, oh Dios. Salmo 42 expresa el anhelo profundo del corazon.",
    showNotes:
      "Lectura: Salmo 42. El salmista estaba lejos del templo, probablemente en exilio. Su alma estaba abatida, pero en lugar de hundirse, dirigia su sed hacia Dios. Este devocional nos invita a cultivar esa sed santa en una epoca de distracciones. Temas: sed espiritual, buscar a Dios, adoracion, intimidad.",
    duration: 440,
    bibleVerse: "Salmo 42:1",
  },
  {
    id: 7,
    number: 7,
    title: "Llamados a ser luz del mundo",
    date: "June 17, 2024",
    description:
      "Mateo 5:14 nos declara luz del mundo. No es una sugerencia, es una identidad. Brillar no es opcional para el cristiano.",
    showNotes:
      "Lectura: Mateo 5:13-16. Sal y luz: dos metaforas que definen la mision del cristiano en el mundo. La sal preserva y da sabor. La luz disipa la oscuridad. Hoy nos preguntamos: estamos escondiendo nuestra luz debajo de un almud? Temas: testimonio, mision, identidad en Cristo, influencia.",
    duration: 450,
    bibleVerse: "Mateo 5:14",
  },
  {
    id: 6,
    number: 6,
    title: "La fuerza de la comunidad de fe",
    date: "May 20, 2024",
    description:
      "Hechos 2:42 describe la primera iglesia: perseveraban en la doctrina, la comunion, el partimiento del pan y las oraciones. La fe no se vive sola.",
    showNotes:
      "Lectura: Hechos 2:42-47. La iglesia primitiva no era un evento dominical sino una comunidad de vida. Compartian todo, se reunian en los hogares, y el Senor anadida cada dia a los que habian de ser salvos. Reflexion sobre como fortalecer nuestra vida comunitaria. Temas: comunidad, iglesia, comunion, vida en comun.",
    duration: 520,
    bibleVerse: "Hechos 2:42",
  },
  {
    id: 5,
    number: 5,
    title: "Madres conforme al corazon de Dios",
    date: "May 10, 2024",
    description:
      "En el dia de las madres, honramos a las mujeres que, como Ana en 1 Samuel, entregan sus hijos al Senor con fe y oracion.",
    showNotes:
      "Lectura: 1 Samuel 1:9-28 y Proverbios 31:25-31. Devocional especial del Dia de las Madres. Ana oro con lagrimas por un hijo y, cuando Dios respondio, lo devolvio al templo. El mayor acto de una madre es encomendar a sus hijos a Dios. Incluye oracion especial por las madres. Temas: madres, oracion, entrega, familia.",
    duration: 540,
    bibleVerse: "1 Samuel 1:27-28",
  },
  {
    id: 4,
    number: 4,
    title: "Resucito: el poder de la Pascua",
    date: "March 31, 2024",
    description:
      "El no esta aqui, ha resucitado. La tumba vacia es el fundamento de nuestra fe. Sin resurreccion, vana es nuestra esperanza.",
    showNotes:
      "Lectura: Lucas 24:1-12 y 1 Corintios 15:3-8. Devocional especial de Resurreccion. Las mujeres fueron las primeras testigos. Los discipulos no lo creian. Pero la tumba estaba vacia. Hoy celebramos que servimos a un Dios vivo. Incluye confesion de fe. Temas: resurreccion, Pascua, fe, victoria sobre la muerte.",
    duration: 600,
    bibleVerse: "Lucas 24:6",
  },
  {
    id: 3,
    number: 3,
    title: "El camino de la cruz",
    date: "March 29, 2024",
    description:
      "Viernes Santo: Jesus dijo 'Consumado es.' En la cruz, el pago completo por nuestros pecados fue realizado. Todo fue hecho.",
    showNotes:
      "Lectura: Juan 19:16-30 e Isaias 53. Devocional de Viernes Santo. Recorremos las siete palabras de Jesus en la cruz. Cada una revela un aspecto del amor redentor de Dios. Desde el perdon hasta la consumacion, la cruz es el centro de la historia. Incluye tiempo de reflexion y silencio. Temas: cruz, sacrificio, redencion, amor de Dios.",
    duration: 660,
    bibleVerse: "Juan 19:30",
  },
  {
    id: 2,
    number: 2,
    title: "Dios hace nuevas todas las cosas",
    date: "February 14, 2024",
    description:
      "Apocalipsis 21:5 declara: 'He aqui, yo hago nuevas todas las cosas.' No hay situacion tan rota que Dios no pueda renovar.",
    showNotes:
      "Lectura: Apocalipsis 21:1-7 e Isaias 43:18-19. El Dios del Apocalipsis no es un Dios de destruccion sino de renovacion total. El promete un cielo nuevo y una tierra nueva. Pero esa renovacion comienza hoy, en nuestros corazones. Temas: renovacion, esperanza eterna, nuevos comienzos, promesas de Dios.",
    duration: 470,
    bibleVerse: "Apocalipsis 21:5",
  },
  {
    id: 1,
    number: 1,
    title: "En el principio: el Dios que crea",
    date: "January 15, 2024",
    description:
      "Genesis 1:1 - En el principio creo Dios los cielos y la tierra. Nuestro primer devocional nos lleva al fundamento de todo: un Dios creador que habla y las cosas son.",
    showNotes:
      "Lectura: Genesis 1:1-5 y Juan 1:1-5. Primer devocional de Iglesia Familia de Dios. El Pastor Miguel inaugura este ministerio con una reflexion sobre los origenes. Antes de que nada existiera, Dios ya estaba. Y su primera accion fue crear. Nosotros, hechos a Su imagen, tambien somos llamados a crear: relaciones, comunidad, esperanza. Temas: creacion, identidad, proposito, comienzos.",
    duration: 550,
    bibleVerse: "Genesis 1:1",
  },
]
