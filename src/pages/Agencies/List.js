import React from 'react';
import PropTypes from '../../utils/propTypes';

import { Table } from 'reactstrap';
import AgencyRow from './Row';

class Agencies extends React.Component {


    async changeData(data, id, caseId){
        await this.props.updateCase(data, id, caseId);
    }

    async agencyDelete(agencyId){
        await this.props.deleteAgency(agencyId);
    }

render(){
    const {agenciesData, headers, caseNumber, ...restProps} = this.props;

    const renderHead = () => {
        return (
          <thead className="text-capitalize align-middle text-center">
            <tr>
              <th>Name</th>
              <th>Joining Date</th>
              <th>Progress</th>
              <th>Contribution</th>
              <th>Actions</th>
            </tr>
          </thead>
        );
      };
  

    const renderRow = (agency, index) => {
        return (
          <AgencyRow
            agency={agency}
            index={index}
            key={agency.id}
            onAgencyDelete={agency => this.agencyDelete(agency)}
            onAgencyStatusToggle={agency => this.toggleAgencyStatus(agency)}
            changeCaseData = {(data, id) => this.changeData(data, id, caseNumber)}
          />
        );
      };
  return (
    <Table responsive hover {...restProps}>
       {renderHead()}
      <tbody>
        {agenciesData.map((agency, index) => renderRow(agency, index))}
      </tbody>
    </Table>
  )
        }
};

Agencies.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
    })
  ),
};

Agencies.defaultProps = {
  headers: [],
  usersData: [],
};

export default Agencies;
