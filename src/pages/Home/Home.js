import React, {useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import LearnAbout from '../../components/LearnAbout/LearnAbout'
import Service from '../../components/Service/Service'
import JoinSession from '../../components/JoinSession/JoinSession'
import WhyRegister from '../../components/WhyRegister/WhyRegister'

const Home = ({title}) => {
  useEffect(() => {
    document.title = title
  });
  return (
    <div className="home__wrapper">
      <Slider/>
      <LearnAbout/>
      <Service/>
      <WhyRegister/>
      <JoinSession/>
    </div>
  )
}
export default Home