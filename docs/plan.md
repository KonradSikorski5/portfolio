# Portfolio plan

Plan date: Nov 15, 2026. **Updated Nov 20, 2026** to follow the [IS117 Project Plan Guide](https://keithwilliams.org/is117-demo-days/process/project-plan/) (due Nov 23). It adds build order, a React idea, a framework choice, hosting, mobile, accessibility, and privacy, and search and sharing.

## Reader, goal, and evidence

**From my career research:** both roles I compared, Legora's Forward Deployed Engineer and EliseAI's Associate Solutions Engineer, ask for someone who can explain a problem step by step and find why something broke ([career comparison](https://konradsikorski5.github.io/fde-career-research/compare)).

- **Reader:** a recruiter or hiring manager looking for an **internship** in IT support, solutions engineering, or a similar customer-facing technical role.
- **Goal:** in under a minute, they find two of my projects, see what **I** did, and get to my résumé and profiles.
- **Evidence I can honestly show:**
  - My T-shirt store project (Full Shift): [repo](https://github.com/KonradSikorski5/is117-brand-studio-ks2334) · [live site](https://konradsikorski5.github.io/is117-brand-studio-ks2334/). Also its [help ticket](https://github.com/KonradSikorski5/is117-brand-studio-ks2334/blob/main/docs/help-ticket-size-focus.md), which shows a problem, steps, a fix, and a check.
  - Our group project (Exit Fresh) with Safwaan, showing my part separately from his: [repo](https://github.com/KonradSikorski5/is117-group-business) · [site](https://konradsikorski5.github.io/is117-group-business/). **Agreed split (Nov 15, [group issue #2](https://github.com/KonradSikorski5/is117-group-business/issues/2)):** I own Version A, the "What's inside" list, and the price summary. Safwaan owns Version B, the scent picker and refill, and checkout with order history.
  - My career research site: [site](https://konradsikorski5.github.io/fde-career-research/) · [repo](https://github.com/KonradSikorski5/fde-career-research).

These are **course projects**, not jobs. The portfolio will say so.

**Changed after review (#1):** project links now sit next to each project, the group split is spelled out, and GitHub, LinkedIn, and Résumé are in the top bar on every page.

## Brand brief

- **Promise:** "See what I built and how I checked it."
- **Voice:** plain, friendly, honest. It's the same voice as my T-shirt brand.
- **Main action:** open a project → see my part → open my résumé.

## Two page approaches

Both versions use the **same content** and the **same main action**. Only the order changes.

| | A. Projects first | B. Problem-solving first |
|---|---|---|
| Top of page | Short intro, then two project cards (T-shirt, group) | Short intro, then one "how I fix problems" example (the help ticket) |
| Then | My contribution in each project → résumé and profiles | Two project cards → my contribution → résumé and profiles |
| Why try it | Recruiters can see projects right away | It shows the skill both roles asked for (explaining a problem step by step) right away |
| Risk | The problem-solving example is further down | Projects are one scroll further down |

I'll build both at the Build step and have a classmate try the same task on each.

## User stories and checks (shared by A and B)

| ID | Story | Essential feature | Check (someone else can tell if it passes) |
|---|---|---|---|
| S1 | As a recruiter, I want to find two projects fast so I can look at real work. | F1: Two project cards (T-shirt and group) with a live site link and a repo link | From the home page, a classmate opens both project sites and both repos in under 1 minute without help |
| S2 | As a reviewer, I want to see what I personally did in the group project. | F2: A "My part" section in the group case study, separate from the team's work | A classmate can name one thing I did and one thing Safwaan did, using only the page |
| S3 | As a recruiter, I want my résumé and profiles so I can keep reviewing me. | F3: Links to my résumé, GitHub, and LinkedIn | All three links open the right thing (résumé readable, my real GitHub, my real LinkedIn) |
| S4 | As a hiring manager, I want one example of how I solve a problem. | F4: The help-ticket example: problem → steps → fix → check | A classmate can say what the problem was and how I checked the fix |

**Deferred (not building):** a blog, a contact form, animations, and made-up testimonials.

## Professional materials plan

| Item | Where it is now | Plan |
|---|---|---|
| GitHub profile | [github.com/KonradSikorski5](https://github.com/KonradSikorski5) (exists) | Add a short profile README and pin my 3 project repos |
| LinkedIn | [linkedin.com/in/konrad-sikorski-3406323b0/](https://www.linkedin.com/in/konrad-sikorski-3406323b0/) (exists). [Draft headline and About](/materials#linkedin-draft) | Update my headline and About to match the draft, and add my two projects |
| Résumé | **[Draft](/materials#resume-draft)** | One-page PDF in this repo: NJIT, relevant courses, and the 3 projects, with only true claims |
| T-shirt repo | [is117-brand-studio-ks2334](https://github.com/KonradSikorski5/is117-brand-studio-ks2334) | Link it from the T-shirt case study |
| Group repo | [is117-group-business](https://github.com/KonradSikorski5/is117-group-business) | Both Safwaan and I link the same shared repo |
| Portfolio repo | [portfolio](https://github.com/KonradSikorski5/portfolio) | This repo; the site gets built here |

## Data, states, and limits

- **Data:** static pages and links only. No forms, no database, no visitor data.
- **States:** home page loaded; project opened; résumé or profile opened.
- **Limits:** the group project is still in progress, so its case study will show only what's done and label the rest as planned. Course projects aren't work experience, and I won't present them that way.

## Build first, save for later

- **Build first:** S1 (two project sections with live and code links) and S3 (résumé, GitHub, and LinkedIn links). A recruiter's first job is finding real work and my résumé.
- **Save for later:** a short video walkthrough of each project.

## React idea from the documentary

The documentary ([React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44)) is about how a small team at Facebook built React around one idea: **build the page from small, reusable pieces (components), and let the page update itself when a value (state) changes.**

**On my portfolio:**

- **Component:** a project section is one reusable piece: title, links, who it's for, what I did, and what's next. Full Shift and Exit Fresh use the same piece with different information. Version A and Version B are even built from the same shared parts in a different order.
- **State:** the light/dark switch in the top bar. It's one value (light or dark) that changes when a visitor clicks it, and the whole page redraws in the new colors. The site also remembers the choice in the browser.

## Framework and libraries

I asked AI (Claude) to compare two frameworks for my main task: a recruiter opens my portfolio on GitHub Pages and finds my projects and résumé.

|  | Next.js | VitePress |
| --- | --- | --- |
| Static build for GitHub Pages | `output: 'export'` | Builds to `.vitepress/dist` by default |
| Writing pages | React components | Mostly Markdown, with Vue components when needed |
| Fit for my site | More power than a content site needs | Made for content pages like mine |

- **My choice: VitePress.** My portfolio is mostly text, links, and project write-ups, so writing pages in Markdown is fast and easy to keep up to date. It builds a static site that GitHub Pages can serve without running a server.
- **One tradeoff:** VitePress is made for content, not apps. If I wanted something app-like, such as a live project demo inside the portfolio, Next.js would handle it better. For now I link to my live projects instead.
- **AI claim I checked:** AI said that for a site at `username.github.io/repo/`, VitePress needs `base` set to `/repo/`. **Checked Nov 20 in the official [VitePress deploy docs](https://vitepress.dev/guide/deploy):** "if you're using Github … Pages and deploying to user.github.io/repo/, then set your base to /repo/." ✅ True. My config uses `base: '/portfolio/'`, and the live site works.
- **Libraries:** none. VitePress already includes navigation, search, and the light/dark switch.

## Hosting and storage

- **Hosting:** GitHub Pages at https://konradsikorski5.github.io/portfolio/. VitePress produces a static build (plain HTML, CSS, and JS files) that GitHub Pages serves without running my app on a server. It's published, and I check the links from the public URL.
- **What it stores:** nothing about visitors. The only thing saved is the light/dark choice, in the visitor's own browser (`vitepress-theme-appearance`). No forms, no accounts.

## Mobile, accessibility, and privacy

- **Task I'll test:** on a phone and with only the keyboard, find the T-shirt project, say what I did in the group project, and open my résumé.
- **Passing looks like:** text is readable without zooming, links are easy to tap, nothing runs off the screen, every focused link has a visible outline, and the menu opens on a phone.
- **One mistake and recovery:** a visitor opens an old or mistyped link. The site shows a "Page not found" page with a link back home instead of a blank error.
- **Images and fonts:** no photos. The only font is Inter, which comes with VitePress and is under the SIL Open Font License, so it's free to use.
- **Privacy:** I chose to publish only my name, school, a professional email, GitHub, and LinkedIn. There's no visitor tracking. Before collecting anything from visitors, like a contact form, I'd research what data I really need and how long to keep it (data minimization).

## Search, sharing, and one measure

- **Page title:** "Konrad Sikorski — IT Student Portfolio"
- **Description:** "NJIT Information Technology student. See my web projects, what I built, how I checked it, and my résumé."
- **Channel:** LinkedIn, where recruiters look.
- **Sample post:** "I just put my IS117 projects into one portfolio: a T-shirt store with a working checkout and a team car-care kit project. Each one shows what I built and how I tested it. Feedback welcome!"
- **Link preview sketch:** title "Konrad Sikorski — IT Student Portfolio" · description "Projects, what I built, and my résumé" · image: a screenshot of the Full Shift store.
- **After they click:** open a project, then my résumé.
- **One measure:** a classmate starts on the home page and tries to find the T-shirt project, my group part, and my résumé without help. I note how long it takes and where they get stuck. No analytics installed.

## AI help

I used **Claude** (Anthropic) to organize this plan and set up this site. The project links and facts are mine and were checked by opening each link.
