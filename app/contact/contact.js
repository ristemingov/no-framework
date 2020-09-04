console.log('contact');

const Contact = {
    render() {
        const renderHook = document.getElementById('app');
        const h1Tag = document.createElement('h1');
        h1Tag.textContent = 'Contact page';
        renderHook.append(h1Tag);
    }
};

Contact.render();
