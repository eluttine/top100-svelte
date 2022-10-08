import type { CardItem } from "./types";

const items: CardItem[] = [
  {
    image: 'food-1s.jpg',
    title: 'Raikasta salaattia',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-2s.jpg',
    title: 'Kunnolla kasviksia että jaksaa',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-3s.jpg',
    title: 'Chilipaahtopaistia',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-4s.jpg',
    title: 'Vohvelit maistuu aina',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-5s.jpg',
    title: 'Tänään syödään vähän hienommin',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-6s.jpg',
    title: 'Herkulliset kasvispyörykät',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-7s.jpg',
    title: 'Raikas pestopasta!',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-8s.jpg',
    title: 'Lohta pedillä',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-9s.jpg',
    title: 'Lättyjä!',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-10s.jpg',
    title: 'Herkullinen hampurilainen',
    link: 'http://localhost:5173/'
  },
  {
    image: 'food-11s.jpg',
    title: 'Pientä purtavaa',
    link: 'http://localhost:5173/'
  }
];

export const load = () => {
  console.log('load', items)
  return {
    items
  }
}
