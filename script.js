class Project {
    constructor(name, link, icon) {
        this.name = name;
        this.link = link;
        this.icon = icon;
    }

    display() {
        let container = document.querySelectorAll("#projects-container")[0];
        let html =
            `
            <a href="${this.link}">
                <div class="project">
                    <div class="project-icon">${this.icon}</div>
                    <div class="project-name">${this.name}</div>
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
            <a href="${this.link}">
                <div class="contact">
                        <img class="contact-logo" src="${this.logo}">
                    <div class="contact-name">${this.name}</div>
                </div>
            </a>
            `
        container.innerHTML += html;
    }
}

let projects = [
    new Project("CountDownEsami", "https://frephs.github.io/CountDownEsami", "📅"),
    new Project("GetAulePolimi", "https://get-aule-polimi.vercel.app/", "🏫"),
    new Project("WeirdlyWired", "https://weirdly-wired.vercel.app/", "🔠"),
    new Project("SoME2", "allroadslead2rome.vercel.app/", "🌐"),
]

let contacts = [
    new Contact("Mail", "mailto:francescogenovese@duck.com", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Femail-icon-white-png-38.png&f=1&nofb=1&ipt=dd837ef3a6fdb55d7f303a848006b5434e0a337ed6ea1b600b1233190334e1f5&ipo=images"),
    new Contact("Github", "https://github.com/frephs", "github-mark-white.svg"),
    new Contact("Telegram", "https://frephs.t.me", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F04%2FTelegram-Logo-PNG-Transparent-Background-1536x1272.png&f=1&nofb=1&ipt=aebfb2a8db9f8843a5784b6d26c0a13f56150dc0b4adad7a01be4478f93163e8&ipo=images"),
    new Contact("Instagram", "https://instragram.com/frephs", "https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png"),

]

projects.forEach(project => project.display());
contacts.forEach(contact => contact.display());
