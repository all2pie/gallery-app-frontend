import React from 'react';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import './Image-From.scss';
import { client } from '../../common/client';
import { Button } from '@material-ui/core';

export class ImageFrom extends React.Component<any> {
  state = {
    title: '',
    description: '',
    email: '',
    url: '',
    file: null,
  };

  handleFieldChange = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ [name]: event.target.value });
  };

  imageChange = (files: any[]) => {
    this.setState({ file: files[0] });
  };

  handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', this.state.file as any);
      const { data: image } = await client.post('uploadImage', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      await this.setState({ url: image });

      const { data } = await client.post('image', this.state);
      this.props.history.push('/');
    } catch (error) {
      console.log('error', error);
    }
  };

  isButtonDisabled = () => {
    return !(
      this.state.file &&
      this.state.title &&
      this.state.description &&
      this.state.email &&
      this.state.file
    );
  };

  render() {
    return (
      <form className='form' onSubmit={this.handelSubmit}>
        <TextField
          label='Title'
          value={this.state.title}
          onChange={this.handleFieldChange.bind(this, 'title')}
          type='text'
          required
          className='form-field'
        />

        <TextField
          label='Email'
          value={this.state.email}
          onChange={this.handleFieldChange.bind(this, 'email')}
          type='email'
          required
          className='form-field'
        />

        <TextField
          label='Description'
          value={this.state.description}
          onChange={this.handleFieldChange.bind(this, 'description')}
          required
          className='form-field'
        />

        <DropzoneArea
          dropzoneClass='image-select'
          onChange={this.imageChange}
          acceptedFiles={['image/jpeg', 'image/png', 'image/jpg']}
          filesLimit={1}
        />

        <Button
          type='submit'
          className='form-field'
          color='primary'
          variant='contained'
          disabled={this.isButtonDisabled()}
        >
          Save
        </Button>
      </form>
    );
  }
}
