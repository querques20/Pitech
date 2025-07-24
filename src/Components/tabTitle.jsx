import { useState, useEffect } from "react";

export default function TitleChanger() {
 const [title, setTitle] = useState("");
    useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div style={{ textAlign: "center", marginTop: "2rem 0" }}>
        <h2>escribir el titulo de la pagina</h2>
        <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe el título aquí"
        style={{ padding: "0.5rem", width: "300px" }}           
        />
        
     
    </div>
    );
}