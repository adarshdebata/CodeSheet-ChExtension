document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language');
    const codeSnippetSelect = document.getElementById('codeSnippet');
    const submitButton = document.getElementById('submitButton');
    const generatedCodeDiv = document.getElementById('generatedCode');
    const codeDisplay = document.getElementById('codeDisplay');
    const copyButton = document.getElementById('copyButton');

    const snippetFiles = {
        html: './snippets/html.js',
        java: './snippets/java.js',
        cpp: './snippets/cpp.js',
        csharp: './snippets/csharp.js',
        python: './snippets/python.js'
       
    };

    submitButton.addEventListener('click', async function () {
        const selectedLanguage = languageSelect.value;
        const selectedCodeSnippet = codeSnippetSelect.value;
        const generatedCode = await generateCode(selectedLanguage, selectedCodeSnippet);

        codeDisplay.textContent = generatedCode;
        generatedCodeDiv.classList.remove('hidden');
    });

    languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        updateCodeSnippetOptions(selectedLanguage);
    });

    copyButton.addEventListener('click', function () {
        copyToClipboard(codeDisplay.textContent);
    });

    async function generateCode(language, codeSnippet) {
        const snippetFile = snippetFiles[language];
        if (snippetFile) {
            try {
                // Dynamically import the snippet file based on the selected language
                const snippetModule = await import(snippetFile);
                return snippetModule.generateCode(codeSnippet);
            } catch (error) {
                console.error('Error importing or executing snippet file:', error);
            }
        }

        return 'Invalid language or code snippet';
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Code copied to clipboard!');
    }

    function updateCodeSnippetOptions(selectedLanguage) {
        // Clear existing options
        codeSnippetSelect.innerHTML = '';

        const codeSnippetsForLanguage = getCodeSnippetsForLanguage(selectedLanguage);
        codeSnippetsForLanguage.forEach(snippet => {
            const option = document.createElement('option');
            option.value = snippet;
            option.textContent = snippet;
            codeSnippetSelect.appendChild(option);
        });
    }

    function getCodeSnippetsForLanguage(language) {
        const codeSnippets = {
            html: ['boilerplate', 'anchorTag', 'marqueeTag', 'orderList', 'table', 'unorderedList'],
            java: ['boilerplate', 'breadthFirstSearch(BFS)', 'bubbleSort', 'depthFirstSearch(DFS)', 'dijkstraAlgorithm', 'insertionSort', 'mergeSort', 'quickSort'],
            cpp: ['boilerplate', 'breadthFirstSearch(BFS)', 'bubbleSort', 'depthFirstSearch(DFS)', 'dijkstraAlgorithm', 'insertionSort', 'mergeSort', 'quickSort'],
            csharp: ['boilerplate', 'breadthFirstSearch(BFS)', 'bubbleSort', 'insertionSort', 'mergeSort', 'quickSort'],
            python: ['boilerplate', 'breadthFirstSearch(BFS)', 'insertionSort', 'quickSort'],
        };

        return codeSnippets[language] || [];
    }
});
