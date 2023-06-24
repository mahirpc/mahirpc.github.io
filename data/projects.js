const projects = [
    {
        id: 1,
        name: 'Meme Generator',
        techUsed:'Nodejs, Reactjs, Bootstrap',
        description: `It ia a web applicatioIt ia a web application 
        built using Reactjs along with 
        Bootstrap for styling. 
        It allows users to
        add type a meme on an image and save
        it to local their device.`,
        link:"https://github.com/mahirpc/react-meme-generator"
    },
    {
        id: 2,
        name: 'Todo App',
        techUsed:'HTML, CSS, JavaScript',
        description: `It ia a web application 
        built using HTML, CSS and JavaScript. 
        It allows users
        add todo notes and save
        it to local storage.`,
        link:"https://todomahir.ccbp.tech/"
    },
    {
        id: 3,
        name: 'Markdown Note ',
        techUsed:'Reactjs, CSS, Firebase, Markdown',
        description: `It ia a web application 
        built using HTML, CSS and JavaScript. 
        It allows users
        add todo notes and save
        it to local storage.`,
        link:"https://mahirpc.github.io/react-markdown-note/"
    },
    {
        id: 4,
        name: 'Tenzies Game',
        techUsed:'Reactjs, Nodejs, HTML, CSS',
        description: `It ia a web application 
        built using Reactjs and
        Nodejs. It allows users
        to play the game of Tenzies.`,
        link:"https://github.com/mahirpc/tenzies-game"
    },
    {
        id: 5,
        name: 'Promptopia',
        techUsed:'Reactjs ,Nextjs, Tailwind CSS, Nodejs, MongoDB',
        description: `Promptopia is web application
        used to create and save 
        writing prompts. It is built
        using Nextjs, Tailwind css,
        Nodejs with mongodb.`,
        link:"https://github.com/mahirpc/promptopia"
    },
    {
        id: 6,
        name: 'Sentiment Analysis',
        techUsed:'Python, Tensorflow, Keras, Flask, NLP, pandas, numpy',
        description: `Neural network model that can
        classify the sentiment of a
        customer. The model is trained
        on customer review datset from 
        amazon.`,
        link:"https://github.com/mahirpc/Sentiment-Analysis-Using-Neural-Network"
    },
    {
        id: 7,
        name: 'Captionator',
        techUsed:'Python, Tensorflow, Keras, Flask, CNN, NLP, Bahdanau Attention',
        description: `Captionator is a deep learning
        model that can generate captions
        for images. It is trained on the
        Flickr30k dataset. The model is
        built using the attention architecture.`,
        link:"https://github.com/mahirpc/Captionator"
    },
];

export default projects.reverse();