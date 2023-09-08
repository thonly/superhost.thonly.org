const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Consulting</a></li>
        <li><a href="/co-hosting">Co-Hosting</a></li>
        <li><a href="/management">Management</a></li>
        <!--<li><a href="/competitors">Competitors</a></li>-->
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Consulting</option>
            <option value="/co-hosting/">Co-Hosting</option>
            <option value="/management/">Management</option>
            <!--<option value="/competitors/">Competitors</option>-->
        </select>
        <!--<button onclick="window.location.reload()">Refresh</button>-->
    </nav>
    <img src="/components/tl-header/logo.png">
`;

export default template;