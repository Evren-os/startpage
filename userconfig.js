let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Chittagong, Bangladesh",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://search.brave.com/search?q=", "Brave"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.ph/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    s: "search-bar",
    q: "config-tab",
  },
  disabled: [],
  // localIcons: false,
  localIcons: true,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Pixel Portals",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com/",
              icon: "brand-facebook",
              icon_color: "#f38ba8",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
            {
              name: "instagram",
              url: "https://instagram.com",
              icon: "brand-instagram",
              icon_color: "#89b4fa",
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: "#cba6f7",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: "#cba6f7",
            },
            {
              name: "twitter",
              url: "https://twitter.com/home",
              icon: "brand-x",
              icon_color: "#cdd6f4",
            },
          ],
        },
        {
          name: "Synaptic Simulacra",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#f38ba8",
            },
            {
              name: "claude.ai",
              url: "https://claude.ai/",
              icon: "brand-snowflake",
              icon_color: "#cba6f7",
            },
            {
              name: "google-gemini",
              url: "https://gemini.google.com/app",
              icon: "circles",
              icon_color: "#89b4fa",
            },
            {
              name: "ideogram.ai",
              url: "https://ideogram.ai/",
              icon: "photo-ai",
              icon_color: "#fab387",
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/bg-5.gif",
      categories: [
        {
          name: "Ethereal Emporium",
          links: [
            {
              name: "torrentbd",
              url: "https://www.torrentbd.net/",
              icon: "clear-all",
              icon_color: "#fab387",
            },
            {
              name: "nyaa.si",
              url: "https://nyaa.si/",
              icon: "brand-funimation",
              icon_color: "#f38ba8",
            },
            {
              name: "katmoviehd",
              url: "https://katmoviehd.boo/",
              icon: "brand-netflix",
              icon_color: "#89b4fa",
            },
            {
              name: "subscene",
              url: "https://subscene.best/",
              icon: "badge-cc",
              icon_color: "#cba6f7",
            },
          ],
        },
        {
          name: "Nimbus Nexus",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: "#cba6f7",
            },
            {
              name: "proton-mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "atom-2",
              icon_color: "#f38ba8",
            },
            {
              name: "google-drive",
              url: "https://drive.google.com/drive/my-drive",
              icon: "brand-google-drive",
              icon_color: "#89b4fa",
            },
            {
              name: "onedrive",
              url: "https://vh1ts-my.sharepoint.com/personal/avrenos_vh1ts_onmicrosoft_com/_layouts/15/onedrive.aspx?view=1",
              icon: "brand-onedrive",
              icon_color: "#fab387",
            },
            {
              name: "mega",
              url: "https://mega.nz/",
              icon: "cloud-upload",
              icon_color: "#74c7ec",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/bg-4.gif",
      categories: [
        {
          name: "Cipher Sanctum",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#89b4fa",
            },
            {
              name: "tailwindcdd",
              url: "https://gitlab.com/",
              icon: "brand-tailwind",
              icon_color: "#fab387",
            },
            {
              name: "flathub",
              url: "https://flathub.org/",
              icon: "cube-plus",
              icon_color: "#89b4fa",
            },
            {
              name: "proton-pass",
              url: "https://pass.proton.me/u/0/",
              icon: "password",
              icon_color: "#fab387",
            },
            {
              name: "password-generator",
              url: "https://proton.me/pass/password-generator",
              icon: "key",
              icon_color: "#89b4fa",
            },
            {
              name: "nextdns",
              url: "https://my.nextdns.io/138d42/setup",
              icon: "server-cog",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "Quantum Quill",
          links: [
            {
              name: "cobalt.tools",
              url: "https://cobalt.tools/",
              icon: "world-download",
              icon_color: "#f38ba8",
            },
            {
              name: "maglit",
              url: "https://maglit.me/",
              icon: "unlink",
              icon_color: "#89b4fa",
            },
            {
              name: "excalidraw",
              url: "https://excalidraw.com/",
              icon: "drag-drop",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName("head")[0].appendChild(css);
})();
