// config.js
module.exports = {
    github: {
        username: 'AnkushThakur27', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'ankush-thakur-900637ab',
        twitter: 'ankush-thakur',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: 'AWS Certified Solution Architect Associate. (9MWWLCBCHB4117C1)',
        website: 'https://github.com/AnkushThakur27',
        email: 'aankushthakur27@gmail.com'
    },
    skills: [
        'Java',
        'Spring Boot',
        'Kafka',
        'React.js',
        'MongoDB',
        'AWS',
        'Agile',
        'MicroServices',
        'Git',
        'Spark',
        'JUnit',
        'CI/CD',
        'DEVOPS',
    ],
    experiences: [
        { 
            company: 'Wipro Limited India',
            position: 'Sr.Software Engineer',
            from: '19 October 2020',
            to: 'Present'
        },
        { 
            company: 'CompuCom CSI (Office Depot)',
            position: 'Sr.Software Engineer',
            from: '31 Oct 2019',
            to: '16 Oct 2020'
        },
        { 
            company: 'Shanghai GP Menco Education Co., Ltd , Shanghai, China',
            position: 'Jr. Software Engineer',
            from: 'January 2019',
            to: ' June 2019'
        },
        {
            company: 'Infosys Limited, India',
            position: 'Sr.Technology Support Exe',
            from: 'July 2017 ',
            to: 'Oct 2018 '
        },
        {
            company: 'Lizhen Tech Private Ltd',
            position: 'Jr.Software Engineer',
            from: 'Aug 2015 ',
            to: 'July 2017'
        }
    ],
    education: [
        { 
            institution: 'University-Of-Pune',
            degree: '•Master Degree In Computer Application ',
            from: '2015',
            to: '2013'
        },
        {
            institution: 'SGBAU University',
            degree: 'Bachelor Degree In Computer Application ',
            from: '2008',
            to: '2012',
        },
        { 
            institution: 'Maharashtra Board',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2008',
            to: '2007',
        },
        { 
            institution: 'Maharashtra Board',
            degree: 'Secondary School Certificate (SSC)',
            from: '2006',
            to: '2005'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'AnkushThakur27',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'emerald',
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest'
        ]
    }
}