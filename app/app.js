const App = {
    render() {
        const renderHook = document.getElementById('app');
        const h1Tag = document.createElement('h1');
        h1Tag.textContent = 'Main page';
        renderHook.append(h1Tag);
    }
};

App.render();



