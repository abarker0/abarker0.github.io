const LOGO_PATH = "public/logos/";

const experiences = [
    {
        logo: "mantech.png",
        logo_alt: "ManTech logo",
        date: "June 2024 - July 2024",
        title: "ManTech",
        subtitle: "Cyber Network Operations (CNO) Developer Intern",
        details: "Python, C, Jira, BinaryNinja",
        description: "Working at ManTech was a fast-paced introduction to the world of agile software development and cybersecurity.\
            I had to quickly learn about disassembly, reverse engineering, and control flow graphs, then apply it to my own work developing vulnerability queries.\
            I was able to create and test queries identifying <strong>CWE-196: Unsigned to Signed Conversion Error</strong> and <strong>CWE-832: Unlock of a Resource that is not Locked</strong> in various C binaries.\
            This experience fueled my interest in cybersecurity and made me excited to pursue a career in an agile environment.",
    },
    {
        logo: "umd.png",
        logo_alt: "University of Maryland logo",
        date: "Aug 2022 - May 2024",
        title: "University of Maryland, Division of IT",
        subtitle: "Service Desk Tier 2 Assistant Lead",
        description: "I served the University of Maryland community as an Assistant Lead, acting as a role model and mentor for a group of student technicians.\
        I was also trusted with handling more sensitive multi-factor reset requests and Google Mail admin duties, as well as was relied upon to give definitive answers to my techs' questions.\
        I learned how to explain technical topics to customers in a easy to understand way and gained a passion for doing work that benefits those around me.",
    },
    {
        logo: "ricoh.png",
        logo_alt: "Ricoh USA, Inc., logo",
        date: "May 2023 - Aug 2023",
        title: "Ricoh USA, Inc",
        subtitle: "Education Customer Engineer Intern",
        description: "During my internship at Ricoh, I helped prepare underprivileged New Jersey charter schools' technology for the upcoming school year.\
        This included QA-ing over 700 student Chromebooks, migrating staff laptops, imaging new devices, and acting as customer support during new-hire training programs.\
        I gained technical knowledge on a variety of operating systems and hardware, and was further inspired to change the world with my work.",
    },
    {
        logo: "umd.png",
        logo_alt: "University of Maryland logo",
        date: "Aug 2022 - Dec 2023",
        title: "University of Maryland's First Year Innovative Research Experience (FIRE)",
        subtitle: "Research Team Lead",
        details: "Autodesk Fusion, Arduino IDE",
        description: "I was selected to be part of UMD's FIRE research program, where I worked as the student Research Team Lead in the field of Bioinspired Robotics under Dr. Lena Johnson.\
        With the goal of creating a working prototype by the end, we followed the research process from background research to design and implementation to deployment.\
        This project expanded my breadth of skills, as I had to solder and CAD for the first time, and gave me experience with engineering design.",
    },
];

const projects = [
    {
        logo: "aces.png",
        logo_alt: "ACES logo",
        date: "Jan 2024 - May 2024",
        title: "Antivirus Cybersecurity Research Project",
        subtitle: "Research Team Lead",
        details: "Linux, Bash, ACES Virtualization Software, JavaScript, Python, pandas",
        description: "This antivirus research project was done as part of UMD's ACES program.\
        Our team studied the impact of antiviruses and antivirus warning banners on attacker behavior by creating four SSH-vulnerable honeypots.\
        This was implemented via Linux containers hosted on an ACES virtual machine and using a JavaScript Man-In-The-Middle client to connect attackers to the honeypot after a few password attempts.\
        We then analyzed our results using Python and the pandas library.\
        This experience was an interesting fusion of my cybersecurity and data science interests, and made me want to pursue a career at the interesection of both fields.",
        links: [
            {
                label: "Full Report",
                href: "/public/hacs202_final_report.pdf",
            },
            {
                label: "Presentation",
                href: "/public/hacs202_final_presentation.pdf",
            },
        ],
    },
    {
        logo: "steam.png",
        logo_alt: "Steam logo",
        date: "Jan 2024 - May 2024",
        title: "Steam Game Machine Learning Prediction Model",
        subtitle: "Machine Learning Specialist",
        details: "Python, pandas, Microsoft LightGBM, Jupyter Notebook",
        description: "This model is a multiclass classification decision tree created using Python, the pandas library, and Microsoft's LightGBM framework.\
        Using data from 27,000 Steam games, we cleaned the data, performed statistical analysis, and applied the classification model to predict a new game's expected number of sales.\
        This project made me realize how passionate I can be when I have freedom to make decisions within a project, since I am truly interested in what I'm working on.",
        links: [
            {
                label: "Project Writeup",
                href: "https://abarker0.github.io/CMSC320_Final_Project",
            },
        ],
    },
    {
        logo: "umd.png",
        logo_alt: "University of Maryland logo",
        date: "Apr 2024 - May 2024",
        title: "Steam Game Machine Learning Prediction Model",
        subtitle: "Machine Learning Specialist",
        details: "HTML/CSS, JavaScript, Node.js, Express.js, ejs, MongoDB, RESTful umd.io and Planetterp APIs",
        description: "Mercury is a UMD Computer Science degree planner website created using HTML/CSS and JavaScript hosted on a Node.js server using Express and ejs routing.\
        Inspired by a previous Python hackathon project, this website integrates the RESTful umd.io and Planetterp APIs as well as a MongoDB non-relational database.\
        My driving force behind this project was creating a solution where there was a need, namely that UMD required manual completion of a four year degree planner rather than any automated systems.\
        By analyzing my own credits and semester plans, I was able to graduate in only three years, and I hope to help others do the same.",
        links: [
            {
                label: "Github Source Code",
                href: "https://github.com/abarker0/Mercury",
            },
        ],
    },
    {
        logo: "discord.png",
        logo_alt: "Discord logo",
        date: "Nov 2023 - Dec 2023",
        title: "CherryBot",
        subtitle: "Project Lead",
        details: "Python, async, Discord.py API",
        description: "CherryBot is a Discord bot created using Python, the asyncio library, and the Discord.py API.\
        It receives user input by sending messages to the bot, which are then processed asynchronously and sends a message back to the user.\
        This allows multiple different servers to interact with one running instance of the bot.\
        The project was a great introduction to asynchronous processing for me and differentiating between synchronous and asynchronous tasks.",
        links: [
            {
                label: "Github Source Code",
                href: "https://github.com/abarker0/CherryBot",
            },
        ],
    },
];

const education = [
    {
        logo: "umd.png",
        logo_alt: "University of Maryland logo",
        date: "Aug 2022 - May 2025",
        title: "B.S. Computer Science, Minor in Advanced Cybersecurity Experience for Students (ACES)",
        subtitle: "University of Maryland, College Park",
        details: "Data Structures & Algorithms, Data Science, Web Development, Network Security, Penetration Testing",
        description: "I graduated from the University of Maryland with degree in Computer Science and Magna Cum Laude honors from my 3.99 GPA.\
        I explored the fields of software engineering, data science, and cybersecurity with a well-rounded curriculum, and am excited to apply my skills to the real world\
        I served the campus community as an Assistant Lead at the Division of IT Service Desk, as well as an arranger and the Vice President of the Gamer Symphony Orchestra, a student-run orchestra that exclusively plays video game music.",
    },
];

const languages_icons = [
    {
        logo: "python.png",
        logo_alt: "Python programming language logo",
        name: "Python",
    },
    {
        logo: "java.png",
        logo_alt: "Java programming language logo",
        name: "Java",
    },
    {
        logo: "c.png",
        logo_alt: "C programming language logo",
        name: "C",
    },
    {
        logo: "html.png",
        logo_alt: "HTML logo",
        name: "HTML",
    },
    {
        logo: "css.png",
        logo_alt: "CSS logo",
        name: "CSS",
    },
    {
        logo: "js.png",
        logo_alt: "JavaScript programming language logo",
        name: "JavaScript",
    },
    {
        logo: "sql.png",
        logo_alt: "SQL logo",
        name: "SQL",
    },
    {
        logo: "bash.png",
        logo_alt: "Bash programming language logo",
        name: "Bash",
    },
    {
        logo: "powershell.png",
        logo_alt: "Powershell programming language logo",
        name: "Powershell",
    },
];

