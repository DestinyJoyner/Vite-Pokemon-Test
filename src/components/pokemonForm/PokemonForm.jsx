import React from 'react';
import { useState, useEffect } from 'react';
import "./PokemonForm.css"

function PokemonForm(props) {
    const [form, setForm] = useState({
        name: "",
        type: "",
        image: "",
        weight: "",
    })

    const [imageUrl, setImageUrl] = useState("https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")

    const [checkbox, setCheckbox] = useState(false)

    const [radioButton, setRadioButton] = useState("")

    const [description, setDescription] = useState("")

    const [characters, setCharacters] = useState(150)


    function handleInputs(event) {
        const value = event.target.value
        const id = event.target.id

      setForm({...form, [id] : value})
    }


    useEffect(() => {
        const pattern = /^https:\/\/.*/
        const imageUrlIsValid = pattern.test(form.image)

        if(imageUrlIsValid){
            setImageUrl(form.image)
        }
        else {
            setImageUrl("https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        }

    },[form.image])

    useEffect(() => {
        const charCount = description.length
        const charsLeft = 150 - charCount
        setCharacters(charsLeft)

    },[description])


    return (
        <form className='pokemonForm'>
            {/* Name */}
        <label 
        htmlFor='name'
        className='pokemonForm_label'> 
            <span className='pokemonForm_label_text'>Pokemon Name: (text input)</span>
            <input
            type='text'
            id="name" 
           value={form.name}
           placeholder='Pokemon Name'
           onChange={(e) => {handleInputs(e)}}
            />
        </label>
        
        {/* Type */}

        <label 
        className='pokemonForm_dropdown'
        htmlFor='type'>
            <span>Type: (dropdown)</span>
            <select
            id="type"
            value={form.type}
            onChange={(e) =>handleInputs(e)}
            >
                <option value={""}>Select A Type</option>
                <option value={"Grass"}>Grass</option>
                <option value={"Fire"}>Fire</option>
                <option value={"Water"}>Water</option>

            </select>

        </label>

        {/* Image */}
        <label 
        className='pokemonForm_url'
        htmlFor='image'>
            <span>Image (url input)</span>
            <input
            pattern='https://.*'
            type="url"
            id="image"
            value={form.image}
            placeholder='https://example.com' 
            onChange={(e) => handleInputs(e)}/>

            <img src={imageUrl} alt="form-image" />
        </label>

        {/* Checkboxes */}
        <label 
        className='pokemonForm_checkbox'
        htmlFor='checkbox'>
            <span>Checkbox</span>
            <input
            type="checkbox"
            value={checkbox} 
            onChange={() => setCheckbox(!checkbox)}/>
        </label>

        {/* Radio */}
        <label
        className='pokemonForm_radio'
        htmlFor='size'
        onChange={(e) => {setRadioButton(e.target.value)}}>
            <span>Size (radio buttons)</span>
           
           <input type='radio' name="size" value="small" />
           <span>S</span> 
            

            <input type='radio' name="size" value="medium" />
            <span>M</span>

            <input type='radio' name="size" value="large" />
            <span>L</span>

            <input type='radio' name="size" value="x-large" />
            <span>XL</span>

        </label>

        {/* Textarea */}
        <label 
        className='pokemonForm_textarea'
        htmlFor='description'>
            <span>Chars. Remaining: {characters}</span>
            <textarea
            rows={"2"}
            cols={"50"}
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            placeholder='Description Box'>

            </textarea>
        </label>

        </form>
    );
}

export default PokemonForm;