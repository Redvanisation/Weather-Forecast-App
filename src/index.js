import '@babel/polyfill';
import { getWeather } from './dom';
import './style/style.css';

const video = document.querySelector('#video');

getWeather(video);
