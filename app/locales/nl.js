export default {
  counterpart: {
    names: {
      days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      abbreviated_days: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
      abbreviated_months: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sept', 'okt', 'nov', 'dec'],
      am: 'a.m.',
      pm: 'p.m.'
    },
    pluralize: require('pluralizers/en'),

    formats: {
      date: {
        'default': '%a, %e %b %Y',
        long: '%A, %B %o, %Y',
        short: '%b %e'
      },

      time: {
        'default': '%H:%M',
        long: '%H:%M:%S %z',
        short: '%H:%M'
      },

      datetime: {
        'default': '%a, %e %b %Y %H:%M',
        long: '%A, %B %o, %Y %H:%M:%S %z',
        short: '%e %b %H:%M'
      }
    }

  },
  loading: '(Laden)',
  classifier: {
    back: 'Terug',
    backButtonWarning: 'Let op! Niet opgeslagen gegevens gaan verloren.',
    close: 'Sluiten',
    continue: 'Doorgaan',
    detailsSubTaskFormSubmitButton: 'OK',
    done: 'Afronden',
    doneAndTalk: 'Afronden & Bespreken',
    dontShowMinicourse: 'Verberg de uitleg in het vervolg.',
    letsGo: 'Laten we beginnen!',
    next: 'Volgende',
    optOut: 'Opt-out',
    taskTabs: {
      taskTab: 'Taak',
      tutorialTab: 'Uitleg'
    },
    recents: 'Je recente waarnemingen',
    talk: 'Overleg',
    taskHelpButton: 'Hulp nodig met deze taak?',
    miniCourseButton: 'Herhaal de uitleg',
    workflowAssignmentDialog: {
      promotionMessage: "Congratulations! You've unlocked the next workflow. If you prefer to stay on this workflow, you can choose to stay.",
      acceptButton: 'Take me to the next level!',
      declineButton: 'No, thanks'
    }
  },
  project: {
    language: 'Taal',
    loading: 'Project wordt geladen',
    disclaimer: 'Dit project is gemaakt met de Zooniverse projectbouwer maar nog geen officieel Zooniverse project. Vragen over het project die gestuurd worden aan het Zooniverseteam worden mogelijk niet beantwoord.',
    about: {
      header: 'Over',
      nav: {
        research: 'Onderzoek',
        results: 'Resultaten',
        faq: 'Veelgestelde vragen',
        education: 'Onderwijs',
        team: 'Het team',
      }
    },
    nav: {
      about: 'Over',
      classify: 'Annoteren',
      talk: 'Forum',
      collections: 'Verzamelingen',
      recents: 'Mijn waarnemingen',
      lab: 'Lab',
      adminPage: 'Administratie',
      underReview: 'Wacht op controle',
      zooniverseApproved: 'Goedgekeurd door Zooniverse'
    },
    classifyPage: {
      dark: 'donker',
      light: 'licht',
      title: 'Annoteren',
      themeToggle: 'Wissel naar %(theme)s thema'
    },
    home: {
      researcher: 'Citaat van de onderzoeker',
      about: 'Over %(title)s',
      metadata: {
        statistics: '%(title)s statistieken',
        classifications: 'Waarnemingen',
        volunteers: 'Vrijwilligers',
        completedSubjects: 'Voltooide taken',
        subjects: 'Taken'
      },
      talk: {
        zero: 'Niemand praat over **%(title)s** op dit moment.',
        one: '**1** persoon praat over **%(title)s** op dit moment.',
        other: '**%(count)s** mensen praten over **%(title)s** op dit moment.'
      },
      joinIn: 'Doe mee!',
      learnMore: 'Lees meer',
      getStarted: 'Beginnen',
      workflowAssignment: 'You\'ve unlocked %(workflowDisplayName)s',
      visitLink: 'Bezoek het project',
      links: 'Links'
    }
  },
  organization: {
    loading: 'Organisatie wordt geladen',
    error: 'Er ging iets mis bij het laden van de organisatie',
    notFound: 'Organisatie werd niet gevonden.',
    notPermission: 'Als je zeker weet dat de URL correct is, heb je wellicht geen toestemming om deze organisatie te zien.',
    pleaseWait: 'Een ogenblik geduld...',
    home: {
      projects: {
        loading: 'Projecten van deze organisatie worden geladen...',
        error: 'Er ging iets mis bij het laden van de projecten van deze organisatie.',
        none: 'Er zijn geen projecten voor deze organisatie.'
      },
      viewToggle: 'Bekijk als vrijwilliger',
      introduction: 'Introductie',
      readMore: 'Lees meer',
      readLess: 'Lees minder',
      links: 'Links'
    },
  },
  tasks: {
    less: 'Minder',
    more: 'Meer',
    shortcut: {
      noAnswer: "Geen antwoord"
    },
    survey: {
      clear: 'Wissen',
      clearFilters: 'Wis filters',
      makeSelection: 'Maak een keuze',
      showing: 'Toont %(count)s van %(max)s',
      confused: 'Word vaak verward met',
      dismiss: 'Sluiten',
      itsThis: 'Volgens mij het deze',
      cancel: 'Annuleren',
      identify: 'Selecteren',
      surveyOf: 'Waarneming van %(count)s',
      identifications: {
        zero: 'Geen waarnemingen',
        one: '1 waarneming',
        other: '%(count)s waarnemingen'
      }
    }
  },
  privacy: {
    title: 'Zooniverse Gebruikersovereenkomst en privacybeleid',
    userAgreement: {
      summary: '## User Agreement\n**Summary**\n\nThe Zooniverse is a suite of citizen science projects operated by the Citizen Science Alliance (CSA), which support scientific research by involving members of the public - you - in the processes of analyzing and discussing data. Data from these projects is used to study online community design and theory, interface design, and other topics. This document describes what will happen to your contributions if you choose to contribute and what data we collect, how we use it and how we protect it.',
      contribution: '**What you agree to if you contribute to the Zooniverse**\n\nProjects involving the public are needed to enable researchers to cope with the otherwise unmanageable flood of data. The web provides a means of reaching a large audience willing to devote their free time to projects that can add to our knowledge of the world and the Universe.\n\nThe major goal for this project is for the analyzed data to be available to the researchers for use, modification and redistribution in order to further scientific research. Therefore, if you contribute to the Zooniverse, you grant the CSA and its collaborators, permission to use your contributions however we like to further this goal, trusting us to do the right thing with your data. However, you give us this permission non-exclusively, meaning that you yourself still own your contribution.\n\nWe ask you to grant us these broad permissions, because they allow us to change the legal details by which we keep the data available; this is important because the legal environment can change and we need to be able to respond without obtaining permission from every single contributor.\n\nFinally, you must not contribute data to the Zooniverse that you do not own. For example, do not copy information from published journal articles. If people do this, it can cause major legal headaches for us.',
      data: '**What you may do with Zooniverse data**\n\nYou retain ownership of any contribution you make to the Zooniverse, and any recorded interaction with the dataset associated with the Zooniverse. You may use, distribute or modify your individual contribution in any way you like. However, you do not possess ownership of the dataset itself. This license does not apply to data about you, covered in the Privacy Policy.',
      legal: '**Legal details**\n\nBy submitting your contribution to the Zooniverse, you agree to grant the CSA a perpetual, royalty-free, non-exclusive, sub-licensable license to: use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and exercise all copyright and publicity rights with respect to your contribution worldwide and/or to incorporate your contribution in other works in any media now known or later developed for the full term of any rights that may exist in your contribution.\n\nIf you do not want to grant to the CSA the rights set out above, you cannot interact with the Zooniverse.\n\nBy interacting with the Zooniverse, you:\n\n* Warrant that your contribution contains only data that you have the right to make available to the CSA for all the purposes specified above, is not defamatory, and does not infringe any law; and\n\n* Indemnify the CSA against all legal fees, damages and other expenses that may be incurred by the CSA as a result of your breach of the above warranty; and\n\n* Waive any moral rights in your contribution for the purposes specified above.\n\nThis license does not apply to data about you, covered in the Privacy Policy.'
    },
    privacyPolicy: {
      intro: '## Privacy Policy\n\nIn addition to the contributions you make towards the scientific goals of the Zooniverse, we collect additional data about you to support and improve the operation of the project. We also conduct experiments on the design of the website that we evaluate based on your reactions and behavior. This Privacy Policy describes what data we collect, how we use it and how we protect it.\n\nWe respect the privacy of every individual who participates in the Zooniverse. We operate in accordance with the United Kingdom Data Protection Act 1998 and the Freedom of Information Act 2000, as well as with United States regulations regarding protection of human subjects in research.',
      data: '**Data we collect**\n\n_Identifying information_: If you register with the Zooniverse, we ask you to create a username and supply your e-mail address. Your e-mail address is not visible to other users, but others will see your username in various contexts. Notably, your username is associated with any classifications or other contributions you make, e.g., on Talk pages. You may optionally provide your real name to be included when we publically thank participants, e.g., in presentations, publications or discoveries.\n\n_Usage information_: We also monitor how people use our website, and aggregate general statistics about users and traffic patterns as well as data about how users respond to various site features. This includes, among other things, recording:\n\n* When you log in.\n\n* Pages you request.\n\n* Classifications you make.\n\n* Other contributions, such as posts on Talk pages.\n\nIf you register and log in, the logs associate these activities with your username. Otherwise, they are associated with your IP address. In order to collect this data, we may use software that collects statistics from IP data. This software can determine what times of day people access our site, which country they access the websites from, how long they visit for, what browser they are using, etc.',
      info: '**What we do with the information we gather**\n\nUsage information is collected to help us improve our website in particular for the following reasons:\n\n* Internal record keeping.\n\n* We may periodically send email promoting new research-related projects or other information relating to our research. Information about these contacts is given below. We will not use your contact information for commercial purposes.\n\n* We may use the information to customize the website.\n\n* We may use the information to conduct experiments regarding the use of various site features.',
      thirdParties: '**What is shared with third parties**\n\nWe will never release e-mail addresses to third parties without your express permission. We will also never share data we collect about you unless (a) it cannot be associated with you or your username, and (b) it is necessary to accomplish our research goals. Specifically, we may share your anonymized data with research study participants, other researchers, or in scholarly work describing our research. For example, we might use one of your classifications as an illustration in a paper, show some of your classifications to another user to see if they agree or disagree, or publish statistics about user interaction.\n\nContributions you make to the Talk pages are widely available to others. Aside from the above, information is held as confidentially as is practical within our secured database.',
      cookies: '**How we use cookies**\n\nIn some areas of our site, a cookie may be placed on your computer. A cookie is a small file that resides on your computer\'s hard drive that allows us to improve the quality of your visit to our websites by responding to you as an individual.\n\nWe use traffic log cookies to identify which pages are being used and improve our website. We only use this information for statistical analysis purposes, they are not shared with other sites and are not used for advertisements.\n\nYou can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, if you choose to decline cookies from the Zooniverse then functionality, including your ability to log-in and participate, will be impaired.\n\nAcceptance of cookies is implied if you continue to access our website without adjusting your browser settings.',
      dataStorage: '**Where we store your data**\n\nWe use Amazon Web Services so we can quickly and reliably serve our website to an unpredictable number of people. This means that your data will be stored in multiple locations, including the United States of America (USA). Amazon is a participant in the Safe Harbor program developed by the USA Department of Commerce and the European Union (EU). Amazon has certified that it adheres to the Safe Harbor Privacy Principles agreed upon by the USA and the EU.\n\nOur mailing list server, which contains a copy of subscribed email addresses and no other personal data, is hosted on a virtual private server with Linode in the UK.',
      security: '**Security measures**\n\nMembers of the research teams are made aware of our privacy policy and practices by reviewing this statement upon joining the team. We follow industry best practices to secure user data, and access to the database and logs are limited to members of the research group and system administrative staff.',
      dataRemoval: '**Removing your data**\n\nDue to the way in which we archive data, it is generally not possible to completely remove your personal data from our systems. However, if you have specific concerns, please contact us and we will see what we can do.',
      contactUser: '**When we will contact you**\n\nIf you do not register, we will never contact you. If you do register, we will contact you by e-mail in the following circumstances:\n\n* Occasionally, we will send e-mail messages to you highlighting a particular aspect of our research, announcing new features, explaining changes to the system, or inviting you to special events.\n\n* We may also use your information to contact you for the purpose of research into our site\'s operation. We may contact you by email. We may ask for additional information at that time. Providing additional information is entirely optional and will in no way affect your service in the site.\n\n* We may contact you with a newsletter about the progress of the project.\n\nYou are unlikely to receive more than two messages per month.\n\nYou can \'opt out\' of the newsletter at any time by visiting the Zooniverse [unsubscribe](https://www.zooniverse.org/unsubscribe) page.',
      furtherInfo: '**Further information and requests**\n\nThe Data Controller is the Department of Physics, University of Oxford. For a copy of the information we hold on you please contact the project team at the address below:\n\nProfessor Chris Lintott\nOxford Astrophysics\nDenys Wilkinson Building\nKeble Road\nOxford, OX1 3RH\nUnited Kingdom'
    },
    youthPolicy: {
      title: 'Advice for Volunteers Under 16 Years Old and Their Parent/Guardian',
      content: 'Please note that it is the parents’/guardians’ responsibility to explain the user agreement and privacy policy in simple terms to their child if signing up under 16s. There is no minimum age for signing up children as Zooniverse would like to encourage public engagement with research for all ages, though the platform may be more suitable for older children. Parents and guardians must supervise children if they are contributing to any message boards.'
    }
  },
  security: {
    title: 'Zooniverse Beveiligingsbeleid',
    intro: 'The Zooniverse takes very seriously the security of our websites and systems, and protecting our users and their personal information is our highest priority. We take every precaution to ensure that the information you give us stays secure, but it is also important that you take steps to secure your own account, including:\n\n* Do not use the same password on different websites. The password you use for your Zooniverse account should be unique to us.\n* Never give your password to anyone. We will never ask you to send us your password, and you should never enter your Zooniverse password into any website other than ours. Always check your browser\'s address bar to make sure you have a secure connection to _www.zooniverse.org_.\n\nFor general advice and information about staying safe online, please visit:\n\n* [Get Safe Online](https://www.getsafeonline.org)\n* [Stay Safe Online](https://www.staysafeonline.org)\n* [US-CERT - Tips](https://www.us-cert.gov/ncas/tips)',
    details: '## Reporting Security Issues\n\nThe Zooniverse supports [responsible disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure) of vulnerabilities. If you believe you have discovered a security vulnerability in any Zooniverse software, we ask that this first be reported to [security@zooniverse.org](mailto:security@zooniverse.org) to allow time for vulnerabilities to be fixed before details are published.\n\n## Known Vulnerabilities and Incidents\n\nWe believe it is important to be completely transparent about security issues. A complete list of fixed vulnerabilities and past security incidents is given below:\n\n* December 11, 2018: [Cross-Site Scripting Vulnerability on Project Page\'s External Links](https://blog.zooniverse.org/2018/12/20/fixed-cross-site-scripting-vulnerability-on-project-pages-external-links/)\n\n* June 21, 2018: [Cross-site scripting on project home pages](https://blog.zooniverse.org/2018/07/03/fixed-cross-site-scripting-vulnerability-on-project-home-pages/)\n\nNew vulnerabilities and incidents will be announced via the [Zooniverse blog in the "technical" category](http://blog.zooniverse.org/category/technical/).'
  },
  userAdminPage: {
    header: 'Administratie',
    nav: {
      createAdmin: 'Beheer gebruikers',
      projectStatus: 'Wijzig projectstatus',
      grantbot: 'Grantbot',
      organizationStatus: 'Wijzig organisatiestatus'
    },
    notAdminMessage: 'Je bent geen beheerder',
    notSignedInMessage: 'Je bent niet ingelogd'
  },
  signIn: {
    title: 'Inloggen/registreren',
    withZooniverse: 'Log in met je Zooniverse account',
    whyHaveAccount: 'Ingelogde vrijwilligers kunnen hun eigen waarnemingen bijhouden en worden vermeld in publicaties.',
    signIn: 'Inloggen',
    register: 'Registreren',
    orThirdParty: 'Of log in met een andere dienst',
    withFacebook: 'Log in met Facebook',
    withGoogle: 'Log in met Google'
  },
  notFoundPage: {
    message: 'Niet gevonden'
  },
  resetPassword: {
    heading: 'Wachtwoord vergeten',
    newPasswordFormDialog: 'Voer hetzelfde wachtwoord twee keer in om de toegang tot je account te herstellen. Een wachtwoord moet tenminste 8 tekens lang zijn.',
    newPasswordFormLabel: 'Nieuw wachtwoord:',
    newPasswordConfirmationLabel: 'Herhaal, ter controle:',
    enterEmailLabel: 'Voer het e-mailadres in waarop je een link wilt ontvangen om je wachtwoord te herstellen.',
    emailSuccess: 'We hebben je zojuist een e-mail met een herstellink gestuurd.',
    emailError: 'Er ging iets mis bij het herstellen van je wachtwoord.',
    passwordsDoNotMatch: 'De wachtwoorden komen niet overeen, probeer het alstublieft opnieuw.',
    loggedInDialog: 'Je bent op dit moment ingelogd. Log uit om je wachtwoord te herstellen.',
    missingEmailsSpamNote: 'Als je geen e-mail hebt ontvangen, controleer dan of het bericht wellicht in je spamfolder terecht is gekomen.',
    missingEmailsAlternateNote: 'Als je nog steeds geen e-mail ontvangen hebt, controleer dan of je misschien een ander e-mailadres voor je Zooniverse account hebt gebruikt.'
  },
  workflowToggle: {
    label: 'Actief'
  },
  collections: {
    createForm: {
      private: 'Privé',
      submit: 'Maak verzameling'
    }
  },
  about: {
    publications: {
      nav: {
        showAll: 'Show All',
        space: 'Space',
        physics: 'Physics',
        climate: 'Climate',
        humanities: 'Humanities',
        nature: 'Nature',
        medicine: 'Medicine',
        meta: 'Meta',
      },
      content: {
        header: {
          showAll: 'All Publications'
        },
        submitNewPublication: 'To submit a new publication or update an existing one, please use [this form](https://docs.google.com/forms/d/e/1FAIpQLSdbAKVT2tGs1WfBqWNrMekFE5lL4ZuMnWlwJuCuNM33QO2ZYg/viewform). We aim to post links to published papers that can be accessed by the public. Articles accepted for publication but not yet published are also fine.'
      },
      publication: {
        viewPublication: 'View publication.',
        viewOpenAccess: 'View open access version.'
      }
    },
    team: {
      nav: {
        showAll: 'Show All',
        oxford: 'Oxford',
        chicago: 'The Adler Planetarium',
        minnesota: 'Minnesota',
        portsmouth: 'Portsmouth',
        california: 'California',
        hilo: 'Hilo',
        alumni: 'Alumni'
      },
      content: {
        header: {
          showAll: 'Zooniverse Team'
        },
        adamMcMaster: {
          title: 'Infrastructure Engineer',
          bio: `Adam is responsible for managing the Zooniverse's web hosting infrastructure.,
          He has a computer science degree and has worked in web hosting and development for many years.
          He's also working on a degree in astronomy with the OU.`
        },
        alexBowyer: {
          title: 'Web Science Architect',
          bio: `Alex worked remotely for Zooniverse from his home in Northumberland.
          He designed and ran Zooniverse experiments and developed infrastructure and front-end code. Alex
          is a Dad of three, an improv player, a board gamer, and is running five half-marathons in 2016.`
        },
        alexWeiksnar: {
          title: 'Developer',
          bio: `Alex previously attended University of Miami, where he studied Psychology,
          Biology, and English. Alex enjoys reading, coding, and sailing in his free time.`
        },
        aliSwanson: {
          title: 'Researcher',
          bio: `Ali spent most of her PhD chasing lions around the Serengeti. She finished
          her PhD in Ecology, Evolution, and Behavior at the University of Minnesota in 2014,
          and joined the Zooniverse as a Postdoc in Ecology and Citizen Science.`
        },
        amyBoyer: {
          title: 'Developer',
          bio: `Amy has been a Zooniverse developer at the Adler since November 2015. She holds a BS and
          MS in computer science and has over a decade of industry experience. An aspiring astronomer as
          a child, she couldn't be happier to have landed here.`
        },
        andreaSimenstad: {
          title: 'Developer',
          bio: `Andrea joined Zooniverse as a developer at the University of Minnesota in 2015. When she is not captivated by code, she can be found enjoying snow on skis and exploring lakes by kayak. She graduated from Carleton College with a degree in Cognitive Science.`
        },
        arfonSmith: {
          title: 'Technical Lead',
          bio: `Arfon was co-founder and Technical Lead of the Zooniverse for the first five years of the project.
          Arfon served as Director of Citizen Science at the Adler Planetarium and co-lead of the Zooniverse until fall 2013.`
        },
        beckyRother: {
          title: 'Visual Designer',
          bio: `Becky joined the Zooniverse team as designer in 2017. With a background in mobile apps and product design and a degree in journalism, she's excited to use her powers for good with the Zooniverse team.`
        },
        beverleyNewing: {
          title: 'Web Developer Intern',
          bio: `Beverley is an English and German literature graduate and worked as a Web Developer Intern at Zooniverse. In her spare time she's an avid fan of geese and enjoys motorbiking.`
        },
        brianCarstensen: {
          title: 'UX Developer',
          bio: `Brian Carstensen moved from Chicago to Oxford and back again. Brian has a degree
          in graphic design from Columbia College in Chicago, and worked in that field for a
          number of years before finding a niche in web development.`
        },
        brookeSimmons: {
          title: 'Researcher',
          bio: `Brooke is an astrophysicist studying black holes, galaxies, and how citizen
          science can be applied to other non-traditional problems.`
        },
        camAllen: {
          title: 'Developer',
          bio: `Responsible for building the Zooniverse's API infrastructure.
          Cam considers himself a music and fine wine connoisseur - others do not.
          In his spare time he enjoys playing an obscure form of rugby.`
        },
        chrisLintott: {
          title: 'Zooniverse PI',
          bio: `Astronomer and co-founder of both Galaxy Zoo and the Zooniverse that grew from it,
          Chris is interested in how galaxies form and evolve, how citizen science can change the
          world, and whether the Chicago Fire can get their act together.`
        },
        chrisSnyder: {
          title: 'Project Manager',
          bio: `Chris Snyder began working on the Zooniverse team in fall 2012 as a web developer. In July 2013,
          he became the technical project manager. He received a degree in computer science from the University of Dayton.`
        },
        christopherDoogue: {
          title: 'Project Assistant',
          bio: `Chris supported the Zooniverse Oxford team from 2014-16. He had been with the Department
          of Astrophysics for over 2 years administratively supporting various projects. A former trained actor,
          he has the ability to look like he's smiling in the face of adversity!`
        },
        colemanKrawczyk: {
          title: 'Data Scientist',
          bio: `Coleman is helping to create new data analysis and visualization tools for existing Zooniverse
          projects as well as identifying new projects within the University of Portsmouth. He received
          his PhD in astrophysics from Drexel University.`
        },
        darrenMcRoy: {
          title: 'Community Manager',
          bio: `Darren (DZM) served as a liaison to the Zooniverse community and assisted with strategic
          content for projects. A Northwestern University graduate in journalism, he is also a golf addict,
          amateur author, and hopeless animal lover.`
        },
        darrylWright: {
          title: 'Researcher',
          bio: 'Darryl is doing machine learning research with the Zooniverse, based in Minnesota.'
        },
        grantMiller: {
          title: 'Communications Lead',
          bio: `A former exoplanetary scientist, Grant is now responsible for communicating with our volunteers and researchers. He is also behind the Zooniverse's presence on
          social media and publishes the Daily Zooniverse blog.`
        },
        hannahSewell: {
          title: 'Web Development placement student',
          bio: `Hannah is a PhD student in plant genetics from The University of Sheffield.
          She is visiting Zooniverse on a placement to learn web development for a few months and is definitely not an intern.`
        },
        helenSpiers: {
          title: 'Researcher',
          bio: `After finishing a PhD studying the molecular basis of human brain development, Helen joined the Zooniverse as a Postdoc in citizen science and medical research.`
        },
        gregHines: {
          title: 'Data Scientist',
          bio: `Greg used machine learning and statistics to help projects analyse their volunteer
          classifications. He has a PhD in Computer Science from University of Waterloo, Canada.
          Greg loves to eat pancakes with real maple syrup and run ultramarathons.`

        },
        heathVanSingel: {
          title: 'Designer',
          bio: `Heath was the UX/UI Designer at the Zooniverse where he worked to craft thoughtful and
          engaging user experiences. Apart from design, Heath also enjoys illustration, a good sci-fi or fantasy
          novel, and exploring his new home in the Pacific Northwest.`
        },
        hughDickinson: {
          title: 'Researcher',
          bio: `Hugh is a postdoc studying the Zooniverse.`
        },
        jamesArtz: {
          title: 'Developer',
          bio: `James joined the Zooniverse team in 2017. Before discovering his passion for code,
          he received a Ph.D in Mediterranean Archaeology from SUNY Buffalo, focusing on ancient Greece.
          In his free time he enjoys wood working and the ancient art of fermentation.`
        },
        jimODonnell: {
          title: 'UX Developer',
          bio: `Professional cynic but his heart's not in it. Web developer for the Zooniverse,
          Web Standards organiser, Amnesty UK activist.`
        },
        jenGupta: {
          title: 'Educator',
          bio: `Jen works on Galaxy Zoo education in her role as the SEPnet/Ogden Outreach Officer
          for the Institute of Cosmology and Gravitation, and has a PhD in astrophysics. Active
          galactic nuclei were her first love.`
        },
        jordanMartin: {
          title: 'Visual Designer',
          bio: `Jordan joined at the Adler Planetarium as Zooniverse's Visual Designer
          starting in 2015. She spent her time making our user interfaces beautiful,
          engaging, and a rewarding experience. At home she spends time with her
          two cats and many houseplants.`
        },
        julieFeldt: {
          title: 'Educator',
          bio: `Julie has a background in space physics and museum studies. She works on educational
          experiences, and Skype in the Classroom lessons for the Zooniverse. She loves to run, mostly
          to compensate for her love of cupcakes and chocolate.`
        },
        karenMasters: {
          title: 'Researcher',
          bio: `Karen is an astronomer and the Project Scientist of Galaxy Zoo, which she's been
          involved in as a researcher since 2008. She's particularly interested in the evolution of
          spiral galaxies.`
        },

        kellyBorden: {
          title: 'Educator',
          bio: `With a background in museum education, Kelly joined the Zooniverse in 2011 to bring
          an educator's perspective and spread the word amongst teachers and students. She's fond of
          several C's: chocolate, cats, coffee, and more chocolate.`
        },
        kyleWillett: {
          title: 'Researcher',
          bio: `Kyle is an astronomer who studies galaxies, masers, and black holes (although he's
          been getting more into data science). He worked on both Galaxy Zoo and Radio Galaxy Zoo,
          and developed advanced tools for the volunteers.`
        },
        lauraTrouille: {
          title: 'Zooniverse co-I',
          bio: `In July 2015, Laura became Director of Citizen Science at the Adler Planetarium and
          co-I of the Zooniverse. While earning her Ph.D. in 2010 studying galaxy evolution,
          she embodied cosmic collisions as a roller derby queen aptly named ‘The Big Bang’.`
        },
        lauraWhyte: {
          title: 'Adler Planetarium Zooniverse Director',
          bio: `Laura was the Director of Citizen Science at Adler Planetarium and co-lead of the
          Zooniverse from fall 2013 to summer 2015.`

        },
        lucyFortson: {
          title: 'University of Minnesota Zooniverse Director',
          bio: `Associate Professor of Physics and Astronomy at the University of Minnesota. One of the Zooniverse
          co-founders, she helps with project wrangling (aka management) and strategic planning while trying
          to squeeze a bit of galaxy evolution science in.`
        },
        mariamSaeedi: {
          title: 'Web Developer Intern',
          bio: `Mariam is the 2017 Web Development Intern at Zooniverse.
          She is proficient with HTML and CSS and is currently learning JavaScript and Rails.`
        },
        markBouslog: {
          title: 'Developer',
          bio: `Mark is a front-end web developer for the Zooniverse team at the Adler Planetarium. Joining in
          November 2015 from a career in accounting, he’s thrilled to focus his number crunching to 1’s and 0’s
          and is constantly inspired and humbled by the power of programming, citizen science and coffee.`
        },
        martenVeldthuis: {
          title: 'Developer',
          bio: `Marten joined the development team in 2015. He has a degree in
          computer science and enjoys crafting maintainable software. Marten learned about orbital
          mechanics from Kerbal Space Program, and feels like he's therefore basically an astrophysicist.`
        },
        megSchwamb: {
          title: 'Researcher',
          bio: `Meg is a planetary scientist and astronomer involved in the Planet Four projects,
          and Comet Hunters for which she is project scientist. She studies small bodies in the
          Solar System, exoplanets, and Mars. Meg has a fondness for baking, soccer, and champagne.`
        },
        melanieBeck: {
          title: 'Researcher',
          bio: `A PhD student at the University of Minnesota, Melanie works on combining machine learning
          with volunteer votes for classification tasks on the Galaxy Zoo project with the goal of classifying
          *billions* of galaxies that future telescopes will see.`
        },
        michaelParrish: {
          title: 'Rails/Backend Developer',
          bio: `Software developer at the Zooniverse. He pwns databases daily. Dog, fishing, snakes, and bourbon.`
        },
        noahMalmed: {
          title: 'Mobile App Developer',
          bio: `Noah mainly has a background in mobile app development as well as some firmware and backend experience.
          Outside of work, Noah enjoys cooking, baking and climbing.`
        },
        perryRoper: {
          title: 'Developer',
          bio: 'Perry was a developer with the Zooniverse, based in Oxford.'
        },
        rebeccaSmethurst: {
          title: 'Researcher',
          bio: `Becky is an astrophysicist working towards her doctorate in Oxford. She is
          interested in how galaxies change over time and how we can track this evolution.
          Happy-go-lucky about outreach, the Zooniverse and everything.`
        },
        robinSchaaf: {
          title: 'Mobile App Developer',
          bio: `Robin has a background in web development for educational institutions.  In her free time she enjoys board games and playing bass guitar.`
        },
        robertSimpson: {
          title: 'Developer',
          bio: `Robert was one of the founding developers of the Zooniverse, based in Oxford.
          If you can keep your head when all around you are losing theirs, you are probably
          Rob Simpson.`
        },
        rogerHutchings: {
          title: 'Developer',
          bio: `Roger builds front end interfaces for the Zooniverse, and enjoys coding, music and rebuilding
          motorbikes in his spare time.`
        },
        ronaCostello: {
          title: 'Web Development placement student',
          bio: `Rona is a PhD student studying plant evolution at Oxford and has joined the Zooniverse to get some web development experience for a few months.
          Enjoys movies, board games and hanging out under the sea.`
        },
        samanthaBlickhan: {
          title: 'IMLS Postdoctoral Fellow',
          bio: `Samantha Blickhan is the IMLS Postdoctoral Fellow in the Department of Citizen Science at the Adler Planetarium, working on transcription projects for the Zooniverse. She received her Ph.D. in Musicology from Royal Holloway, University of London, with a thesis on the palaeography of British song notation in the 12th and 13th centuries. Her research interests include music and perception, and their relationships with writing systems, technology and pedagogy.`
        },
        samuelAroney: {
          title: 'Web Development placement student',
          bio: `Samuel is a DPhil student studying the swimming behaviour of soil bacteria at Oxford.
          He joined Zooniverse to learn professional coding skills and perhaps build something useful.`
        },
        sandorKruk: {
          title: 'Researcher',
          bio: `Sandor is a graduate student working on his PhD in Astrophysics at Oxford.
          He is looking at how galaxies evolve using data from Galaxy Zoo and enjoys stargazing,
          using telescopes, and dancing in his free time.`
        },
        sarahAllen: {
          title: 'Developer',
          bio: `Sarah Allen is a front-end web developer for the Zooniverse team at the Adler
          Planetarium starting in September 2014. She also has a degree in music and enjoys cooking
          and live concerts in her free time.`
        },
        saschaIshikawa: {
          title: 'Developer',
          bio: `Sascha joined the Zooniverse team in November 2013 as a front-end developer.
          A former researcher and software developer at NASA Ames, he received degrees in both
          computer science and mechanical engineering.`
        },
        shaunANoordin: {
          title: 'Developer',
          bio: `Shaun was raised by Nintendo consoles and somehow transformed his love
          for video games into a love for creating interactive experiences. When not at
          his PC playing games or reading comics, he's at his PC studying web design and
          coding experimental apps.`
        },
        simoneDuca: {
          title: 'Developer',
          bio: `Simone joined the Zooniverse in 2015 as a frontend developer. In a previous life, he received a Phd in logic and philosophy
          from Bristol. After moving "Up North", he joined another worthy cause in 2018.`
        },
        stuartLynn: {
          title: 'Developer',
          bio: `Stuart arrived at the Adler as a developer in July 2011, having been one of the founding
          developers at Oxford. He studied mathematical physics at Edinburgh University and received his doctorate
          in astrophysics from Royal Observatory Edinburgh. Data analysis maestro and web developer.`
        },
        steveRaden: {
          title: 'Developer',
          bio: 'Steve Raden was a developer at the Adler in Chicago.'
        },
        veronicaMaidel: {
          title: 'Data Scientist',
          bio: `Veronica is a Data Scientist who worked on discovering patterns in Zooniverse data, by manipulating
          it and using it to create machine learning models. She received a PhD in Information Science and Technology
          from Syracuse University.`
        },
        victoriaVanHyning: {
          title: 'Researcher',
          bio: `Victoria is a British Academy postdoctoral fellow in English at Oxford, and is the humanities PI
          at Zooniverse. She works on Science Gossip, Annotate, and Shakespeare's World and more. Coffee is her lifeblood.`
        },
        willGranger: {
          title: 'Developer',
          bio: `Will joined the Adler Planetarium in 2016 as a front-end developer for the Zooniverse.
          In the past, he has taught English overseas, toured in bands, and helped open a music venue in Alabama.`
        },
        zachWolfenbarger: {
          title: 'Developer',
          bio: `Zach is a software developer. He was a molecular biologist, but then the lab needed some code
          to be written and the die was cast. He’s also in a couple of bands and can be found playing shows at bars
          and comic conventions all over the midwest.`
        }
      }
    }
  },
  userSettings: {
    account: {
      displayName: 'Display name (required)',
      displayNameHelp: 'How your name will appear to other users in Talk and on your Profile Page',
      realName: 'Real name (optional)',
      realNameHelp: 'Public; we’ll use this to give acknowledgement in papers, on posters, etc.',
      changePassword: {
        heading: 'Change your password',
        currentPassword: 'Current password (required)',
        newPassword: 'New password (required)',
        tooShort: 'That’s too short',
        confirmNewPassword: 'Confirm new password (required)',
        doesntMatch: 'These don’t match',
        change: 'Change'
      }
    },
    profile: {
      dropImage: 'Drop an image here (or click to select).',
      changeAvatar: 'Change avatar',
      avatarImageHelp: 'Drop an image here (square, less than %(size)s KB)',
      clearAvatar: 'Clear avatar',
      changeProfileHeader: 'Change profile header',
      profileHeaderImageHelp: 'Drop an image here (any dimensions, less than %(size)s KB)',
      clearHeader: 'Clear header'
    }
  }
};
