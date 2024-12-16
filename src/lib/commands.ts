import { Prompt } from "../types";

export const MOTD = `🎉 Welcome!!! 🎉

🌐 GitHub: &nbsp;&nbsp;<a style="cursor:pointer" href="https://github.com/Harshj143" target="_blank" rel="noopener noreferrer">https://github.com/Harshj143</a>
💼 LinkedIn: <a style="cursor:pointer" href="https://linkedin.com/in/harsh-jannawar" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/harsh-jannawar</a>

Hello, I'm <b>Harsh Jannawar</b> 👋, a Master's student at the <b>University of Washington</b> 🎓 majoring in <b>Cybersecurity Engineering</b> 🛡️.  
I specialize in cloud security ☁️, penetration testing 🔍, and regulatory compliance ✅.  
I am passionate about building secure systems 🔒 and tackling complex security challenges 🛠️.  

💡 Type 'help' to see the available commands and explore further! 🚀`.replace(
  /\n/g,
  "<br/>"
);


const KALI_LOGO = `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replace(/ /g, "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replace(/ /g, "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replace(/ /g, "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replace(/ /g, "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replace(/ /g, "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replace(
        / /g,
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replace(/ /g, "&nbsp;")}</span>
      <span>${"                     ;XO,".replace(/ /g, "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replace(
        / /g,
        "&nbsp;"
      )}</span>
    </span>
  `;

const COMMANDS: Record<
  string,
  (username: string, args: string[], history: string[]) => string
> = {
  kali: () => KALI_LOGO,
  whoami: (username) => username,
  about: (username) => `Hello, ${username}!
    Hi there! 👋 I'm Harsh Jannawar, passionate about cybersecurity 🛡️. I specialize in cloud security ☁️, penetration testing 🔍, vulnerability assessments 🛠️, and ensuring compliance with industry standards ✅. My journey in cybersecurity began with a strong foundation in secure system design 🔒 and real-world threat mitigation. I completed my Bachelor's degree in Cybersecurity 🎓, where I gained a deep understanding of cybersecurity principles and hands-on technical expertise.

    My focus is on leveraging leading tools and technologies, including AWS ☁️, Python 🐍, and Bash scripting 💻, to create robust security solutions. With hands-on experience using tools like Wireshark 🌐, Nmap 📡, Metasploit 🚀, and Burp Suite 🔧, I bring a versatile skill set to every challenge.

    I am also ranked in the top 1% on TryHackMe 🏆, highlighting my expertise and commitment to continuous learning 📘. Additionally, I take pride in my contributions to cybersecurity projects and competitions 🏅, including leading dark web threat analysis initiatives 🕵️ and developing automated security tools 🤖, showcasing my ability to tackle complex security challenges.
  `,
  resume: () =>
    openLink(
      "https://docs.google.com/document/d/148G_ppPp07Qrjum0onkw0GNrj_HM2QP6qJnT7VR6vac/edit?usp=sharing"
    ),
  skills: () => `
<b>Technical Skills:</b> Security Protocols, Network Security, Cloud Security, Vulnerability Assessment and Penetration Testing (VAPT), Cybersecurity, Azure, Amazon Web Services (AWS), Python Programming, Risk Assessment and Mitigation, Cybersecurity Governance and Compliance, Linux, Cybersecurity Tools, Docker, Kubernetes, Applied Cryptography, Bash Scripting, Information Security.

<b>Technical Tools and Technologies:</b> Confluence, JIRA, Postman, GitHub, Metasploit, Burp Suite, Nessus, Kali Linux, Nmap, Wireshark, Aircrack-ng, IDA Freeware, MongoDB Atlas, Autopsy, OSINT Framework, JMeter, Shodan.

<b>Programming Languages:</b> Python, SQL, HTML/CSS.
`,
  linkedin: () => openLink("https://www.linkedin.com/in/harsh-jannawar"),
  github: () => openLink("https://github.com/Harshj143"),
  email: () => openLink("mailto:hjannawar@gmail.com"),
  projects: () => `
<b>OS Telemetry (May 2024)</b>:  
📌 Worked on the development of a live monitoring tool for Linux subsystems, researching and identifying appropriate tools for live monitoring. Crafted custom monitoring solutions using Bash scripting to configure tools tailored to our requirements, facilitating direct and secure data transmission to the cloud.  
📌 Utilized various monitoring tools, including Tshark for network analysis, Auditd for kernel auditing, Inotify for file system changes, and Sar for memory performance analysis. Implemented Iostat, Ioping, and Iotop for input/output operations, along with Top for real-time process monitoring. Directly sent all generated monitoring data to the cloud for storage.

<b>Red Teaming Framework Tool (Nov 2023)</b>:  
📌 Developed a comprehensive security tool for domain scanning, automating the discovery of subdomains using tools such as Sublist3r, Subfinder, and Assetfinder. Integrated live domain checks with Httprobe and employed LinkFinder and regex to extract JavaScript links for further analysis.  
📌 Employed Nmap to scan open ports. Utilized Nuclei to identify known vulnerabilities, and Wappalyzer for technology stack identification, Common Weakness Enumeration (CWE) effectively retrieving relevant Common Vulnerabilities and Exposures (CVEs). Automated the entire scanning process, with results securely stored in AWS S3 and MongoDB.
`,
};

export const COMMAND_NAMES = [...Object.keys(COMMANDS), "clear", "help"].sort(
  (a, z) => a.localeCompare(z)
);

export function getCommandResponse(
  { command, sudo, args }: Prompt,
  username: string,
  history: string[]
) {
  if (sudo && !command) return "Usage: sudo [command] [args]";
  if (!command) return "";

  if (command in COMMANDS) {
    let result = COMMANDS[command](username, args, history);
    if (command !== "kali") {
      result = result.replace(/\n/g, "<br/>");
    }

    return result;
  }

  if (command === "help") {
    return `Usage: [command] [options] 
    
      ${COMMAND_NAMES.join(", ")}`.replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);
  return `Redirecting to <a href="" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}
