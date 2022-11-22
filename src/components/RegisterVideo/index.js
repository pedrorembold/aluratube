import { StyledRegisterVideo } from "./styles";
import React from "react";
import { createClient } from "@supabase/supabase-js"

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({})
        }
    }
}

const PROJECT_URL = "https://wctfgooddcomlrpalhis.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdGZnb29kZGNvbWxycGFsaGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2OTEzNzUsImV4cCI6MTk4NDI2NzM3NX0.L6qRwGnmeHwLdUwHjkIMgCwxltXG8qEjcGv4Q67gtlI"
const supabase = createClient(PROJECT_URL, API_KEY)

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}
export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "", url: "", playlist: "" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel && (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setFormVisivel(false)

                    //Contrato entre o front e o back
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumbnail: getThumbnail(formCadastro.values.url),
                        playlist: formCadastro.values.playlist,
                    })
                        .then((wtf) => { console.log(wtf) })
                        .catch((err) => { console.log(err); })

                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            required
                            placeholder="Titulo do Vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange} />
                        <input
                            required
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}

                        />
                        <input
                            required
                            placeholder="Nome da Playlist"
                            name="playlist"
                            value={formCadastro.values.playlist}
                            onChange={formCadastro.handleChange}

                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}