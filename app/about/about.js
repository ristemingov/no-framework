console.log('about');

const About = {
    render() {
        const renderHook = document.getElementById('app');
        const h1Tag = document.createElement('h1');
        h1Tag.textContent = 'About page';
        renderHook.append(h1Tag);
    }
};

About.render();
