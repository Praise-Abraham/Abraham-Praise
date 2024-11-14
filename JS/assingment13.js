let dictionary = {}

const fetchDisplayData = async (data) => {
    const URl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
    try {
        const response = await fetch('')

        const {data} = response.json


        const {definition,pronunciation,example} = data

        dictionary[word] = {
            definition,pronunciation,example
        }

        displayDictionary()
    } catch (error) {
        console.log('Error searching for word, check console for more information', error);
        
    }
}

 function displayDictionary () {
    const word = Object.keys(dictionary)[0]
    const {definition,pronunciation,example} = dictionary[word]

    const dictionaryHTML = ` <h1>${word}</h1>
        <p><strong>Definition:</strong>${definition}</p>
        <p><strong>Pronununciation:</strong>${pronunciation}</p>
        <p><strong>Example:</strong>${example}</p>`

        document.getElementById('dictionary-container').innerHTML = dictionaryHTML
 }

 document.getElementById('search-form').addEventListener('submit', (event) => {

    event.preventDefault()
    const word = document.getElementById('word').value.trim()
    fetchDisplayData(word)

 })
