import '@babel/polyfill';
import { getWeather } from './dom';
import './style/style.css';

const video = document.querySelector('#video');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const tempurature = document.querySelector('#tempurature');
const unit = document.querySelector('#tempurature');



getWeather(video);