const software_icons = [
    {
        logo: "git.png",
        logo_alt: "Git logo",
        name: "Git",
    },
    {
        logo: "jira.png",
        logo_alt: "Jira logo",
        name: "Jira",
    },
    {
        logo: "mongo.png",
        logo_alt: "MongoDB logo",
        name: "MongoDB",
    },
    {
        logo: "linux.png",
        logo_alt: "Linux logo",
        name: "Linux",
    },
    {
        logo: "kali.png",
        logo_alt: "Kali Linux logo",
        name: "Kali Linux",
    },
    {
        logo: "vmware.png",
        logo_alt: "VMWare logo",
        name: "VMWare",
    },
    {
        logo: "metasploit.png",
        logo_alt: "Metasploit logo",
        name: "Metasploit",
    },
    {
        logo: "binja.png",
        logo_alt: "BinaryNinja logo",
        name: "BinaryNinja",
    },
];

const framework_icons = [
    {
        logo: "hatch.png",
        logo_alt: "Hatch logo",
        name: "Hatch",
    },
    {
        logo: "pandas.png",
        logo_alt: "pandas logo",
        name: "pandas",
    },
    {
        logo: "numpy.png",
        logo_alt: "NumPy logo",
        name: "NumPy",
    },
    {
        logo: "node.png",
        logo_alt: "Node.js logo",
        name: "Node.js",
    },
    {
        logo: "express.png",
        logo_alt: "Express/EJS logo",
        name: "Express/EJS",
    },
    {
        logo: "pytest.png",
        logo_alt: "Pytest logo",
        name: "Pytest",
    },
    {
        logo: "junit.png",
        logo_alt: "Junit test logo",
        name: "Junit Test",
    },
    {
        logo: "openssl.png",
        logo_alt: "OpenSSL logo",
        name: "OpenSSL",
    },
]

function populateSection(data, containerId) {
    const section = document.getElementById(containerId);

    data.forEach(item => {
        const entry = document.createElement("div");
        entry.classList.add("container");
        entry.innerHTML = `
            <div class="left">
                <img class="container-logo" src="${LOGO_PATH + item.logo}" alt="${item.logo_alt}">
                <p class="container-date">${item.date}</p>
            </div>
            <div class="container-content">
                <h3>${item.title}</h3>
                <h4>${item.subtitle}</h4>
                <p>${item.details ?? ""}</p>
                <p>${item.description}</p>
        `;

        const contentDiv = entry.querySelector(".container-content");

        if (item.links?.length) {
            item.links.forEach(link => {
                const a = document.createElement("a");
                a.href = link.href;
                a.target = "_blank";
                a.textContent = link.label;
                contentDiv.appendChild(a);

                const br = document.createElement("br");
                contentDiv.appendChild(br);
            });
        }

        entry.innerHTML += "</div>";

        section.appendChild(entry);
    });
}

function populateLogos(data, containerId) {
    const section = document.getElementById(containerId);

    data.forEach(item => {
        const entry = document.createElement("figure");
        entry.classList.add("logos-container");
        entry.innerHTML = `
            <img src="${LOGO_PATH + item.logo}" alt="${item.logo_alt}">
            <figcaption class="logo-name">${item.name}</figcaption>
        `;

        section.appendChild(entry);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const logo_div_ids = {
        "language-logos": languages_icons,
        "software-logos": software_icons,
        "framework-logos": framework_icons,
    };

    const content_div_ids = {
        "experience-section": experiences,
        "project-section": projects,
        "education-section": education,
    };

    for (const div_id in logo_div_ids) {
        if (document.getElementById(div_id)) {
            populateLogos(logo_div_ids[div_id], div_id);
        }
    }

    for (const div_id in content_div_ids) {
        if (document.getElementById(div_id)) {
            populateSection(content_div_ids[div_id], div_id);
        }
    }
});