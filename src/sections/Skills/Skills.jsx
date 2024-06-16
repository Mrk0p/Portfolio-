import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import Reactimage from '../../assets/react-js.svg'
import Tailwindcss from '../../assets/tailwind-css.svg'
import Html from '../../assets/html.svg'
import Css from '../../assets/css.svg'
import Javascript from '../../assets/javascript.svg';
import Typescript from '../../assets/typescript.svg';
import Node from '../../assets/node-js.svg'
import Next from '../../assets/nextjs.svg'
import MongoDB from '../../assets/mongodb.svg'
import Redux from '../../assets/redux.svg'
import WebPackage from '../../assets/webpackage.png'
import Git from '../../assets/git.png'
import Bootstrap from '../../assets/bootstrap.png'

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={Html} skill="HTML" />
        <SkillList src={Css} skill="CSS" />
        <SkillList src={Javascript} skill="JavaScript" />
        <SkillList src={Typescript} skill="TypeScript" />
        <SkillList src={Node} skill="Node js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Reactimage} skill="React" />
        <SkillList src={Tailwindcss} skill="Tailwind CSS" />
        <SkillList src={Next} skill="Next js" />
        <SkillList src={MongoDB} skill="MongoDB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Redux} skill="Redux" />
        <SkillList src={WebPackage} skill="Webpack" />
        <SkillList src={Git} skill="Git" />
        <SkillList src={Bootstrap} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
