interface skill {
    name: string,
    filename: string,
    knowledge: number,
    negative?: boolean
}

export const skills: skill[] = [
    {
        name: "Javascript",
        filename: "logo_js.png",
        knowledge: 100
    },
    {
        name: "HTML",
        filename: "logo_html.png",
        knowledge: 100
    },
    {
        name: "CSS",
        filename: "logo_css.png",
        knowledge: 100
    },
    {
        name: "Sass",
        filename: "logo_sass.png",
        knowledge: 100
    },
    {
        name: "Git",
        filename: "logo_git.png",
        knowledge: 90
    },
    {
        name: "Express",
        filename: "logo_express.png",
        knowledge: 85
    },
    {
        name: "NodeJS",
        filename: "logo_node.png",
        knowledge: 90
    },
    {
        name: "MongoDB",
        filename: "logo_mongo.png",
        knowledge: 100
    },
    {
        name: "React",
        filename: "logo_react.png",
        knowledge: 90
    },
    {
        name: "NextJS",
        filename: "logo_nextjs.png",
        knowledge: 85,
        negative: true
    },
    {
        name: "Typescript",
        filename: "logo_ts.png",
        knowledge: 100
    },
    {
        name: "PHP",
        filename: "logo_php.png",
        knowledge: 100
    },
    {
        name: "Python",
        filename: "logo_py.png",
        knowledge: 70
    },
    {
        name: "Tensorflow",
        filename: "logo_tensorflow.png",
        knowledge: 55
    },
    {
        name: "AWS",
        filename: "logo_aws.png",
        knowledge: 70
    },
]