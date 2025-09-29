import makeStyles from '@material-ui/core/styles/makeStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Draggable } from 'react-beautiful-dnd';
import { DragableItem } from '../../models/DragableItem';
import { Theme, createStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      boxShadow: "0px -1px 1px 0px rgba(10,8,18,0.1)",
      marginTop: 2,
    },
    draggingListItem: {
      background: 'rgb(235,235,235)'
    },
  }),
);

export type DraggableListItemProps = {
  item: DragableItem;
  index: number;
  children?: React.ReactNode
};

const DraggableListItem = ({ item, index, children }: DraggableListItemProps) => {
  const classes = useStyles();
  return children !== undefined ?
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
          className={snapshot.isDragging ? classes.draggingListItem : classes.listItem}
        >
          {children}
        </ListItem>
      )}
    </Draggable>
    :
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListItem : classes.listItem}
        >
          <ListItemAvatar>
            <DragIndicatorIcon />
          </ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      )}
    </Draggable>
};

export default DraggableListItem;
