import styles from '../styles/home/Home.module.scss'
import MainLayout from '../layouts/MainLayout'
import Main from '../components/home/Main'
import Projects from '../components/home/Projects'
import HowWeWorks from '../components/home/HowWeWorks'
import FormStartWork from '../components/home/FormStartWork'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
interface Props {}

const Home = ({}: Props) => {
  return (
    <>
      <div className={styles.global_wrapper}>
        <Header />
        <Main />
        <Projects />
        <HowWeWorks />
        <FormStartWork />
        <Footer />
      </div>
    </>
  )
}
export default Home
