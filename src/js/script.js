class Project {
    constructor(name, link, icon, preview) {
        this.name = name;
        this.link = link;
        this.icon = icon;
        this.preview = preview
    }

    display() {
        let container = document.querySelectorAll("#projects-container")[0];
        let html =
            `
            <a href="${this.link}" target="_blank">
                <div class="project neumorphic">
                    <div class="project-icon">${this.icon}</div>
                    <div class="project-name">${this.name}</div>
                </div>
            </a>
            `
        container.innerHTML += html;
    }

    displayPreview() {
        let container = document.querySelectorAll("#previews-container")[0];
        let html =
            `
        <a href="${this.link}" target="_blank">
            <div class="project-preview">
                <div class="iframe-container">
                    <h3 class="iframe-title">${this.name}<br> 
                        <span class="iframe-icon"> ${this.icon}</span>
                    </h3>
                    <iframe src="${this.link}">
                    <style>
                    </style>

                    </iframe>
                </div>
            </div>
        </a>
        `
        container.innerHTML += html;
    }
}

class Contact {
    constructor(name, link, logo) {
        this.name = name;
        this.link = link;
        this.logo = logo;
    }

    display() {
        let container = document.querySelectorAll("#contacts-container")[0];
        let html =
            `
            <a href="${this.link}" target="_blank">
                <div class="contact neumorphic">
                        <img class="contact-logo" src="${this.logo}">
                    <div class="contact-name">${this.name}</div>
                </div>
            </a>
            `
        container.innerHTML += html;
    }
}

class Quote {
    constructor(author, source, quote) {
        this.author = author;
        this.source = source
        this.quote = quote;
    }

    display() {
        let container = document.querySelectorAll('#quotes-container')[0];
        let html =
            `
        <div class="quote neumorphic">
            <div class="quote-content">
                <span class="quote-quote">${this.quote}</span>
                <hr size= 1>
                <span class="quote-source">${(this.source) ? this.source : ""}</span>
                <span class="quote-author">${this.author}</span>
            </div>
        </div>
        `
        container.innerHTML += html;
    }
}

let projects = [
    new Project("GetAulePolimi", "https://get-aule-polimi.vercel.app/", "🏫", true),
    new Project("WeirdlyWired", "https://weirdly-wired.vercel.app/", "🔠", true),
    // new Project("CountDownEsami", "https://frephs.github.io/CountDownEsami", "📅", true),
    new Project("SoME2", "https://allroadslead2rome.vercel.app/", "🌐", true),
    new Project("GoodreadsLibrary", "https://frephs.github.io/GoodReadsBooks", "📚", false),
]

let contacts = [
    new Contact("Mail", "mailto:francescogenovese@duck.com", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Femail-icon-white-png-38.png&f=1&nofb=1&ipt=dd837ef3a6fdb55d7f303a848006b5434e0a337ed6ea1b600b1233190334e1f5&ipo=images"),
    new Contact("Github", "https://github.com/frephs", "src/img/github.svg"),
    new Contact("Telegram", "https://frephs.t.me", "src/img/telegram.svg"),
    new Contact("Instagram", "https://instagram.com/frephs", "https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"),
    new Contact("PayPal", "https://paypal.me/frncscgnvs", "src/img/paypal.png"),
    new Contact("GoodReads", "https://goodreads.com/frephs/", "src/img/goodreads.svg"),
]

let quotes = [
    new Quote("Lucretius", "De rerum natura", "Rerum magnarum parva potest res <br>exemplare dare et vestigia notitiai. <br> <br>A small thing can give an example of great things <br> and impart knowledge of their traces. "),
    new Quote("Edsger W. Dijkstra", undefined, "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise."),
    new Quote("Karl Marx", undefined, "In the modern industry the means of production must become means of production in common, social means of production, and, as such, they are employed in common, and produce, not privately for the individual producer, but socially.  <br> <br> From each according to their ability, to everyone according to their needs. <br> <br>  The ideas of the ruling class are in every epoch the ruling ideas, i.e., the class which is the ruling material force of society, is at the same time its ruling intellectual force. ")
]

quotes.forEach(quote => quote.display());

projects.forEach(
    project => {
        project.display()
        if (project.preview == true)
            project.displayPreview()
    }
);

contacts.forEach(contact => contact.display());
