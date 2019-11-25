import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CampaginOptions from './CampaignList.js';
import CategoryOptions from './CategoryList.js';
import LanguageOptions from './LanguageList.js';
import MsgTypeOptions from './MessageTypeList.js';
import SubjectOptions from './SubjectList.js';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    campaign: '',
    message_type: '',
    message_language: '',
    subject: '',
    category: '',
    rename_this_table: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    fetch('http://localhost:1234/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        campaign: this.state.campaign,
        message_type: this.state.message_type,
        message_language: this.state.message_language,
        subject: this.state.subject,
        category: this.state.category,
        rename_this_table: this.state.rename_this_table
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))

  }

  submitFormEdit = e => {
    e.preventDefault();
    fetch('http://localhost:1234/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        id: this.state.id,
        campaign: this.state.campaign,
        message_type: this.state.message_type,
        message_language: this.state.message_language,
        subject: this.state.subject,
        category: this.state.category,
        rename_this_table: this.state.rename_this_table
      })
    })
      .then(response => response.json())
      .then(item => {
        if(item) {
          this.props.updateState(item)
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))

  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, campaign, message_type, message_language, subject, category, rename_this_table } = this.props.item
      this.setState({ id, campaign, message_type, message_language, subject, category, rename_this_table })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="campaign">Campaign</Label>
          <Input type="select" name="campaign" id="campaign" onChange={this.onChange} value={this.state.campaign === null ? '' : this.state.campaign}>
            <CampaginOptions />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="message_type">Message Type</Label>
          <Input type="select" name="message_type" id="message_type" onChange={this.onChange} value={this.state.message_type === null ? '' : this.state.message_type}  >
            <MsgTypeOptions />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="message_language">Message Language</Label>
          <Input type="select" name="message_language" id="message_language" onChange={this.onChange} value={this.state.message_language === null ? '' : this.state.message_language}>
            <LanguageOptions />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input type="select" name="subject" id="subject" onChange={this.onChange} value={this.state.subject === null ? '' : this.state.subject} >
            <SubjectOptions />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input type="select" name="category" id="category" onChange={this.onChange} value={this.state.category === null ? '' : this.state.category}>
            <CategoryOptions />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="rename_this_table">rename_this_table</Label>
          <Input type="text" name="rename_this_table" id="rename_this_table" onChange={this.onChange} value={this.state.rename_this_table === null ? '' : this.state.rename_this_table}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm
