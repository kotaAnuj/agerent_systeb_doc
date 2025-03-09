document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    
    // Copy button functionality
    const copyButton = document.getElementById('copyBtn');
    copyButton.addEventListener('click', () => {
        const codeText = document.querySelector('.code-content code').textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#50fa7b" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg> Copied!';
            copyButton.style.backgroundColor = 'rgba(80, 250, 123, 0.2)';
            copyButton.style.borderColor = '#50fa7b';
            
            setTimeout(() => {
                copyButton.innerHTML = originalText;
                copyButton.style.backgroundColor = '';
                copyButton.style.borderColor = '';
            }, 2000);
        });
    });
    
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});