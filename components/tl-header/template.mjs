const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Virtual Consulting</a></li>
        <li><a href="/co-hosting">Remote Co-Hosting</a></li>
        <li><a href="/management">Onsite Management</a></li>
        <!--<li><a href="/competitors">Competitors</a></li>-->
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Virtual Consulting</option>
            <option value="/co-hosting/">Remote Co-Hosting</option>
            <option value="/management/">Onsite Management</option>
            <!--<option value="/competitors/">Competitors</option>-->
        </select>
        <!--<button onclick="window.location.reload()">Refresh</button>-->
    </nav>
    <img src="/components/tl-header/logo.png">
`;

export default template;