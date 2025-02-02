import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import CourseInfo from '../../components/CourseInfo/CourseInfo'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {useParams} from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import 'react-calendar/dist/Calendar.css';
import formations from '../../data/formations'

const ClassesDetails = () => {
  const { slug } = useParams();
  const formation = formations.find(f => f.slug === slug);

  return (
    <>
      <Bradcrumb title={formation.certificate} title1={formation.title}/>
      <div className="eventsdetails__wrapper padding__top__botton">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="events__detils__left">
                <h3>Présentation de la formation</h3>
                <div className="course__details">
                  <Tabs>
                    <TabList>
                      <Tab>OBJECTIFS ET PROGRAMME</Tab>
                      <Tab>DURÉE, MODALITÉS ET DÉLAI D'ACCÈS</Tab>
                      <Tab>MODALITÉS PÉDAGOGIQUES</Tab>
                      <Tab>MODALITÉS D'ÉVALUATIONS</Tab>
                    </TabList>

                    <TabPanel>
                      <div dangerouslySetInnerHTML={{ __html: formation.objectif }} />
                    </TabPanel>
                    <TabPanel>
                      <div dangerouslySetInnerHTML={{ __html: formation.acces }} />
                    </TabPanel>
                    <TabPanel>
                      <div dangerouslySetInnerHTML={{ __html: formation.pedagogique }} />
                    </TabPanel>
                    <TabPanel>
                      <div dangerouslySetInnerHTML={{ __html: formation.evaluation }} />
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="events__detils__right">
                <CourseInfo informations={formation.informations}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ClassesDetails