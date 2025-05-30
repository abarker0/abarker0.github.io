const experiences = [
    {
        logo: "public/logos/mantech.png",
        logo_alt: "ManTech logo",
        date: "June 2024 - July 2024",
        company: "ManTech",
        role: "Cyber Network Operations (CNO) Developer Intern",
        description: "Working at ManTech was a fast-paced introduction to the world of agile software development and cybersecurity.\
            I had to quickly learn about disassembly, reverse engineering, and control flow graphs, then apply it to my own work developing vulnerability queries.\
            I was able to create and test queries identifying <strong>CWE-196: Unsigned to Signed Conversion Error</strong> and <strong>CWE-832: Unlock of a Resource that is not Locked</strong> in various C binaries.\
            This experience fueled my interest in cybersecurity and made me excited to pursue a career in an agile environment.",
    },
    {
        logo: "public/logos/umd.png",
        logo_alt: "University of Maryland logo",
        date: "Aug 2022 - May 2024",
        company: "University of Maryland, Division of IT",
        role: "Service Desk Tier 2 Assistant Lead",
        description: "I served the University of Maryland community as an Assistant Lead, acting as a role model and mentor for a group of student technicians.\
        I was also trusted with handling more sensitive multi-factor reset requests and Google Mail admin duties, as well as was relied upon to give definitive answers to my techs' questions.\
        I learned how to explain technical topics to customers in a easy to understand way and gained a passion for doing work that benefits those around me.",
    },
    {
        logo: "public/logos/ricoh.png",
        logo_alt: "Ricoh USA, Inc., logo",
        date: "May 2023 - Aug 2023",
        company: "Ricoh USA, Inc",
        role: "Education Customer Engineer Intern",
        description: "During my internship at Ricoh, I helped prepare underprivileged New Jersey charter schools' technology for the upcoming school year.\
        This included QA-ing over 700 student Chromebooks, migrating staff laptops, imaging new devices, and acting as customer support during new-hire training programs.\
        I gained technical knowledge on a variety of operating systems and hardware, and was further inspired to change the world with my work.",
    },
    {
        logo: "public/logos/umd.png",
        logo_alt: "University of Maryland logo",
        date: "Aug 2022 - Dec 2023",
        company: "University of Maryland's First Year Innovative Research Experience (FIRE)",
        role: "Research Team Lead",
        description: "I was selected to be part of UMD's FIRE research program, where I worked as the student Research Team Lead in the field of Bioinspired Robotics under Dr. Lena Johnson.\
        With the goal of creating a working prototype by the end, we followed the research process from background research to design and implementation to deployment.\
        This project expanded my breadth of skills, as I had to solder and CAD for the first time, and gave me experience with engineering design.",
    },
]

const projects = [
    {
        logo: "public/logos/aces.png",
        logo_alt: "ACES logo",
        date: "Jan 2024 - May 2024",
        project: "Antivirus Cybersecurity Research Project",
        role: "Research Team Lead",
        description: "This antivirus research project was done as part of UMD's ACES program.\
        Our team studied the impact of antiviruses and antivirus warning banners on attacker behavior by creating four SSH-vulnerable honeypots.\
        This was implemented via Linux containers hosted on an ACES virtual machine and using a JavaScript Man-In-The-Middle client to connect attackers to the honeypot after a few password attempts.\
        We then analyzed our results using Python and the Pandas library.\
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
        logo: "public/logos/steam.png",
        logo_alt: "Steam logo",
        date: "Jan 2024 - May 2024",
        project: "Steam Game Machine Learning Prediction Model",
        role: "Machine Learning Specialist",
        description: "This model is a multiclass classification decision tree created using Python, the Pandas library, and Microsoft's LightGBM framework.\
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
        logo: "public/logos/umd.png",
        logo_alt: "University of Maryland logo",
        date: "Apr 2024 - May 2024",
        project: "Steam Game Machine Learning Prediction Model",
        role: "Machine Learning Specialist",
        description: "Mercury is a UMD Computer Science degree planner website created using HTML/CSS and JavaScript hosted on a Node.js server using Express and ejs routing.\
        Inspired by a previous Python hackathon project, this website integrates the RESTful umd.io and Planetterp APIs.\
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
        logo: "public/logos/discord.png",
        logo_alt: "Discord logo",
        date: "Nov 2023 - Dec 2023",
        project: "CherryBot",
        role: "Project Lead",
        description: "CherryBot is a Discord bot created using Python, the asyncio library, and the Discord.py API.\
        It receives user input by sending messages to the bot, which are then processed asynchronously and sends a message back to the user.\
        This allows multiple different servers to interact with one running instance of the bot.\
        I had fun creating a product and features that my friends and I could play with on Discord, our primary messaging platform.",
        links: [
            {
                label: "Github Source Code",
                href: "https://github.com/abarker0/CherryBot",
            },
        ],
    },
]

const experienceSection = document.getElementById('experience-section');
const projectSection = document.getElementById('project-section');

experiences.forEach(exp => {
    const experience = document.createElement('div');
    experience.classList.add('container');
    experience.innerHTML = `
        <div class="left">
            <img class="container-logo" src="${exp.logo}" alt="${exp.logo_alt}">
            <p class="container-date">${exp.date}</p>
        </div>
        <div class="container-content">
            <h3>${exp.company}</h3>
            <h4>${exp.role}</h3>
            <p>${exp.description}</p>
        </div>
    `;
    experienceSection.appendChild(experience);
});

projects.forEach(proj => {
    const project = document.createElement('div');
    project.classList.add('container');
    project.innerHTML = `
        <div class="left">
            <img class="container-logo" src="${proj.logo}" alt="${proj.logo_alt}">
            <p class="container-date">${proj.date}</p>
        </div>
        <div class="container-content">
            <h3>${proj.project}</h3>
            <h4>${proj.role}</h3>
            <p>${proj.description}</p>
        
    `;

    const contentDiv = project.querySelector('.container-content');

    for (const link of proj.links) {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = "_blank";
        a.textContent = link.label;
        contentDiv.appendChild(a);

        const br = document.createElement('br');
        contentDiv.appendChild(br);
    }

    projectSection.appendChild(project);
});