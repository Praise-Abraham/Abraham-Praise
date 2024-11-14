let pos = document.querySelector(".pos")
let def = document.querySelector(".def")
let phonetics = document.querySelector(".phonetics")

const fetchDisplayWords = async (word) => {
    const URl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word

    const response = await fetch(URl)

    const words = await response.json()
    return words

    // displayDictionary(word)
}

const myForm = document.querySelector('.circle')

myForm.addEventListener("submit", (event) => {

    event.preventDefault()

    const search = document.getElementById('search').value

    console.log(search);

    const circle = event.target.search.value

    const name = document.querySelector('.word')


    fetchDisplayWords(search)
        .then((data) => {
            const { meanings, phonetics, word } = data[0]
            console.log(meanings);
            console.log(phonetics);
            console.log(word);

            name.textContent = word.toUpperCase()

            const displayMeaning = meanings.map((m) => {
                console.log(m)
                return `
                    <p>${m.partOfSpeech}</p>
                    <p>${m.definitions.map(d=>(`<p>${d.definition}</p>`))}</p>

                `
            })

            const displayPhonetics = phonetics.map((p) => {
                const phonetics = document.querySelector('.phonetics')
                console.log(p.text)

                return `
                    <p>${p.text}</p>
                `
                
            })
         

            pos.innerHTML = displayMeaning
            phonetics.innerHTML += displayPhonetics


            // const wordSearched = data[0].word

            // console.log(data);

            // const outCome = data[0].meanings
            // console.log(outCome);

            // outCome.forEach((c) => {
            //     let partOfSpeech = c.partOfSpeech
            //     pos.textContent = partOfSpeech
            //     console.log(pos);

            //     console.log(partOfSpeech);
            //     let definitions = c.definitions
            //     definitions.map(d => 
            //         console.log(d.definition)

            //     )
            // })



            // console.log(data[0].meanings[0].definitions[0].definition);

        })
        .catch((e) => {
            console.log(e);

        })

    // const outCome = data[0].meanings((data) => {
    //     console.log(outCome);

    // })
})
