import { red, purple, blue, teal, yellow, grey } from '@mui/material/colors';

import {IMenuItem} from "./global/interfaces";
import {ITabItem} from "./global/interfaces/ITabItem";
import {IColorItem} from "./global/interfaces/IColorItem";

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    text: 'Time table',
    link: '/'
  },
  {
    id: 2,
    text: 'Exams',
    link: '/exams'
  },
  {
    id: 3,
    text: 'Teachers',
    link: '/teachers'
  },
]

export const tabsData: ITabItem[] = [
  {
    id: 0,
    text: 'Monday',
  },
  {
    id: 1,
    text: 'Tuesday',
  },
  {
    id: 2,
    text: 'Wednesday',
  },
  {
    id: 3,
    text: 'Thursday',
  },
  {
    id: 4,
    text: 'Friday',
  },
  {
    id: 5,
    text: 'Saturday',
  },
  {
    id: 6,
    text: 'Sunday',
  },
]

export const colorsData: IColorItem[] = [
  {
    id: 1,
    color: 'red',
    hex: red[100],
  },
  {
    id: 2,
    color: 'red',
    hex: red[200],
  },
  {
    id: 3,
    color: 'red',
    hex: red[300],
  },
  {
    id: 4,
    color: 'red',
    hex: red[400],
  },
  {
    id: 5,
    color: 'red',
    hex: red[500],
  },
  {
    id: 6,
    color: 'purple',
    hex: purple[100],
  },
  {
    id: 7,
    color: 'purple',
    hex: purple[200],
  },
  {
    id: 8,
    color: 'purple',
    hex: purple[300],
  },
  {
    id: 9,
    color: 'purple',
    hex: purple[400],
  },
  {
    id: 10,
    color: 'purple',
    hex: purple[500],
  },
  {
    id: 11,
    color: 'blue',
    hex: blue[100],
  },
  {
    id: 12,
    color: 'blue',
    hex: blue[200],
  },
  {
    id: 13,
    color: 'blue',
    hex: blue[300],
  },
  {
    id: 14,
    color: 'blue',
    hex: blue[400],
  },
  {
    id: 15,
    color: 'blue',
    hex: blue[500],
  },
  {
    id: 16,
    color: 'teal',
    hex: teal[100],
  },
  {
    id: 17,
    color: 'teal',
    hex: teal[200],
  },
  {
    id: 18,
    color: 'teal',
    hex: teal[300],
  },
  {
    id: 19,
    color: 'teal',
    hex: teal[400],
  },
  {
    id: 20,
    color: 'teal',
    hex: teal[500],
  },
  {
    id: 21,
    color: 'yellow',
    hex: yellow[100],
  },
  {
    id: 22,
    color: 'yellow',
    hex: yellow[200],
  },
  {
    id: 23,
    color: 'yellow',
    hex: yellow[300],
  },
  {
    id: 24,
    color: 'yellow',
    hex: yellow[400],
  },
  {
    id: 25,
    color: 'yellow',
    hex: yellow[500],
  },
  {
    id: 26,
    color: 'grey',
    hex: grey[100],
  },
  {
    id: 27,
    color: 'grey',
    hex: grey[200],
  },
  {
    id: 28,
    color: 'grey',
    hex: grey[300],
  },
  {
    id: 29,
    color: 'grey',
    hex: grey[400],
  },
  {
    id: 30,
    color: 'grey',
    hex: grey[500],
  },
]