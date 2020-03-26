
import Page from 'components/Page';
import Agencies from './Agencies/List';
import React from 'react';
import { Line } from 'react-chartjs-2';
import * as _ from 'lodash';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Badge,
  Row,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import {
  MdPersonPin,
} from 'react-icons/md';


class DashboardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeCase: 0,
      Cases: [
        {
        case: '1',
        data: {
          labels: ['John Doe Medical Office', 'Linda Hospital', 'Bread Hospital', 'Dan Hospital', 'Steve Hospital', 'Care Hospital', 'Medaid Hospital'],
          datasets: [
            {
              label: 'Contribution this year',
              borderColor: '#6a82fb',
              backgroundColor: '#6a82fb',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
    
            {
              label: 'Contribution last year',
              borderColor: '#fc5c7d',
              backgroundColor: '#fc5c7d',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area',
          },
          tooltips: {
            intersect: false,
            mode: 'nearest',
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                  labelString: 'Agencies',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Contributions',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
        agenciesInvolved: [
          {
            id: 1,
            name: 'John Doe Medical Office',
            date: '3 month ago',
            progress: 10,
            isActive: true,
          },
          {
            id: 2,
            name: 'Linda Hospital',
            date: '1 year ago',
            progress: 30,
            isActive: true,
          },
          {
            id: 3,
            name: 'Bread Hospital',
            date: '2 hour ago',
            progress: 50,
            isActive: false,
          },
          {
            id: 4,
            name: 'Dan Hospital',
            date: 'a month ago',
            progress: 60,
            isActive: true,
          },
          {
            id: 5,
            name: 'Steve Hospital',
            date: '6 months ago',
            progress: 70,
            isActive: true,
          },
          {
            id: 6,
            name: 'Medaid Hospital',
            date: '2 years ago',
            progress: 90,
            isActive: false,
          },
        ]
      },


      {
        case: '2',
        data: {
          labels: ['Dan Hospital', 'Steve Hospital', 'Care Hospital', 'Medaid Hospital'],
          datasets: [
            {
              label: 'Contribution this year',
              borderColor: '#6a82fb',
              backgroundColor: '#6a82fb',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
    
            {
              label: 'Contribution last year',
              borderColor: '#fc5c7d',
              backgroundColor: '#fc5c7d',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area',
          },
          tooltips: {
            intersect: false,
            mode: 'nearest',
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                  labelString: 'Agencies',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Contributions',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
        agenciesInvolved: [
          {
            id: 1,
            name: 'Dan Hospital',
            date: '3 month ago',
            progress: 10,
            isActive: true,
          },
          {
            id: 2,
            name: 'Steve Hospital',
            date: '2 hour ago',
            progress: 50,
            isActive: true,
          },
          {
            id: 3,
            name: 'Care Hospital',
            date: 'a month ago',
            progress: 60,
            isActive: false,
          },
          {
            id: 4,
            name: 'Medaid Hospital',
            date: '6 months ago',
            progress: 70,
            isActive: true,
          },
        ]
      },


      {
        case: '3',
        data: {
          labels: ['John Doe Medical Office', 'Linda Hospital', 'Bread Hospital', 'Dan Hospital'],
          datasets: [
            {
              label: 'Contribution this year',
              borderColor: '#6a82fb',
              backgroundColor: '#6a82fb',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
    
            {
              label: 'Contribution last year',
              borderColor: '#fc5c7d',
              backgroundColor: '#fc5c7d',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area',
          },
          tooltips: {
            intersect: false,
            mode: 'nearest',
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                  labelString: 'Agencies',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Contributions',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
        agenciesInvolved: [
          {
            id: 1,
            name: 'John Doe Medical Office',
            date: '3 month ago',
            progress: 10,
            isActive: false,
          },
          {
            id: 2,
            name: 'Linda Hospital',
            date: 'a month ago',
            progress: 60,
            isActive: true,
          },
          {
            id: 3,
            name: 'Bread Hospital',
            date: '6 months ago',
            progress: 70,
            isActive: true,
          },
          {
            id: 4,
            name: 'Dan Hospital',
            date: '2 years ago',
            progress: 90,
            isActive: true,
          },
        ]
      },


      {
        case: '4',
        data: {
          labels: ['John Doe Medical Office', 'Linda Hospital', 'Bread Hospital', 'Dan Hospital', 'Steve Hospital'],
          datasets: [
            {
              label: 'Contribution this year',
              borderColor: '#6a82fb',
              backgroundColor: '#6a82fb',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
    
            {
              label: 'Contribution last year',
              borderColor: '#fc5c7d',
              backgroundColor: '#fc5c7d',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area',
          },
          tooltips: {
            intersect: false,
            mode: 'nearest',
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                  labelString: 'Agencies',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Contributions',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
        agenciesInvolved: [
          {
            id: 1,
            name: 'John Doe Medical Office',
            date: '3 month ago',
            progress: 10,
            isActive: true,
          },
          {
            id: 2,
            name: 'Linda Hospital',
            date: 'a month ago',
            progress: 60,
            isActive: true,
          },
          {
            id: 3,
            name: 'Bread Hospital',
            date: '6 months ago',
            progress: 70,
            isActive: false,
          },
          {
            id: 4,
            name: 'Dan Hospital',
            date: '3 month ago',
            progress: 10,
            isActive: true,
          },
          {
            id: 5,
            name: 'Steve Hospital',
            date: '2 hour ago',
            progress: 50,
            isActive: true,
          },
        ]
      },

      {
        case: '5',
        data: {
          labels: ['John Doe Medical Office', 'Linda Hospital', 'Bread Hospital',],
          datasets: [
            {
              label: 'Contribution this year',
              borderColor: '#6a82fb',
              backgroundColor: '#6a82fb',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
    
            {
              label: 'Contribution last year',
              borderColor: '#fc5c7d',
              backgroundColor: '#fc5c7d',
              data: [10, 30, 50, 60, 70, 80, 100],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area',
          },
          tooltips: {
            intersect: false,
            mode: 'nearest',
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                  labelString: 'Agencies',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Contributions',
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
        agenciesInvolved: [
          {
            id: 1,
            name: 'John Doe Medical Office',
            date: '3 month ago',
            progress: 10,
            isActive: true,
          },
          {
            id: 2,
            name: 'Linda Hospital',
            date: 'a month ago',
            progress: 60,
            isActive: true,
          },
          {
            id: 3,
            name: 'Bread Hospital',
            date: '6 months ago',
            progress: 70,
            isActive: true,
          },
        ]
      }

      ],
    }
  }
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }
  async updateAgencies(data, agencyId, caseId){
    const { Cases, activeCase } = this.state;
    let updatedCases = Cases;
    for (var i in updatedCases[activeCase].agenciesInvolved) {
      if (updatedCases[activeCase].agenciesInvolved[i].id == agencyId) {
        updatedCases[activeCase].agenciesInvolved[i] = data;
         break; //Stop this loop, we found it!
      }
    }
    await this.setState({
      Cases: updatedCases
    })
  }

  async deleteAgency(agencyId){
    const { Cases, activeCase } = this.state;
    let updatedCases = Cases;
    for (var i in updatedCases[activeCase].agenciesInvolved) {
      if (updatedCases[activeCase].agenciesInvolved[i].id == agencyId) {
       delete updatedCases[activeCase].agenciesInvolved[i];
         break; //Stop this loop, we found it!
      }
    }
    await this.setState({
      Cases: updatedCases
    })
  }

  async openCase(caseNumber){
    await this.setState({
      activeCase: caseNumber,
    })
  }

  render() {
    const { Cases, activeCase } = this.state;

    return (
      <Page
        className="DashboardPage"
        title="Cases"
        breadcrumbs={[{ name: 'Cases', active: true }]}
      >
        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Case Graph for Case {activeCase + 1}:</CardHeader>
              <CardBody>
                <Line
                  data={Cases[activeCase].data}
                  options={Cases[activeCase].options}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Cases</CardHeader>
              <ListGroup flush>
                {Cases &&
                  Cases.map((c, index) => (
                    <ListGroupItem onClick={() => this.openCase(index)}>
                      {`Case ${c.case} `}
                      <Badge color="secondary">
                        {_.size(c.data.labels)} Agencies Involved
                      </Badge>
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Agency Participation</CardHeader>
              <CardBody>
                <Agencies
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'date',
                    'participation',
                    '%',
                  ]}
                  agenciesData={Cases[activeCase].agenciesInvolved}
                  caseNumber = {Cases[activeCase].case}
                  updateCase={(data, agencyId, caseId) => this.updateAgencies(data, agencyId, caseId)}
                  deleteAgency={(agencyId) => this.deleteAgency(agencyId)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
