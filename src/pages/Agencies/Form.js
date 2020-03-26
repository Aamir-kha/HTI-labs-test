import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";

const schema = yup.object({
  name: yup.string().required("name is required"),
  progress: yup.string().required("contribution is required")
});
const defaultData = { name: '', progress: ''};

class AgencyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  save(data) {
    this.props.onSubmit(data);
    this.toggle();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { color, icon, name, buttonTitle } = this.props;
    const { data } = this.props;
    return (
      <span>
        <Button color={color} className={icon} onClick={this.toggle}>
        {name}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Agency Form</ModalHeader>
          <Formik
            validationSchema={schema}
            onSubmit={values => this.save(values)}
            initialValues={data || defaultData}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              isValid,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <ModalBody>
                  <FormGroup row>
                    <Label for="name" sm={3}>
                      Name *
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        onChange={handleChange}
                        value={values.name}
                        isValid={touched.name && !errors.name}
                      />
                      {touched.name && <code>{errors.name}</code>}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="progress" sm={3}>
                      contribution % *
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="progress"
                        id="progress"
                        placeholder="progress"
                        value={values.progress}
                        onChange={handleChange}
                        isValid={touched.progress && !errors.progress}
                      />
                      {touched.progress && <code>{errors.progress}</code>}
                    </Col>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                   {buttonTitle}
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </Modal>
      </span>
    );
  }
}

export default AgencyModal;
