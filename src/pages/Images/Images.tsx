import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import { Image } from '../../common/interfaces/image.interface';
import { client } from '../../common/client';
import { Link } from 'react-router-dom';
import './Images.scss';

interface State {
  images: Image[];
}

export class Images extends React.Component<{}, State> {
  state: State = {
    images: [],
  };

  async componentDidMount() {
    const { data } = await client.get('image');
    console.log('res', data);
    this.setState({ images: data });
  }

  render() {
    return (
      <div className='Images'>
        <GridList cellHeight={180} className='grid'>
          <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader component='div'>Images</ListSubheader>
          </GridListTile>
          {this.state.images.map((image) => (
            <GridListTile key={image.url}>
              <img src={image.url} alt={image.title} />
              <GridListTileBar
                title={image.title}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${image.title}`}
                    className='icon'
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>

        <IconButton color='primary' aria-label='add' className='add-btn'>
          <Link to='/image/add'>
            <AddIcon fontSize='large' />
          </Link>
        </IconButton>
      </div>
    );
  }
}
