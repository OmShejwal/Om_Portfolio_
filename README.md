# Om Raviraj Shejwal — Portfolio

Personal portfolio for Om Raviraj Shejwal, a final-year B.Tech student in Artificial Intelligence and Machine Learning. The site presents his work in AI/ML, workflow automation, and full-stack development.

It is a static site. There is no build step and no package install.

## Sections

- Hero, with a profile photo and role typewriter
- About
- Skills, with category filters
- Experience
- Projects, with category filters and an n8n workflow preview
- Achievements
- Education and certifications
- Contact form
- Footer

## Project structure

```
Om_Portfolio_/
  index.html                 Page content
  css/
    styles.css               Custom styles (glass cards, orbit, timeline)
  js/
    tailwind.config.js       Tailwind theme: fonts and animations
    main.js                  Page behavior
  assets/
    images/
      profile/               Profile photo
      projects/              Project screenshots
```

`main.js` handles the preloader, scroll progress, cursor glow, typewriter, stat counters, neural canvas, skill and project filters, the workflow modal, and the contact form.

## Run locally

From this folder:

```bash
python -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

Use a local server instead of opening `index.html` as a file. The contact form needs a normal page address so the request includes a referrer.

## Contact form

Messages are sent to `omshejwalfornda@gmail.com` through [FormSubmit](https://formsubmit.co/).

The first submission sends an activation email. Open that inbox, click **Activate Form**, and send the message again. After that, new messages arrive directly.

## External services

These load from the network when the page opens:

- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Font Awesome](https://fontawesome.com/)
- Google Fonts: Inter, Space Grotesk, and JetBrains Mono

The resume button opens the PDF on Google Drive. The file must be shared as **Anyone with the link**.

## Links

- GitHub: [github.com/OmShejwal](https://github.com/OmShejwal)
- LinkedIn: [linkedin.com/in/om-shejwal-2261a532a](https://www.linkedin.com/in/om-shejwal-2261a532a/)
- Email: [omshejwalfornda@gmail.com](mailto:omshejwalfornda@gmail.com)
