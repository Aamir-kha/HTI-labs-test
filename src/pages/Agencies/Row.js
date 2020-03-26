import React, { Component } from "react";
import TooltipButton from "../../components/Layout/TooltipButton";
import ConfirmModal from "../../components/Layout/ConfirmModal";
import _ from "lodash";

import { Progress } from 'reactstrap';
import AgencyModal from "./Form";

class AgencyRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteConfirmModal: false,
      toggleStatusConfirmModal: false
    };
  }

  async toggleAgencyStatus(agency) {
    await this.props.onAgencyStatusToggle(agency);
    this.setState({ toggleStatusConfirmModal: false });
  }


  async submit(data, id = "") {
    await this.props.changeCaseData(data, id);
  }

  async deleteAgency(id) {
    await this.props.onAgencyDelete(id);
    this.setState({ deleteConfirmModal: false });
  }

  render() {
    const { agency , index } = this.props || {};
    const styles = {
      width: "250px",
      height: "100px"
    };

    const toggleStatusButton = () => {
      return (
        <span>
          <TooltipButton
            icon="fa fa-toggle-off"
            name={agency && agency.isActive ? "Deactivate" : "Activate"}
            label=""
            classes={
              agency && agency.isActive
                ? "btn btn-warning m-1"
                : "btn btn-success m-1"
            }
            onClickTrigger={() =>
              this.setState({ toggleStatusConfirmModal: true })
            }
            placement="top"
            text={agency && agency.isActive ? "Deactivate" : "Activate"}
            state=""
            id={`is_active-${agency.id}`}
          />

          <ConfirmModal
            isOpen={this.state.toggleStatusConfirmModal}
            message={`Are you sure, you want to ${
              agency && agency.isActive ? "deactivate" : "activate"
            } agency?`}
            onAccept={() => this.toggleBannerStatus(agency)}
            onReject={() => this.setState({ toggleStatusConfirmModal: false })}
          />
        </span>
      );
    };

    const deleteButton = () => {
      return (
        <span>
          <TooltipButton
            icon="fa fa-trash"
            name="Delete"
            label=""
            classes="btn btn-danger m-1"
            onClickTrigger={() => this.setState({ deleteConfirmModal: true })}
            placement="top"
            text="Delete"
            state=""
            id={`delete-${agency.id}`}
          />
          <ConfirmModal
            isOpen={this.state.deleteConfirmModal}
            message="Are you sure, you want to delete Agency?"
            onAccept={() => this.deleteAgency(agency.id)}
            onReject={() => this.setState({ deleteConfirmModal: false })}
          />
        </span>
      );
    };

    return (
      <tr key={index}>
            <td className="align-middle text-center">{agency.name}</td>
            <td className="align-middle text-center">{agency.date}</td>
            <td className="align-middle text-center">
              <Progress value={agency.progress} style={{ height: 5 }} />
            </td>
            <td className="align-middle text-center">{agency.progress}%</td>
        <td className="align-middle text-center">
          <AgencyModal
            icon="fa fa-pencil-square"
            name="Edit"
            color={"info"}
            buttonTitle={"Update"}
            data={{...agency}}
            onSubmit={data => this.submit(data, agency.id)}
          /> 
           {deleteButton()}
          {toggleStatusButton()}
        </td>
      </tr>
    );
  }
}

export default AgencyRow;
