
import { useState } from "react";
import "./Superhero.css";
import { createPortal } from "react-dom";

export default function Superhero({
    nom,
    description = "pas de description pour l'instant...",
    films = [ "Aucun film pour ce superhero" ],
    photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOvDs-ry3nz6dC7R-Ut7z78f98QnTkD4bTsWCXman027r53vIrXhiMS7hJ6tUyMjb6mE&usqp=CAU",
    details,
    iSsuperhero,
    superheroCliquer,
    ...props
}) {  
    // UTLISATION DE STATE
    const [ masquerDetails, setMasquerDetails ] = useState(false);
    const [ afficheModale, setAfficheModale ] = useState(false);
    
    //Function
    const nomClique = (event) => {
        event.stopPropagation();
        setAfficheModale(true);
    }

    return (
        <div className={`superhero ${iSsuperhero && "superheroPreferer"}`} onClick={() => superheroCliquer(nom)}
        
            style={{ position: "relative" }}
        >
 
            {afficheModale && createPortal(
                <div
                    style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        top: 0,
                        left: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}

                    onClick={(event) => {
                        event.stopPropagation();
                        setAfficheModale(false);
                    }}
                >
                    <div style={{ padding: 30, background: "white" }}>
    
                        <b>Informations</b>
                        <ul>
                            <li>Taille : 1,85</li>
                            <li>Couleur des cheveux : Noirs</li>
                            <li>Couleur des yeux : Bleu</li>
                        </ul>
                    </div>
                </div>, document.querySelector("body"),)}

            {/* carte */}
            <img alt={`${nom} photo`} src={photo} />
            <h2 onClick={(event) => nomClique(event)}>{nom}</h2>
            <p>{description}</p>

            {/* details */}
            <div className="seeLink" onClick={() => setMasquerDetails((statePrecedent) => !statePrecedent)}>
                {masquerDetails ? "masquer les details" : "En savoir plus"}
            
            </div>
            {masquerDetails && (
                <div style={{
                    whiteSpace: "pre-line",
                }}
                >
                    {details}
                </div>
            )}

            {/* Films */}
            <div style={{ marginTop: 10 }}>
                <b>Films:</b>
                <ul>
                    {films.map((film) => (
                        <li key={film}>{film}</li>
                    ))}
                   
                </ul>
               
            </div>
            
        </div>
    );
}