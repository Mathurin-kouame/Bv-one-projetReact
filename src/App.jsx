import { useRef, useState, useEffect } from "react";
import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";


export default function App() {

  //STATE 
  const [ superheroPreferer, setSperheroPreferer ] = useState();
  // const [ newSuperheroPreferer, setNewSuperheroPreferer ] = useState("Anonyme");
  // const [ newDescriptionSuperheroPreferer, setNewDescriptionSuperheroPreferer ] = useState();
  // const [ newPhotoSuperheroPreferer, setNewPhotoSuperheroPreferer ] = useState();
  
  // Pour avoir un seul state on  fait ceux-ci
  const [ newSuperhero, setnewSuperhero ] = useState({
    nom: "Anonyme",
    photo: "",
    description: ""
  })

  // VARIABLE
  const nom = useRef();
  const description = useRef();
  const photo = useRef();

  // cycle de vie
  useEffect(() => {
    photo.current.focus();
  }, [
    newSuperhero.nom,
    newSuperhero.description,
    newSuperhero.photo
  ])
  
  useEffect(() => {
    nom.current.value = "";
    description.current.value = "";
    photo.current.value = "";

  },[newSuperhero.nom])

  //FUNCTION
  const superheroCliquer = (nom) =>{
    setSperheroPreferer(nom);
  }
  const sauvegarderLeSuperhero = () => {
    setnewSuperhero((formerSuperhero) => ({
      ...formerSuperhero, nom: nom.current.value,
    }));

    setnewSuperhero((formerSuperhero) => ({
      ...formerSuperhero, photo: photo.current.value,
    }));

    setnewSuperhero((formerSuperhero) => ({
      ...formerSuperhero, description: description.current.value,
    }));
   
  }

  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
            {/* superhero n°1 */}
            <Superhero
              nom="Iron Man"
              description=" Iron Man est un film américano-canadien réalisé par Jon Favreau, sorti en 2008."
              details="l raconte les origines et les débuts du personnage éponyme issu du comics publié par Marvel. Il s'agit de la première production de l'univers cinématographique Marvel, et du premier film de la phase une.

                  Ce film marque aussi le retour au succès au box-office de Robert Downey Jr., qui connaît grâce à ce rôle un regain de popularité. Le film récolte effectivement 585 millions de dollars pour un budget de 140 millions et sera suivi en 2010 d'Iron Man 2.

                  En 2022, le film est sélectionné par la National Film Registry de la Bibliothèque du Congrès pour y être conservé, comme étant « culturellement, historiquement ou esthétiquement important »1. "
              films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]}
              photo="https://m.media-amazon.com/images/S/pv-target-images/144540abcf5eb3ca17ea30a5ac3554dcd011a2880ccfba9694d13b27362060fe.jpg"
              iSsuperhero={superheroPreferer == "Iron Man"}
              superheroCliquer = {superheroCliquer}
            />
            {/* superhero n°2 */}
            <div className="superhero">
              <Superhero
                nom="Loki"
                description=" Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de
                la discorde et des illusions. Il est le fils du géant Farbauti et
                ..."
                details ="Loki, également connu sous le nom de Loptr, Hveðrungr ou encore Loge (dans la tétralogie de Wagner), est un des dieux principaux du panthéon de la mythologie nordique.

                  Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de la discorde et des illusions.

                  Il est le fils du géant Farbauti et de Laufey, ainsi que le père de plusieurs monstres : le serpent Jörmungand, le loup Fenrir et la déesse du monde des morts Hel. Il est également la mère du cheval d'Odin à huit jambes Sleipnir. Malgré ses origines, il est accueilli dans le panthéon divin des Ases par Odin."

                photo="https://avis2femmes.com/wp-content/uploads/2021/08/loki-serie-disney.jpg"
                iSsuperhero={superheroPreferer == "Loki"}
                superheroCliquer={superheroCliquer}
              />
            </div>
            {/* superhero n°3 */}
            <div className="superhero">
              <Superhero
                nom="capitain Americain"
                description="Steve Rogers est désormais à la tête des Avengers, dont la mission est de protéger l'humanité. À la suite d'une de leurs interventions qui a causé d'importants dégâts collatéraux,  le gouvernement décide de mettre en place un organisme de commandement et de supervision."
                details = "Captain America : Le Soldat de l'hiver ou Capitaine America : Le Soldat de l'hiver au Québec (Captain America: The Winter Soldier) est un film de super-héros américain réalisé par Anthony et Joe Russo, sorti en 2014 Il est la 9eme production de l'univers cinématographique Marvel et fait partie de la phase deux. Le film raconte la suite de l'histoire de Steve RogersNote 1, un jeune homme frêle de Brooklyn transformé en un super-soldat nommé Captain America1,2,3,4."
                photo="https://i0.wp.com/www.filmspourenfants.net/wp-content/uploads/2018/02/captain-america-first-avenger-a.jpg?fit=555%2C743&ssl=1"
               iSsuperhero={superheroPreferer == "capitain Americain"}
                superheroCliquer={superheroCliquer}
              />
        </div>
       {/* newSuperheroPreferer est remplacé par : */}
        <Superhero nom={newSuperhero.nom}
          description={newSuperhero.description != ""? newSuperhero.description : undefined}
          photo={newSuperhero.photo != "" ? newSuperhero.photo : undefined}
          />
        {/* Parametre de notre superhero */}
        <div style={{
          border: "1px solid black",
          padding: "15px",
        }}>
          <h3 style={{ textAlign: "center" }}>Crée ton propre superhero</h3>
          <div>
            <label htmlFor="photo">Photo</label>
            <input type="text"
              name="photo"
              id="photo"
              ref={photo}
              // value={newPhotoSuperheroPreferer} onChange={(event) => setNewPhotoSuperheroPreferer(event.target.value)}
              style={{
              padding: 8,
              fontSize: 14,
              width: "100%"
            }}/>
          </div>
          
          <div>
            <label htmlFor="nom">Nom</label>
            <input type="text"
              name="nom"
              id="nom"
              ref={nom}
              style={{
              padding: 8,
              fontSize: 14,
              width: "100%"
            }}/>
          </div>

          <div style={{marginTop: 10}}>
            <label htmlFor="description">Description</label>
            <input type="text"
              name="decription"
              id="description"
              ref={description}
              style={{
              padding: 8,
              fontSize: 14,
              width: "100%"
            }}/>
          </div>
          <div style={{
                display: "flex",
                justifyContent: "end",
                marginTop : 5
          }}
           onClick={sauvegarderLeSuperhero} 
          >
            <button>Modifier</button>
            </div>
        </div>
      </Superheros>
    </main>
  );
}
